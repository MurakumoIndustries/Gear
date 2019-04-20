<template>
    <div class="card mb-2">
        <div
            class="card-header py-2 px-3"
            data-toggle="collapse"
            :data-target="'#collapseEvo'+evoTypeText+data.id"
        >
            <span>{{data.name}}</span>
            <span class="float-right text-black-50">Phase.{{data.phase}}</span>
        </div>
        <div
            :id="'collapseEvo'+evoTypeText+data.id"
            class="collapse"
            :data-parent="'#collapseEvo'+evoTypeText"
        >
            <div class="card-body p-2">
                <div class="media">
                    <div class="mr-2 text-center">
                        <IconGear :isLink="true" :data="data" :type="type"/>
                    </div>
                    <div class="media-body" v-html="Ui.renderDesc(to.evoDesc)"></div>
                </div>
                <div class="form-row" v-for="(pattern,i) in from.evoPattern" :key="pattern.key">
                    <div class="col-6 col-lg-3">{{to.evoPattern[i].key}}</div>
                    <div class="col">
                        <div class="progress">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                :style="{width: Math.min(patternValue(from.evoPattern[i],to.evoPattern[i]),100)/2+'%'}"
                            >{{patternValue(from.evoPattern[i],to.evoPattern[i])}}%</div>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                :style="{width: Math.max(patternValue(from.evoPattern[i],to.evoPattern[i])-100,0)/2+'%'}"
                            ></div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col text-center">
                        <div
                            v-for="o in data.evoMaterials"
                            :key="o[0].id"
                            class="item-container"
                            data-toggle="tooltip"
                            data-html="true"
                            :title="'<b>'+o[0].name+'</b><br />'+Ui.renderDesc(o[0].desc)"
                        >
                            <img
                                class="icon-item"
                                :src="'../img/item/' + (o[0].icon || 'itm2_04_000_01') + '.png'"
                            >
                            <span class="item-count">{{o[1]}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";

import IconGear from "./IconGear.vue";

export default {
    props: {
        type: String,
        evoType: Number,
        from: Object,
        to: Object
    },
    mounted: function() {
        var $vm = this;
        this.$nextTick(function() {
            $($vm.$el)
                .find('[data-toggle="tooltip"]')
                .tooltip();
        });
    },
    computed: {
        data: function() {
            return this.evoType == 0 ? this.from : this.to;
        },
        evoTypeText: function() {
            return this.evoType == 0 ? "From" : "To";
        }
    },
    methods: {
        patternValue: function(fromPattern, toPattern) {
            return Math.round((toPattern.value / fromPattern.value) * 100);
        }
    },
    components: {
        IconGear
    }
};
</script>
<style scoped>
.item-container {
    display: inline-block;
    margin-right: 0.25rem;
    text-align: center;
    position: relative;
}
.item-container:last-of-type {
    margin-right: 0;
}
.item-container .item-count {
    position: absolute;
    bottom: 0;
    right: 0.25rem;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    color: #000;
    font-size: 0.9rem;
}
.icon-item {
    width: 4rem;
    height: 4rem;
}
</style>

