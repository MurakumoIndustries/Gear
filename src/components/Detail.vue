<template>
    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="modal-title" class="modal-title">{{data.name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div id="modal-body" class="modal-body">
                    <DetailWeapon v-if="gearType=='weapon'" :data="data"/>
                    <DetailEquipment v-if="gearType=='equipment'" :data="data"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Data } from "../js/data.js";
import { Event } from "../js/event.js";
import $ from "jquery";
import page from "page";

import DetailWeapon from "./DetailWeapon.vue";
import DetailEquipment from "./DetailEquipment.vue";

export default {
    data: function() {
        return {
            gearType: "",
            id: "",
            data: {}
        };
    },
    created: function() {
        var $vm = this;
        Event.$on("render", function(type, id) {
            var isModelShow = !!($vm.gearType && $vm.id);
            $vm.gearType = type;
            $vm.id = id;
            $vm.data = Data.get(type, id) || {};
            if (!$vm.gearType || !$vm.id || !$vm.data || !$vm.data.id) {
                if (isModelShow) {
                    $($vm.$el).modal("hide");
                }
                return;
            }

            $vm.$nextTick(function() {
                $($vm.$el).modal("show");
                $($vm.$el).on("hide.bs.modal", function() {
                    page.show("/");
                });
            });
        });
    },
    components: {
        DetailWeapon,
        DetailEquipment
    }
};
</script>
<style scoped>
</style>

