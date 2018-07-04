import $ from "jquery";
import _ from 'lodash';
import page from 'page';
import Ui from './ui.js';
import Data from './data.js';
import NProgress from 'nprogress';
import DataTable from 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css'

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
    $('#version').text(Data.getVersion());

    $('input[type=radio][name=GearType]').change(function () {
        page.redirect("/" + this.value);
    });
    //search
    var inputTimeout;
    $('#searchContainer input').keyup(function () {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(function () {
            render();
        }, 500);
    });
    $('#searchContainer select').change(function () {
        clearTimeout(inputTimeout);
        render();
    });
    inited = true;
};
var render = function (type) {
    if (!type) {
        type = currentType;
    }
    currentType = type;

    $('input[type=radio][name=GearType]').parent().removeClass('active');
    $('input[type=radio][name=GearType][value=' + currentType + ']')
        .prop('checked', true)
        .parent().addClass('active');

    var raw = Data.getAll(type);
    //filter raw
    var param = {
        name: $('#searchName').val(),
    }
    raw = _.filter(raw, function (o, i) {
        if (param.name && o.name.toLowerCase().indexOf(param.name.toLowerCase()) < 0) {
            return false;
        }
        return true;
    });
    //render table
    var data = [];
    //$('#dataTable').empty();
    if ($.fn.DataTable.isDataTable('#dataTable')) {
        $('#dataTable').DataTable().destroy();
    }
    $.each(raw, function (i, o) {
        var $tr = $('<tr>');
        var $imgtd = $('<td>');
        var row = $.extend({}, o);
        row.icon = o.icon ? '../img/item/' + o.icon + '.png' : "";
        row.actress = Data.get('actress', o.actressId);
        data.push(row);
    });
    $.extend(DataTable.ext.classes, {
        sInfo: "",
        sLengthSelect: "custom-select form-control",
    });
    $('#dataTable').DataTable({
        data: data,
        language: Ui.getText("DataTables_i18n"),
        dom: 'rt<"row mx-1"<"col text-nowrap"l><"col text-center py-2"i><"col-auto"p>>',
        processing: true,
        order: [[2, 'desc'], [5, 'desc'], [3, 'asc'], [4, 'asc'],],
        columns: [
            {
                title: "Image", data: "icon", orderable: false, render: function (data, type, row, meta) {
                    return '<img class="icon icon-td" src="' + data + '"/>';
                }
            },
            { title: "Name", data: "name", className: "text-nowrap" },
            { title: "Cost", data: "cost" },
            {
                title: "Category", data: "category", render: function (data, type, row, meta) {
                    return data;
                }
            },
            { title: "Type", data: 'type' },
            { title: "MaxLv", data: 'maxLv' },
            {
                title: "Atk", data: null, render: function (data, type, row, meta) {
                    switch (row.category) {
                        case 1: return row.shortAtkMax;
                        case 2: return row.longAtkMax;
                        default: return 0;
                    }
                }
            },
            {
                title: "AttrAtk", data: null, render: function (data, type, row, meta) {
                    switch (row.category) {
                        case 1: return row.shortAttrMax[row.attribute2nd - 4] || 0;
                        case 2: return row.longAttrMax[row.attribute2nd - 4] || 0;
                        default: return 0;
                    }
                }
            },
            {
                title: "Actress", data: null, render: function (data, type, row, meta) {
                    if (row.actress) {
                        return row.actress.name;
                    }
                    return null;
                },
                className: "text-nowrap"
            },
            {
                title: "Desc", data: 'shortDesc', render: function (data, type, row, meta) {
                    return Ui.renderDesc(data);
                }
            },
        ]
    });
};
var detail = function (id) {
    console.log("render", id);
    var self = this;
    if (!id) {
        //hideAll();
        return;
    }
    //expandById(id);
};


export { init };
export default { init };