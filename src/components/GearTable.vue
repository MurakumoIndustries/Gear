<template>
    <div class="main-container container-fluid">
        <div class="card my-2">
            <div
                style="cursor: pointer;"
                class="card-header"
                data-toggle="collapse"
                data-target="#collapseSearch"
            >
                <i class="material-icons">menu</i>
                <span>{{Ui.getText('search')}}</span>
            </div>
            <div id="collapseSearch" class="collapse">
                <div class="card-body">
                    <form id="searchContainer" onsubmit="return false;">
                        <div class="form-group form-row mb-0">
                            <label class="col-3 col-lg-1 col-form-label" for="searchName">Name</label>
                            <div class="col-9 col-lg-3 mb-2">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="searchName"
                                    v-model.trim="filters.name"
                                    placeholder="Name"
                                >
                            </div>
                            <label
                                class="col-3 col-lg-1 col-form-label"
                                for="searchCategory"
                            >Category</label>
                            <div class="col-9 col-lg-3 mb-2">
                                <select
                                    class="selectpicker"
                                    id="searchCategory"
                                    v-model="filters.category"
                                    data-width="100%"
                                >
                                    <option value>All</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <label class="col-3 col-lg-1 col-form-label" for="searchType">Type</label>
                            <div class="col-9 col-lg-3 mb-2">
                                <select
                                    class="selectpicker"
                                    id="searchType"
                                    v-model="filters.type"
                                    data-width="100%"
                                >
                                    <option value>All</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group form-row mb-0">
                            <label class="col-3 col-lg-1 col-form-label" for="searchRare">Rare</label>
                            <div class="col-9 col-lg-3 mb-2">
                                <select
                                    class="selectpicker"
                                    id="searchRare"
                                    v-model="filters.rare"
                                    data-width="100%"
                                >
                                    <option value>All</option>
                                    <option value="4">★★★★</option>
                                    <option value="3">★★★</option>
                                    <option value="2">★★</option>
                                    <option value="1">★</option>
                                </select>
                            </div>
                            <label class="col-3 col-lg-1 col-form-label" for="searchActress">Actress</label>
                            <div class="col-9 col-lg-3 mb-2">
                                <select
                                    class="selectpicker"
                                    id="searchActress"
                                    v-model="filters.actressId"
                                    multiple="multiple"
                                    data-live-search="true"
                                    data-width="100%"
                                    data-size="8"
                                    data-actions-box="true"
                                >
                                    <option :value="0">General</option>
                                    <option
                                        v-for="actress in actressList"
                                        v-bind:key="actress.id"
                                        v-bind:value="actress.id"
                                        v-bind:data-tokens="actress.name"
                                        v-bind:data-content="'<img class=\'icon-option\' src=\'' + (actress.miniIcon ? '../img/chara/' + actress.miniIcon + '.png' : '') + '\'>' + actress.name"
                                    >{{actress.name}}</option>
                                </select>
                            </div>
                            <label class="col-3 col-lg-1 col-form-label" for="searchCompany">Company</label>
                            <div class="col-9 col-lg-3 mb-2">
                                <select
                                    class="selectpicker"
                                    id="searchCompany"
                                    v-model="filters.company"
                                    multiple="multiple"
                                    data-live-search="true"
                                    data-width="100%"
                                    data-size="8"
                                    data-actions-box="true"
                                >
                                    <option
                                        v-for="o in companyList"
                                        v-bind:key="o.id"
                                        v-bind:value="o.id"
                                        v-bind:data-tokens="o.name"
                                        v-bind:data-content="'<img class=\'icon-option\' src=\'' + (o.icon ? '../img/com/' + o.icon + '.png' : '') + '\'>' + o.name"
                                    >{{o.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group form-row mb-0">
                            <label class="col-3 col-lg-1 col-form-label" for="searchSeries">Series</label>
                            <div class="col-9 col-lg-3 mb-2">
                                <select
                                    class="selectpicker"
                                    id="searchSeries"
                                    v-model="filters.armaSeriesId"
                                    data-width="100%"
                                >
                                    <option value>All</option>
                                    <option value="1702479047">Original</option>
                                    <option value="2086860166">Strike Witches</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group form-row mb-0">
                            <div class="col-12 col-lg-4 mb-2">
                                <div class="form-check">
                                    <label class="form-check-label" for="searchExcludeDefault">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="true"
                                            id="searchExcludeDefault"
                                            v-model="filters.excludeDefault"
                                        >
                                        Exclude Default
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <VuetablePaginationBootstrap
            ref="pagination"
            class="float-right mb-2"
            @vuetable-pagination:change-page="onChangePage"
        />
        <Vuetable
            ref="vuetable"
            :css="css.table"
            :api-mode="false"
            :fields="fields(gearType)"
            :sort-order="sortOrder"
            :data-manager="dataManager"
            data-path="data"
            pagination-path="pagination"
            :multi-sort="true"
            multi-sort-key="ctrl"
            @vuetable:pagination-data="onPaginationData"
        >
            <template v-slot:icon="props">
                <IconGear :isLink="true" :data="props.rowData" :type="gearType"/>
            </template>
            <template v-slot:name="props">
                <a :href="'#!/' + gearType + '/' + props.rowData.id">{{props.rowData.name}}</a>
            </template>
            <template v-slot:rare="props">{{"★".repeat(props.rowData.rare)}}</template>
            <template v-slot:atk="props">
                {{
                props.rowData.category==1?
                props.rowData.shortAtkMax:
                (props.rowData.category==2?
                props.rowData.longAtkMax:0) }}
            </template>
            <template v-slot:attrAtk="props">
                {{
                props.rowData.category==1?
                props.rowData.shortAttrMax[props.rowData.attribute2nd - 4] || 0:
                (props.rowData.category==2?
                props.rowData.longAttrMax[props.rowData.attribute2nd - 4] || 0: 0)
                }}
            </template>
            <template v-slot:actress="props">
                {{
                props.rowData.actress? props.rowData.actress.name:""
                }}
            </template>
            <template v-slot:desc="props">
                <div v-html="Ui.renderDesc(props.rowData.shortDesc||'')"></div>
            </template>
        </Vuetable>
        <VuetablePaginationBootstrap
            ref="paginationBottom"
            class="float-right mt-2"
            @vuetable-pagination:change-page="onChangePage"
        />
        <Detail/>
    </div>
</template>

<script>
import { Data } from "../js/data.js";
import { Event } from "../js/event.js";
import { Ui } from "../js/ui.js";
import $ from "jquery";
import { Vuetable } from "vuetable-2";

import Detail from "./Detail.vue";
import IconGear from "./IconGear.vue";
import VuetablePaginationBootstrap from "./VuetablePaginationBootstrap.vue";

export default {
    data: function() {
        var actressList = Data.getAll("actress");
        var companyList = Data.getAll("company");
        return {
            actressList: actressList,
            companyList: companyList,
            gearType: "",
            filters: {
                name: "",
                category: "",
                type: "",
                rare: "",
                actressId: [],
                company: [],
                armaSeriesId: "",
                excludeDefault: true
            },
            sortOrder: [
                {
                    field: "cost",
                    direction: "desc"
                },
                {
                    field: "__slot:rare",
                    sortField: "rare",
                    direction: "desc"
                },
                {
                    field: "maxLv",
                    direction: "desc"
                },
                {
                    field: "category",
                    direction: "asc"
                },
                {
                    field: "type",
                    direction: "asc"
                }
            ],
            pageSize: 10
        };
    },
    created: function() {
        var $vm = this;
        Event.$on("render", function(type, id) {
            if (!type) {
                return;
            }
            if ($vm.gearType == type) {
                return;
            }
            $vm.gearType = type;
            $vm.$nextTick(function() {
                $vm.$refs.vuetable.normalizeFields();
                $vm.$refs.vuetable.refresh();
            });
        });
    },
    mounted: function() {
        var $vm = this;
        this.$nextTick(function() {
            $($vm.$el)
                .find(".selectpicker")
                .selectpicker();
        });
    },
    watch: {
        filters: {
            handler: function() {
                this.search();
            },
            deep: true
        }
    },
    computed: {
        css: function() {
            return {
                table: {
                    tableClass:
                        "table table-striped table-bordered table-sm m-0",
                    loadingClass: "loading",
                    ascendingIcon: "arrow_drop_up",
                    descendingIcon: "arrow_drop_down",
                    handleIcon: "menu",
                    renderIcon: function(classes, options) {
                        return (
                            '<i class="material-icons">' +
                            (classes[1] || "") +
                            "</i>"
                        );
                    }
                }
            };
        }
    },
    methods: {
        search: _.debounce(function() {
            console.log("search");
            this.$refs.vuetable.refresh();
        }, 500),
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
            this.$refs.paginationBottom.setPaginationData(paginationData);
        },
        onChangePage(page) {
            this.$refs.vuetable.changePage(page);
        },
        fields: function(gearType) {
            var fields = [];
            switch (gearType) {
                case "weapon":
                    fields = [
                        {
                            name: "__slot:icon",
                            title: ""
                        },
                        {
                            name: "__slot:name",
                            title: "Name",
                            sortField: "name"
                        },
                        {
                            name: "cost",
                            sortField: "cost"
                        },
                        {
                            name: "__slot:rare",
                            title: "Rare",
                            sortField: "rare"
                        },
                        {
                            name: "category",
                            sortField: "category"
                        },
                        {
                            name: "type",
                            sortField: "type"
                        },
                        {
                            name: "maxLv",
                            sortField: "maxLv"
                        },
                        {
                            name: "__slot:atk",
                            title: "Atk",
                            sortField: "__atk"
                        },
                        {
                            name: "__slot:attrAtk",
                            title: "AttrAtk",
                            sortField: "__attrAtk"
                        },
                        {
                            name: "__slot:actress",
                            title: "Actress",
                            sortField: "__actress",
                            dataClass: "text-nowrap"
                        },
                        {
                            name: "__slot:desc",
                            title: "Desc",
                            dataClass: "text-nowrap"
                        }
                    ];
                    break;
                case "equipment":
                    fields = [
                        {
                            name: "__slot:icon",
                            title: ""
                        },
                        {
                            name: "__slot:name",
                            title: "Name",
                            sortField: "name"
                        },
                        {
                            name: "cost",
                            sortField: "cost"
                        },
                        {
                            name: "__slot:rare",
                            title: "Rare",
                            sortField: "rare"
                        },
                        {
                            name: "category",
                            sortField: "category"
                        },
                        {
                            name: "type",
                            sortField: "type"
                        },
                        {
                            name: "maxLv",
                            sortField: "maxLv"
                        },
                        {
                            name: "hpMax",
                            title: "HP",
                            sortField: "hpMax"
                        },
                        {
                            name: "defMax",
                            title: "DEF",
                            sortField: "defMax"
                        },
                        {
                            name: "spdMax",
                            title: "SPD",
                            sortField: "spdMax"
                        },
                        {
                            name: "__slot:actress",
                            title: "Actress",
                            sortField: "__actress",
                            dataClass: "text-nowrap"
                        },
                        {
                            name: "__slot:desc",
                            title: "Desc",
                            dataClass: "text-nowrap"
                        }
                    ];
                    break;
                default:
                    break;
            }
            _.each(fields, function(o, i) {
                o.titleClass = "text-nowrap pr-0";
            });
            return fields;
        },
        dataManager(sortOrder, pagination) {
            var $vm = this;
            if (!$vm.gearType) {
                return;
            }
            //console.log("dataManager: ", sortOrder, pagination);

            var raw = Data.getAll($vm.gearType);
            //filter raw
            raw = _.filter(raw, function(o, i) {
                if (
                    $vm.filters.name &&
                    (o.name || "")
                        .toLowerCase()
                        .indexOf($vm.filters.name.toLowerCase()) < 0
                ) {
                    return false;
                }
                if (
                    $vm.filters.category &&
                    o.category != $vm.filters.category
                ) {
                    return false;
                }
                if ($vm.filters.type && o.type != $vm.filters.type) {
                    return false;
                }
                if ($vm.filters.rare && o.rare != $vm.filters.rare) {
                    return false;
                }
                if (
                    $vm.filters.actressId.length &&
                    $vm.filters.actressId.indexOf(o.actressId) < 0
                ) {
                    return false;
                }
                if (
                    $vm.filters.company.length &&
                    $vm.filters.company.indexOf(o.company) < 0
                ) {
                    return false;
                }
                if (
                    $vm.filters.armaSeriesId.length &&
                    o.armaSeriesId &&
                    $vm.filters.armaSeriesId.indexOf(o.armaSeriesId) < 0
                ) {
                    return false;
                }
                if ($vm.filters.excludeDefault && o.isDefault) {
                    return false;
                }
                return true;
            });
            var data = [];
            $.each(raw, function(i, o) {
                var row = $.extend({}, o);
                row.actress = Data.get("actress", o.actressId);
                data.push(row);
            });

            if (sortOrder.length > 0) {
                var iteratees = [];
                var orders = [];
                _.each(sortOrder, function(sort) {
                    switch (sort.sortField) {
                        case "__atk": {
                            iteratees.push(function(row) {
                                switch (row.category) {
                                    case 1:
                                        return row.shortAtkMax;
                                    case 2:
                                        return row.longAtkMax;
                                    default:
                                        return 0;
                                }
                            });
                            break;
                        }
                        case "__attrAtk": {
                            iteratees.push(function(row) {
                                switch (row.category) {
                                    case 1:
                                        return (
                                            row.shortAttrMax[
                                                row.attribute2nd - 4
                                            ] || 0
                                        );
                                    case 2:
                                        return (
                                            row.longAttrMax[
                                                row.attribute2nd - 4
                                            ] || 0
                                        );
                                    default:
                                        return 0;
                                }
                            });
                            break;
                        }
                        case "__actress": {
                            iteratees.push(function(row) {
                                return (row.actress && row.actress.name) || "";
                            });
                            break;
                        }
                        default: {
                            iteratees.push(sort.sortField);
                            break;
                        }
                    }
                    orders.push(sort.direction);
                });
                data = _.orderBy(data, iteratees, orders);
                console.log(iteratees, orders);
            }

            pagination = this.$refs.vuetable.makePagination(
                data.length,
                $vm.pageSize,
                pagination.current_page
            );

            return {
                pagination: pagination,
                data: _.slice(data, pagination.from - 1, pagination.to)
            };
        }
    },
    components: {
        Vuetable,
        VuetablePaginationBootstrap,
        Detail,
        IconGear
    }
};
</script>
<style scoped>
.main-container {
    padding-top: 56px;
}
</style>
<style>
.icon-option {
    height: 1.5rem !important;
    vertical-align: top;
}
</style>



