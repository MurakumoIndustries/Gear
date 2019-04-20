import _ from 'lodash';
import NProgress from 'nprogress';
import Vue from 'vue'
import Konami from 'Konami'

import { Event } from "../js/event.js"

import App from '../App.vue'

var inited;

var init = function (type, id) {
    type = type.toLowerCase();
    NProgress.start();
    clear();
    NProgress.set(0.3);
    initControl();
    NProgress.set(0.6);
    render(type, id);
    NProgress.done();
};
var clear = function () {

};
var initControl = function () {
    if (inited) { return; }

    var $vm = new Vue({
        el: '#app',
        //template: '<App/>',
        render: function (h) {
            return h('App')
        },
        components: { App }
    });
    Vue.prototype.isExperimentalMode = function () {
        return getIsExperimentalMode();
    };

    new Konami(function () {
        setIsExperimentalMode(!getIsExperimentalMode());
        location.reload();
    });

    inited = true;
};
var getIsExperimentalMode = function () {
    return localStorage["ExperimentalMode"] === "true" || sessionStorage["ExperimentalMode"] === "true";
};
var setIsExperimentalMode = function (value) {
    sessionStorage["ExperimentalMode"] = value;
};

var render = function (type, id) {
    console.log("render", type, id);
    Event.$emit('render', type, id);
};
// var render = function (type) {
//     if (type == currentType) {
//         return;
//     }
//     currentType = type;

//     $('input[type=radio][name=GearType]').parent().removeClass('active');
//     $('input[type=radio][name=GearType][value=' + type + ']')
//         .prop('checked', true)
//         .parent().addClass('active');

//     $.extend(DataTable.ext.classes, {
//         sInfo: "",
//         sLengthSelect: "custom-select form-control",
//     });
//     if ($.fn.DataTable.isDataTable('#dataTable')) {
//         $('#dataTable').DataTable().destroy();
//     }
//     var tableOption = {
//         ajax: function (data, callback, settings) {
//             callback({
//                 data: getData(type)
//             });
//         },
//         language: Ui.getText("DataTables_i18n"),
//         dom: '<"row mx-1"<"col text-nowrap"l><"col text-center py-2"i><"col-auto"p>>rt<"row mx-1"<"col text-nowrap"l><"col text-center py-2"i><"col-auto"p>>',
//         processing: true,
//         order: [
//             [2, 'desc'],
//             [3, 'desc'],
//             [6, 'desc'],
//             [4, 'asc'],
//             [5, 'asc'],
//         ],
//     };
//     switch (type) {
//         case "weapon":
//             {
//                 $.extend(tableOption, {
//                     columns: [{
//                             data: "icon",
//                             orderable: false,
//                             render: function (data, _type, row, meta) {
//                                 return getGearImg(type, row, true);
//                             }
//                         },
//                         {
//                             title: "Name",
//                             data: "name",
//                             render: function (data, _type, row, meta) {
//                                 return '<a href="#!/' + type + '/' + row.id + '">' +
//                                     data;
//                             }
//                         },
//                         { title: "Cost", data: "cost" },
//                         {
//                             title: "Rare",
//                             data: "rare",
//                             render: function (data, type, row, meta) {
//                                 return _.repeat("★", data);
//                             }
//                         },
//                         {
//                             title: "Category",
//                             data: "category",
//                             render: function (data, type, row, meta) {
//                                 return data;
//                             }
//                         },
//                         { title: "Type", data: 'type' },
//                         { title: "MaxLv", data: 'maxLv' },
//                         {
//                             title: "Atk",
//                             data: null,
//                             render: function (data, type, row, meta) {
//                                 switch (row.category) {
//                                     case 1:
//                                         return row.shortAtkMax;
//                                     case 2:
//                                         return row.longAtkMax;
//                                     default:
//                                         return 0;
//                                 }
//                             }
//                         },
//                         {
//                             title: "AttrAtk",
//                             data: null,
//                             render: function (data, type, row, meta) {
//                                 switch (row.category) {
//                                     case 1:
//                                         return row.shortAttrMax[row.attribute2nd - 4] || 0;
//                                     case 2:
//                                         return row.longAttrMax[row.attribute2nd - 4] || 0;
//                                     default:
//                                         return 0;
//                                 }
//                             }
//                         },
//                         {
//                             title: "Actress",
//                             data: null,
//                             render: function (data, type, row, meta) {
//                                 if (row.actress) {
//                                     return row.actress.name;
//                                 }
//                                 return null;
//                             },
//                             className: "text-nowrap"
//                         },
//                         {
//                             title: "Desc",
//                             width: "20rem",
//                             data: function (row, type, set, meta) {
//                                 return row.shortDesc || "";
//                             },
//                             orderable: false,
//                             render: function (data, type, row, meta) {
//                                 return Ui.renderDesc(data);
//                             }
//                         },
//                     ]
//                 });
//                 break;
//             }
//         case "equipment":
//             {
//                 $.extend(tableOption, {
//                     columns: [{
//                             data: "icon",
//                             orderable: false,
//                             render: function (data, _type, row, meta) {
//                                 return getGearImg(type, row, true);
//                             }
//                         },
//                         {
//                             title: "Name",
//                             data: "name",
//                             render: function (data, _type, row, meta) {
//                                 return '<a href="#!/' + type + '/' + row.id + '">' +
//                                     data;
//                             }
//                         },
//                         { title: "Cost", data: "cost" },
//                         {
//                             title: "Rare",
//                             data: "rare",
//                             render: function (data, type, row, meta) {
//                                 return _.repeat("★", data);
//                             }
//                         },
//                         {
//                             title: "Category",
//                             data: "category",
//                             render: function (data, type, row, meta) {
//                                 return data;
//                             }
//                         },
//                         { title: "Type", data: 'type' },
//                         { title: "MaxLv", data: 'maxLv' },
//                         { title: "HP", data: 'hpMax' },
//                         { title: "DEF", data: 'defMax' },
//                         { title: "SPD", data: 'spdMax' },
//                         {
//                             title: "Desc",
//                             width: "20rem",
//                             data: function (row, type, set, meta) {
//                                 return row.shortDesc || "";
//                             },
//                             orderable: false,
//                             render: function (data, type, row, meta) {
//                                 return Ui.renderDesc(data);
//                             }
//                         },
//                     ]
//                 });
//                 break;
//             }
//         default:
//             break;
//     }
//     $('#dataTable').DataTable(tableOption);
// };
// var getEvoCard = function (type, evoType, from, to) {
//     var template = require('../template/evocard.html');
//     var html = template({
//         type: type,
//         evoType: evoType,
//         from: from,
//         to: to,
//         Ui: Ui,
//         getGearImg: getGearImg,
//     });
//     return html;
// };
// var detail = function (type, id) {
//     console.log("render", type, id);
//     if (!type || !id) {
//         return;
//     }
//     var data = Data.get(type, id);
//     var name = data.name;

//     data.evoFrom = _.map(_.filter(Data.getAll("recipe"), function (o) { return o.remodelId == data.id }),
//         function (o) {
//             var result = _.extend({
//                     evoMaterials: _.orderBy(_.map(o.materials, function (p, i) {
//                         return [Data.get("material", i), p];
//                     }), function (p) { return p[0].sortPriority })
//                 },
//                 Data.get(type, o.catalogId));
//             if (o.evoDesc) {
//                 result.evoDesc = o.evoDesc;
//             }
//             return result;
//         });

//     data.evoTo = _.map(_.filter(Data.getAll("recipe"), function (o) { return o.catalogId == data.id }),
//         function (o) {
//             var result = _.extend({
//                     evoMaterials: _.orderBy(_.map(o.materials, function (p, i) {
//                         return [Data.get("material", i), p];
//                     }), function (p) { return p[0].sortPriority })
//                 },
//                 Data.get(type, o.remodelId));
//             if (o.evoDesc) {
//                 result.evoDesc = o.evoDesc;
//             }
//             return result;
//         });

//     var company = Data.get('company', data.company);

//     switch (type) {
//         case "weapon":
//             {
//                 var template = require('../template/weapon.html');
//                 var html = template({
//                     type: type,
//                     data: data,
//                     company: company,
//                     Ui: Ui,
//                     Data: Data,
//                     getGearImg: getGearImg,
//                     getEvoCard: getEvoCard,
//                     isExperimentalMode: getIsExperimentalMode(),
//                 });
//                 $('#modal-body').html(html);
//                 break;
//             }
//         case "equipment":
//             {
//                 var template = require('../template/equipment.html');
//                 var html = template({
//                     type: type,
//                     data: data,
//                     company: company,
//                     Ui: Ui,
//                     Data: Data,
//                     getGearImg: getGearImg,
//                     getEvoCard: getEvoCard,
//                     isExperimentalMode: getIsExperimentalMode(),
//                 });
//                 $('#modal-body').html(html);
//                 break;
//             }
//         default:
//             break;
//     }
//     $('#modal [data-toggle="tooltip"]').tooltip();
//     $('#modal-title').text(name);
//     $('#modal').modal('show');
// };


export { init };
export default { init };