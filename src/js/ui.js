import $ from "jquery";
import _ from 'lodash';

var supportedLang = [{
        key: 'ja-JP',
        text: '日本語'
    },
    {
        key: 'zh-TW',
        text: '正體中文'
    },
    {
        key: 'en-US',
        text: 'English'
    },
    {
        key: 'zh-CN',
        text: '简体中文'
    }
];
var currentLang = '';
var data = [];
//navbar
data["search"] = { "ja-JP": "検索", "zh-TW": "搜尋", "en-US": "Search", "zh-CN": "查询" };
data["clear"] = { "ja-JP": "", "zh-TW": "清空", "en-US": "Clear", "zh-CN": "清空" };

data["weapon"] = { "ja-JP": "ウェポン", "zh-TW": "武器", "en-US": "Weapon", "zh-CN": "武器" };
data["equipment"] = { "ja-JP": "ドレス", "zh-TW": "服裝", "en-US": "Equipment", "zh-CN": "装备" };

data["currentversion"] = { "ja-JP": "バージョン：", "zh-TW": "當前版本：", "en-US": "Current Ver.:", "zh-CN": "当前版本：" };
data["externallink"] = { "ja-JP": "外部リンク", "zh-TW": "外部鏈接", "en-US": "External Links", "zh-CN": "外部链接" };
data["officalsite"] = { "ja-JP": "公式サイト", "zh-TW": "官網", "en-US": "Offical Site", "zh-CN": "官网" };
data["officalannouncement"] = { "ja-JP": "お知らせ", "zh-TW": "遊戲公告", "en-US": "Offical Announcement", "zh-CN": "游戏公告" };

data["ui"] = { "ja-JP": "UI言語", "zh-TW": "界面語言", "en-US": "UI", "zh-CN": "界面语言" };
data["data"] = { "ja-JP": "", "zh-TW": "資料語言", "en-US": "Data", "zh-CN": "数据语言" };

data["server"] = { "ja-JP": "サーバー", "zh-TW": "伺服器", "en-US": "Server", "zh-CN": "服务器" };
data["disablecache"] = { "ja-JP": "キャッシュを無効化", "zh-TW": "停用快取", "en-US": "Disable Cache", "zh-CN": "禁用缓存", };
data["enablecache"] = { "ja-JP": "キャッシュを有効化", "zh-TW": "啟用快取", "en-US": "Enable Cache", "zh-CN": "启用缓存", };
data["disablecachewarning"]={
    "ja-JP": "キャッシュを無効化にすると、ページの読み込みが遅くなります。無効化にしますか？",
    "zh-TW": "停用快取會使網頁載入變慢，是否確認停用？",
    "en-US": "Disabling caching will cause the page to load slowly, CONFIRM?",
    "zh-CN": "禁用缓存会导致网页加载缓慢，是否确认禁用？"
};

data["geartype"] = {
    "ja-JP": "ギア種別",
    "zh-TW": "武裝種別",
    "en-US": "Gear Type",
    "zh-CN": "武装类型",
};

data["weaponL"] = {
    1: { "ja-JP": "ライフル", "zh-TW": "步槍", "en-US": "Rifle", "zh-CN": "步枪" },
    2: { "ja-JP": "バズーカ", "zh-TW": "火箭筒", "en-US": "Bazooka", "zh-CN": "火箭筒" },
    3: { "ja-JP": "デュアル", "zh-TW": "雙槍", "en-US": "Twin", "zh-CN": "双枪" },
    4: { "ja-JP": "スナイパー", "zh-TW": "狙擊槍", "en-US": "Sniper", "zh-CN": "狙击枪" },
};
data["weaponS"] = {
    1: { "ja-JP": "両手剣", "zh-TW": "雙手劍", "en-US": "Sword", "zh-CN": "双手剑" },
    2: { "ja-JP": "ハンマー", "zh-TW": "大鎚", "en-US": "Hammer", "zh-CN": "锤子" },
    3: { "ja-JP": "ランス", "zh-TW": "長槍", "en-US": "Spear", "zh-CN": "长枪" },
    4: { "ja-JP": "片手剣", "zh-TW": "單手劍", "en-US": "Dagger", "zh-CN": "单手剑" },
    5: { "ja-JP": "拳銃", "zh-TW": "手槍", "en-US": "Handgun", "zh-CN": "手枪" },
};

data["attribute"] = {
    "ja-JP": "属性",
    "zh-TW": "屬性",
    "en-US": "Attribute",
    "zh-CN": "属性",
    0: { "ja-JP": "打撃", "zh-TW": "打擊", "en-US": "Blow", "zh-CN": "打击" },
    1: { "ja-JP": "斬撃", "zh-TW": "斬擊", "en-US": "Slash", "zh-CN": "斩击" },
    2: { "ja-JP": "実弾", "zh-TW": "實彈", "en-US": "Bullet", "zh-CN": "实弹" },
    3: { "ja-JP": "エネルギー", "zh-TW": "能量", "en-US": "Beam", "zh-CN": "能量" },
    4: { "ja-JP": "無", "zh-TW": "無", "en-US": "Normal", "zh-CN": "无" },
    5: { "ja-JP": "電撃", "zh-TW": "電擊", "en-US": "Thunder", "zh-CN": "电击" },
    6: { "ja-JP": "重力", "zh-TW": "重力", "en-US": "Gravity", "zh-CN": "重力" },
    7: { "ja-JP": "焼夷", "zh-TW": "燃燒", "en-US": "Fire", "zh-CN": "烧夷" },
    8: { "ja-JP": "冷撃", "zh-TW": "冷凍", "en-US": "Ice", "zh-CN": "冷击" },
    9: { "ja-JP": "撃光", "zh-TW": "擊光", "en-US": "Light", "zh-CN": "" },
    10: { "ja-JP": "崩壊", "zh-TW": "崩壞", "en-US": "Collapse", "zh-CN": "" },
    11: { "ja-JP": "理論", "zh-TW": "理論", "en-US": "Theory", "zh-CN": "" },
};

data["spdtype"] = {
    "ja-JP": "機動タイプ",
    "zh-TW": "機動類型",
    "en-US": "SPD Type",
    "zh-CN": "机动类型",
};

data["spdtypelight"] = {
    "ja-JP": "高機動",
    "zh-TW": "高機動",
    "en-US": "Light",
    "zh-CN": "高机动",
};

data["spdtypebalance"] = {
    "ja-JP": "バランス",
    "zh-TW": "平衡",
    "en-US": "Balance",
    "zh-CN": "平衡",
};

data["spdtypeheavy"] = {
    "ja-JP": "重装",
    "zh-TW": "重裝",
    "en-US": "Heavy",
    "zh-CN": "重装",
};

data[""] = {
    "ja-JP": "",
    "zh-TW": "",
    "en-US": "",
    "zh-CN": "",
};

data["bootstrap-select_i18n"] = {
    "ja-JP": {
        noneSelectedText: '何もが選択した',
        noneResultsText: '\'{0}\'が結果を返さない',
        countSelectedText: '{0}/{1}が選択した',
        maxOptionsText: ['限界は達した({n}{var}最大)', '限界をグループは達した({n}{var}最大)', ['アイテム', 'アイテム']],
        selectAllText: '全部を選択する',
        deselectAllText: '何も選択しない',
        multipleSeparator: ', '
    },
    "zh-TW": {
        noneSelectedText: '沒有選取任何項目',
        noneResultsText: '沒有找到符合的結果',
        countSelectedText: '已經選取{0}個項目',
        maxOptionsText: ['超過限制 (最多選擇{n}項)', '超過限制(最多選擇{n}組)'],
        selectAllText: '選取全部',
        deselectAllText: '全部取消',
        multipleSeparator: ', '
    },
    "en-US": {
        noneSelectedText: 'Nothing selected',
        noneResultsText: 'No results match {0}',
        countSelectedText: function (numSelected, numTotal) {
            return (numSelected == 1) ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function (numAll, numGroup) {
            return [
                (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
                (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
            ];
        },
        selectAllText: 'Select All',
        deselectAllText: 'Deselect All',
        multipleSeparator: ', '
    },
    "zh-CN": {
        noneSelectedText: '没有选中任何项',
        noneResultsText: '没有找到匹配项',
        countSelectedText: '选中{1}中的{0}项',
        maxOptionsText: ['超出限制 (最多选择{n}项)', '组选择超出限制(最多选择{n}组)'],
        multipleSeparator: ', ',
        selectAllText: '全选',
        deselectAllText: '取消全选'
    },
};

var getText = function (key, key2) {
    if (!data[key]) {
        console.log("ui language data missing", key);
        return key;
    }
    if (key2 === undefined) {
        return data[key][getLang()] || data[key]['en-US'];
    }
    if (!data[key][key2]) {
        console.log("ui language data missing", key, key2);
        return key;
    }
    return data[key][key2][getLang()] || data[key][key2]['en-US'];
};
var getLang = function () {
    if (!currentLang) {
        setLang();
    }
    return currentLang;
};
var getLangText = function () {
    if (!currentLang) {
        setLang();
    }
    return _.find(supportedLang, function (o) {
        return o.key == currentLang;
    }).text;
};
var setLang = function (lang) {
    lang = lang || localStorage["uilang"] || navigator.language || navigator.browserLanguage;
    if (_.some(supportedLang, function (o) { return o.key == lang }) == false) {
        lang = 'ja-JP';
    }
    currentLang = lang;
    localStorage["uilang"] = lang;
};
var init = function () {
    //$('[data-lang]').each(function () {
    //    var $this = $(this);
    //    var key = $this.data("lang");
    //    var value = getText(key);
    //    var target = $this.data("lang-target");
    //    if (target) {
    //        $this.attr(target, value);
    //    }
    //    else {
    //        $this.text(value);
    //    }
    //});
    //init bootstrap selectpicker
    $.fn.selectpicker.defaults = getText("bootstrap-select_i18n");
};
var renderAttrText = function (textList) {
    var text = "";
    var attrList = ["normal", "thunder", "gravity", "fire", "ice",
        "light", "collapse", "theory", "nothing"
    ];
    _.each(textList, function (o, i) {
        if (o > 0) {
            text += '<span class="attr-text attr-' + attrList[i] + '">' + o + '</span>';
        }
    });
    return text;
};
var renderDesc = function (text) {
    if (!text) {
        return text;
    }
    return text.replace(/\n/g, '<br />');
};

const Ui = {
    supportedLang,
    getText,
    getLang,
    getLangText,
    setLang,
    init,
    renderAttrText,
    renderDesc,
};

export { Ui };
export default Ui;