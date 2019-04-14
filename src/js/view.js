import $ from "jquery";
import _ from 'lodash';
import page from 'page';
import Ui from './ui.js';
import { Data } from './data.js';
import NProgress from 'nprogress';
import DataTable from 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css'
import Konami from 'Konami'

var inited;
var currentType;

var init = function (type, id) {
    type = type.toLowerCase();
    NProgress.start();
    clear();
    NProgress.set(0.3);
    initControl();
    NProgress.set(0.6);
    render(type);
    NProgress.set(0.9);
    detail(type, id);
    NProgress.done();
};
var clear = function () {

};
var initControl = function () {
    if (inited) { return; }
    //$('#version').text(Data.getVersion());

    var currentServer = Data.getCurrentServer();
    $('#server').text(currentServer.name);
    $('#version').text(currentServer.version);
    $.each(Data.getAllServers(), function (i, o) {
        $('#serverDivider').before('<a class="dropdown-item ' + (i == currentServer.id ? 'active' : '') + '" href="#!/server/' + i + '">' + o.name +
            '<p class="m-0" style="font-size:0.75rem;line-height:0.75rem;">' + o.version + '</p>' + '</a>');
    });

    $('input[type=radio][name=GearType]').change(function () {
        page.redirect("/" + this.value);
    });

    var actressList = Data.getAll("actress");
    _.each(actressList, function (o, i) {
        var text = o.name;

        var datacontent = '<img class="icon icon-option" src="' + (o.miniIcon ? '../img/chara/' + o.miniIcon + '.png' : "") + '">' + text;
        $('#searchActress').append($('<option value="' + o.id + '" data-tokens="' + text + '">' + text).attr('data-content', datacontent));
    });
    $('#searchActress').selectpicker('refresh');

    var companyList = Data.getAll("company");
    _.each(companyList, function (o, i) {
        var datacontent = '<img class="icon icon-option" src="' + (o.icon ? '../img/com/' + o.icon + '.png' : "") + '">' + o.name;
        $('#searchCompany').append($('<option value="' + o.id + '" data-tokens="' + o.name + '">' + o.name).attr('data-content', datacontent));
    });
    $('#searchCompany').selectpicker('refresh');
    //search control
    $('#searchContainer input').keyup(_.debounce(search, 500));
    $('#searchContainer input').change(_.debounce(search, 500));
    $('#searchContainer select').change(_.debounce(search, 500));

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

var search = function () {
    if ($.fn.DataTable.isDataTable('#dataTable')) {
        $('#dataTable').DataTable().ajax.reload();
    }
};
var getData = function (type) {
    var raw = Data.getAll(type);
    //filter raw
    var param = {
        name: $('#searchName').val(),
        category: $('#searchCategory').val(),
        type: $('#searchType').val(),
        rare: $('#searchRare').val(),
        actress: $('#searchActress').val(),
        company: $('#searchCompany').val(),
        series: $('#searchSeries').val(),
        excludeDefault: $('#searchExcludeDefault').prop('checked'),
    }
    raw = _.filter(raw, function (o, i) {
        if (param.name && (o.name || "").toLowerCase().indexOf(param.name.toLowerCase()) < 0) {
            return false;
        }
        if (param.category && o.category != param.category) {
            return false;
        }
        if (param.type && o.type != param.type) {
            return false;
        }
        if (param.rare && o.rare != param.rare) {
            return false;
        }
        if (param.actress.length && param.actress.indexOf(String(o.actressId)) < 0) {
            return false;
        }
        if (param.company.length && param.company.indexOf(String(o.company)) < 0) {
            return false;
        }
        if (param.series.length && o.armaSeriesId && param.series.indexOf(String(o.armaSeriesId)) < 0) {
            return false;
        }
        if (param.excludeDefault && o.isDefault) {
            return false;
        }
        return true;
    });
    var data = [];
    $.each(raw, function (i, o) {
        var row = $.extend({}, o);
        row.actress = Data.get('actress', o.actressId);
        data.push(row);
    });
    return data;
};
var getGearImg = function (type, data, isLink) {
    var template = require('../template/icongear.html');
    var html = template({
        type: type,
        data: data,
        isLink: isLink,
    });
    return html;
};
var render = function (type) {
    if (type == currentType) {
        return;
    }
    currentType = type;

    $('input[type=radio][name=GearType]').parent().removeClass('active');
    $('input[type=radio][name=GearType][value=' + type + ']')
        .prop('checked', true)
        .parent().addClass('active');

    $.extend(DataTable.ext.classes, {
        sInfo: "",
        sLengthSelect: "custom-select form-control",
    });
    if ($.fn.DataTable.isDataTable('#dataTable')) {
        $('#dataTable').DataTable().destroy();
    }
    var tableOption = {
        ajax: function (data, callback, settings) {
            callback({
                data: getData(type)
            });
        },
        language: Ui.getText("DataTables_i18n"),
        dom: '<"row mx-1"<"col text-nowrap"l><"col text-center py-2"i><"col-auto"p>>rt<"row mx-1"<"col text-nowrap"l><"col text-center py-2"i><"col-auto"p>>',
        processing: true,
        order: [
            [2, 'desc'],
            [3, 'desc'],
            [6, 'desc'],
            [4, 'asc'],
            [5, 'asc'],
        ],
    };
    switch (type) {
        case "weapon":
            {
                $.extend(tableOption, {
                    columns: [{
                            data: "icon",
                            orderable: false,
                            render: function (data, _type, row, meta) {
                                return getGearImg(type, row, true);
                            }
                        },
                        {
                            title: "Name",
                            data: "name",
                            render: function (data, _type, row, meta) {
                                return '<a href="#!/' + type + '/' + row.id + '">' +
                                    data;
                            }
                        },
                        { title: "Cost", data: "cost" },
                        {
                            title: "Rare",
                            data: "rare",
                            render: function (data, type, row, meta) {
                                return _.repeat("★", data);
                            }
                        },
                        {
                            title: "Category",
                            data: "category",
                            render: function (data, type, row, meta) {
                                return data;
                            }
                        },
                        { title: "Type", data: 'type' },
                        { title: "MaxLv", data: 'maxLv' },
                        {
                            title: "Atk",
                            data: null,
                            render: function (data, type, row, meta) {
                                switch (row.category) {
                                    case 1:
                                        return row.shortAtkMax;
                                    case 2:
                                        return row.longAtkMax;
                                    default:
                                        return 0;
                                }
                            }
                        },
                        {
                            title: "AttrAtk",
                            data: null,
                            render: function (data, type, row, meta) {
                                switch (row.category) {
                                    case 1:
                                        return row.shortAttrMax[row.attribute2nd - 4] || 0;
                                    case 2:
                                        return row.longAttrMax[row.attribute2nd - 4] || 0;
                                    default:
                                        return 0;
                                }
                            }
                        },
                        {
                            title: "Actress",
                            data: null,
                            render: function (data, type, row, meta) {
                                if (row.actress) {
                                    return row.actress.name;
                                }
                                return null;
                            },
                            className: "text-nowrap"
                        },
                        {
                            title: "Desc",
                            width: "20rem",
                            data: function (row, type, set, meta) {
                                return row.shortDesc || "";
                            },
                            orderable: false,
                            render: function (data, type, row, meta) {
                                return Ui.renderDesc(data);
                            }
                        },
                    ]
                });
                break;
            }
        case "equipment":
            {
                $.extend(tableOption, {
                    columns: [{
                            data: "icon",
                            orderable: false,
                            render: function (data, _type, row, meta) {
                                return getGearImg(type, row, true);
                            }
                        },
                        {
                            title: "Name",
                            data: "name",
                            render: function (data, _type, row, meta) {
                                return '<a href="#!/' + type + '/' + row.id + '">' +
                                    data;
                            }
                        },
                        { title: "Cost", data: "cost" },
                        {
                            title: "Rare",
                            data: "rare",
                            render: function (data, type, row, meta) {
                                return _.repeat("★", data);
                            }
                        },
                        {
                            title: "Category",
                            data: "category",
                            render: function (data, type, row, meta) {
                                return data;
                            }
                        },
                        { title: "Type", data: 'type' },
                        { title: "MaxLv", data: 'maxLv' },
                        { title: "HP", data: 'hpMax' },
                        { title: "DEF", data: 'defMax' },
                        { title: "SPD", data: 'spdMax' },
                        {
                            title: "Desc",
                            width: "20rem",
                            data: function (row, type, set, meta) {
                                return row.shortDesc || "";
                            },
                            orderable: false,
                            render: function (data, type, row, meta) {
                                return Ui.renderDesc(data);
                            }
                        },
                    ]
                });
                break;
            }
        default:
            break;
    }
    $('#dataTable').DataTable(tableOption);
};
var getEvoCard = function (type, evoType, from, to) {
    var template = require('../template/evocard.html');
    var html = template({
        type: type,
        evoType: evoType,
        from: from,
        to: to,
        Ui: Ui,
        getGearImg: getGearImg,
    });
    return html;
};
var detail = function (type, id) {
    console.log("render", type, id);
    if (!type || !id) {
        return;
    }
    var data = Data.get(type, id);
    var name = data.name;

    data.evoFrom = _.map(_.filter(Data.getAll("recipe"), function (o) { return o.remodelId == data.id }),
        function (o) {
            var result = _.extend({
                    evoMaterials: _.orderBy(_.map(o.materials, function (p, i) {
                        return [Data.get("material", i), p];
                    }), function (p) { return p[0].sortPriority })
                },
                Data.get(type, o.catalogId));
            if (o.evoDesc) {
                result.evoDesc = o.evoDesc;
            }
            return result;
        });

    data.evoTo = _.map(_.filter(Data.getAll("recipe"), function (o) { return o.catalogId == data.id }),
        function (o) {
            var result = _.extend({
                    evoMaterials: _.orderBy(_.map(o.materials, function (p, i) {
                        return [Data.get("material", i), p];
                    }), function (p) { return p[0].sortPriority })
                },
                Data.get(type, o.remodelId));
            if (o.evoDesc) {
                result.evoDesc = o.evoDesc;
            }
            return result;
        });

    var company = Data.get('company', data.company);

    switch (type) {
        case "weapon":
            {
                var template = require('../template/weapon.html');
                var html = template({
                    type: type,
                    data: data,
                    company: company,
                    Ui: Ui,
                    Data: Data,
                    getGearImg: getGearImg,
                    getEvoCard: getEvoCard,
                    isExperimentalMode: getIsExperimentalMode(),
                });
                $('#modal-body').html(html);
                break;
            }
        case "equipment":
            {
                var template = require('../template/equipment.html');
                var html = template({
                    type: type,
                    data: data,
                    company: company,
                    Ui: Ui,
                    Data: Data,
                    getGearImg: getGearImg,
                    getEvoCard: getEvoCard,
                    isExperimentalMode: getIsExperimentalMode(),
                });
                $('#modal-body').html(html);
                break;
            }
        default:
            break;
    }
    $('#modal [data-toggle="tooltip"]').tooltip();
    $('#modal-title').text(name);
    $('#modal').modal('show');
};


export { init };
export default { init };