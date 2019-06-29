<template>
    <div>
        <div style="position:absolute;right:3rem;top:-4rem;">
            <span class="text-black-50">{{company.name}}</span>
            <img
                class="icon-company"
                :src="company.icon ? '../img/com/' + company.icon + '.png' : ''"
                :title="company.name"
                :alt="company.name"
            >
        </div>
        <div class="media mb-2">
            <div class="mr-3">
                <IconGear :isLink="false" :data="data" :type="'equipment'"/>
            </div>
            <div class="media-body">
                <div class="row mt-3">
                    <div class="col-4">
                        <div class="float-left">COST</div>
                        <div class="text-right">{{data.cost}}</div>
                    </div>
                    <div class="col-8" v-if="data.category==2">
                        <div class="float-left">{{Ui.getText('spdtype')}}</div>
                        <div class="text-right" v-if="data.spdMax==200">{{Ui.getText('spdtypeheavy')}}</div>
                        <div class="text-right" v-if="data.spdMax==240">{{Ui.getText('spdtypebalance')}}</div>
                        <div class="text-right" v-if="data.spdMax==280">{{Ui.getText('spdtypelight')}}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">HP</div>
                    <div class="col-3">
                        <div id="detailHP" class="text-right">{{data.hpMax}}</div>
                    </div>
                    <div class="col-1">DEF</div>
                    <div class="col-3">
                        <div id="detailDEF" class="text-right">{{data.defMax}}</div>
                    </div>
                    <div class="col-1">SPD</div>
                    <div class="col-3">
                        <div id="detailDEF" class="text-right">{{data.spdMax}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="gearExtraInfo">
            <div class="card mb-2" :key="'collapseDesc'+data.id">
                <div
                    class="card-header"
                    data-toggle="collapse"
                    data-target="#collapseDesc"
                >Description</div>
                <div id="collapseDesc" class="collapse show" data-parent="#gearExtraInfo">
                    <div class="card-body" v-html="Ui.renderDesc(data.desc)"></div>
                </div>
            </div>
            <div class="card mb-2">
                <div
                    class="card-header"
                    data-toggle="collapse"
                    data-target="#collapseActiveSkill"
                >Gear Skill</div>
                <div id="collapseActiveSkill" class="collapse" data-parent="#gearExtraInfo">
                    <div class="card-body">
                        <div class="media">
                            <img
                                class="mr-3"
                                :src="aSkill.icon&&('../img/skill/' + aSkill.icon + '.png')"
                            >
                            <div class="media-body">
                                <div class="row">
                                    <div class="col">
                                        <fieldset>
                                            <legend>{{aSkill.name}}</legend>
                                            <div class="row">
                                                <div class="col">
                                                    <span>Freeze:</span>
                                                    {{aSkill.freezeTime}}s
                                                </div>
                                                <div class="col">
                                                    <span>Count:</span>
                                                    {{aSkill.activateLimit}}
                                                </div>
                                                <div class="col">
                                                    <span>ATK:</span>
                                                    {{data.longAtkMax}}
                                                    <span
                                                        v-html="Ui.renderAttrText(data.longAttrMax)"
                                                    />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <span>Invincible:</span>
                                                    {{aSkill.invincibleTime}}s
                                                </div>
                                                <div class="col">
                                                    <span>Duration:</span>
                                                    {{aSkill.effectTime}}s
                                                </div>
                                                <div class="col">
                                                    <span>Cooldown:</span>
                                                    {{aSkill.coolTime}}s
                                                </div>
                                            </div>
                                            <div v-html="Ui.renderDesc(aSkill.desc)"></div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-2" v-if="passiveSkills.length">
                <div
                    class="card-header"
                    data-toggle="collapse"
                    data-target="#collapsePassiveSkill"
                >Passive Skill</div>
                <div id="collapsePassiveSkill" class="collapse" data-parent="#gearExtraInfo">
                    <div class="card-body">
                        <div
                            v-for="pSkill in passiveSkills"
                            v-bind:key="pSkill.id+'-'+pSkill.openLevel"
                            class="row"
                        >
                            <div class="col-auto">
                                <span class="font-weight-light">
                                    Lv.
                                    {{pSkill.openLevel}}
                                </span>
                            </div>
                            <div class="col">
                                <h5>{{pSkill.skill.name}}</h5>
                                <div class="mb-1" v-html="Ui.renderDesc(pSkill.skill.desc)"></div>
                                <div v-if="isExperimentalMode()">
                                    <div v-for="text in pSkill.skill.detailList" v-bind:key="text">
                                        <small class="text-black-50">{{text}}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-2">
                <div class="card-header" data-toggle="collapse" data-target="#collapseEvo">
                    <span>Evolve</span>
                    <span class="float-right text-black-50">
                        Phase.
                        {{data.phase}}
                    </span>
                </div>
                <div id="collapseEvo" class="collapse" data-parent="#gearExtraInfo">
                    <div class="card-body p-0">
                        <div class="form-row m-0">
                            <div class="col px-2 pt-2 pb-0 border-right">
                                <div id="collapseEvoFrom">
                                    <EvoCard
                                        v-for="from in evoFrom"
                                        :key="from.id"
                                        :type="'equipment'"
                                        :evoType="0"
                                        :from="from"
                                        :to="data"
                                    />
                                </div>
                            </div>
                            <div class="col px-2 pt-2 pb-0">
                                <div id="collapseEvoTo">
                                    <EvoCard
                                        v-for="to in evoTo"
                                        :key="to.id"
                                        :type="'equipment'"
                                        :evoType="1"
                                        :from="data"
                                        :to="to"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Data } from "../js/data.js";

import IconGear from "./IconGear.vue";
import EvoCard from "./DetailEvoCard.vue";

export default {
    props: {
        data: Object
    },
    computed: {
        aSkill: function() {
            return Data.get("skillactive", this.data.activeSkill) || {};
        },
        passiveSkills: function() {
            var list = [];
            _.each(this.data.passiveSkills, function(p) {
                var s = _.extend({}, p);
                s.skill = Data.get("skillpassive", p.id) || {};
                list.push(s);
            });
            return list;
        },
        evoFrom: function() {
            var $vm = this;
            return _.map(
                _.filter(Data.getAll("recipe"), function(o) {
                    return o.remodelId == $vm.data.id;
                }),
                function(o) {
                    var result = _.extend(
                        {
                            evoMaterials: _.orderBy(
                                _.map(o.materials, function(p, i) {
                                    return [Data.get("material", i), p];
                                }),
                                function(p) {
                                    return p[0].sortPriority;
                                }
                            )
                        },
                        Data.get("equipment", o.catalogId)
                    );
                    if (o.evoDesc) {
                        result.evoDesc = o.evoDesc;
                    }
                    return result;
                }
            );
        },
        evoTo: function() {
            var $vm = this;
            return _.map(
                _.filter(Data.getAll("recipe"), function(o) {
                    return o.catalogId == $vm.data.id;
                }),
                function(o) {
                    var result = _.extend(
                        {
                            evoMaterials: _.orderBy(
                                _.map(o.materials, function(p, i) {
                                    return [Data.get("material", i), p];
                                }),
                                function(p) {
                                    return p[0].sortPriority;
                                }
                            )
                        },
                        Data.get("equipment", o.remodelId)
                    );
                    if (o.evoDesc) {
                        result.evoDesc = o.evoDesc;
                    }
                    return result;
                }
            );
        },
        company: function() {
            return Data.get("company", this.data.company) || {};
        }
    },
    components: {
        IconGear,
        EvoCard
    }
};
</script>
<style scoped>
.icon-company {
    width: 4rem;
    height: 4rem;
    vertical-align: middle;
}
</style>