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
                <IconGear :isLink="false" :data="data" :type="'weapon'"/>
            </div>
            <div class="media-body">
                <div class="row mt-3">
                    <div class="col-4">
                        <div class="float-left">COST</div>
                        <div class="text-right">{{data.cost}}</div>
                    </div>
                    <div class="col-auto">{{Ui.getText('geartype')}}</div>
                    <div
                        class="col text-right"
                    >{{Ui.getText(data.category==2?'weaponL':'weaponS',data.type)}}</div>
                    <div class="col-auto">{{Ui.getText('attribute',data.attribute1st)}}</div>
                </div>
                <div class="row">
                    <div class="col-auto">ATK</div>
                    <div class="col">
                        <div
                            id="detailAtk"
                            class="text-right"
                            v-if="data.category==1"
                        >{{data.shortAtkMax}}</div>
                        <div
                            id="detailAtk"
                            class="text-right"
                            v-if="data.category==2"
                        >{{data.longAtkMax}}</div>
                    </div>
                    <div class="col-auto">
                        <div
                            id="detailAttr"
                            class="text-right"
                            v-if="data.category==1"
                            v-html="Ui.renderAttrText(data.shortAttrMax)"
                        ></div>
                        <div
                            id="detailAttr"
                            class="text-right"
                            v-if="data.category==2"
                            v-html="Ui.renderAttrText(data.longAttrMax)"
                        ></div>
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
                                        :type="'weapon'"
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
                                        :type="'weapon'"
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
                        Data.get("weapon", o.catalogId)
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
                        Data.get("weapon", o.remodelId)
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

