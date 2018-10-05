import localForage from "localforage";

var data = {};

const version = 21478;
var getVersion = function () { return version; };

const baseKey = "MI_Gear_";
const lastUpdateKey = "lastUpdate_MI_Gear";

var init = function (forceInit) {
    forceInit = !!forceInit;
    return isDataOutdated().then(function (needForceUpdate) {
        var promises = [];
        if (!forceInit && !needForceUpdate) {
            console.log("All data cached. ");
            var loaddata = function (key) {
                return localForage.getItem(baseKey + key).then(json => {
                    data[key] = JSON.parse(json);
                });
            };
            promises.push(loaddata('actress'));
            promises.push(loaddata('weapon'));
            promises.push(loaddata('equipment'));
            promises.push(loaddata('skillactive'));
            promises.push(loaddata('skillpassive'));
            promises.push(loaddata('recipe'));
            promises.push(loaddata('material'));
            promises.push(loaddata('company'));
            return Promise.all(promises);
        }
        return localForage.clear().then(() => {
            var savedata = function (key, jsondata) {
                return localForage.setItem(baseKey + key, JSON.stringify(jsondata), function () {
                    console.log("Get data from web. ", key);
                    data[key] = jsondata;
                });
            }
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/actress.json').then(jsondata => {
                    return savedata('actress', jsondata.default);
                }));
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/weapon.json').then(jsondata => {
                    return savedata('weapon', jsondata.default);
                }));
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/equipment.json').then(jsondata => {
                    return savedata('equipment', jsondata.default);
                }));
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/skillactive.json').then(jsondata => {
                    return savedata('skillactive', jsondata.default);
                }));
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/skillpassive.json').then(jsondata => {
                    return savedata('skillpassive', jsondata.default);
                }));
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/recipe.json').then(jsondata => {
                    return savedata('recipe', jsondata.default);
                }));
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/material.json').then(jsondata => {
                    return savedata('material', jsondata.default);
                }));
            promises.push(
                import (
                    /* webpackChunkName: "jsondata" */
                    '../data/company.json').then(jsondata => {
                    return savedata('company', jsondata.default);
                }));
            return Promise.all(promises).then(() => {
                return saveLastUpdate();
            });
        });
    });
};

var lastUpdate;
var isDataOutdated = function () {
    return localForage.getItem(lastUpdateKey).then(function (data) {
        lastUpdate = data;
        return import ('../data/lastUpdate.json').then(data => {
            var local = lastUpdate;
            var remote = data.default;
            var isLatest = new Date(local).getTime() >= new Date(remote).getTime();
            lastUpdate = remote;
            if (!local) {
                return true;
            }
            return isLatest == false;
        });
    });
};
var saveLastUpdate = function () {
    return localForage.setItem(lastUpdateKey, lastUpdate)
};

var getAll = function (type) {
    if (!data[type.toLowerCase()]) {
        console.log("dirty data detected!");
        location.hash = '#!/init/force';
        return [];
    }
    return data[type.toLowerCase()];
};
var get = function (type, id) {
    return _.find(getAll(type), function (o) { return o.id == id });
};

export {
    getVersion,
    init,
    isDataOutdated,
    saveLastUpdate,
    getAll,
    get
};
export default {
    getVersion,
    init,
    isDataOutdated,
    saveLastUpdate,
    getAll,
    get
};