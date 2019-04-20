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