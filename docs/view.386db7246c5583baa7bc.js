(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{52:function(t,a,e){},53:function(t,a,e){},54:function(t,a,e){},55:function(t,a,e){},56:function(t,a,e){},57:function(t,a,e){},58:function(t,a,e){},61:function(t,a,e){"use strict";var s=e(52);e.n(s).a},62:function(t,a,e){"use strict";var s=e(53);e.n(s).a},63:function(t,a,e){"use strict";var s=e(54);e.n(s).a},64:function(t,a,e){"use strict";var s=e(55);e.n(s).a},65:function(t,a,e){"use strict";var s=e(56);e.n(s).a},66:function(t,a,e){"use strict";var s=e(57);e.n(s).a},67:function(t,a,e){"use strict";var s=e(58);e.n(s).a},68:function(t,a,e){"use strict";e.r(a);e(7);var s=e(1),i=e.n(s),r=e(18),n=e(60),l=e.n(n);const o=new r.a;var c=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Nav"),this._v(" "),a("GearTable")],1)};c._withStripped=!0;var d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("form",{staticClass:"form-inline"},[e("div",{staticClass:"btn-group"},[e("a",{class:["btn","btn-light",{active:"weapon"==t.gearType}],attrs:{href:"#!/weapon"},on:{click:function(a){t.gearType="weapon"}}},[t._v(t._s(t.Ui.getText("weapon")))]),t._v(" "),e("a",{class:["btn","btn-light",{active:"equipment"==t.gearType}],attrs:{href:"#!/equipment"},on:{click:function(a){t.gearType="equipment"}}},[t._v(t._s(t.Ui.getText("equipment")))])])])]),t._v(" "),e("ul",{staticClass:"navbar-nav my-0"},[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle py-0",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"icon icon-version"}),t._v(" "),e("div",{staticClass:"d-inline-block",staticStyle:{"vertical-align":"middle"}},[e("div",{attrs:{id:"server"}},[t._v(t._s(t.currentServer.name))]),t._v(" "),e("div",{staticClass:"m-0",staticStyle:{"font-size":"0.75rem","line-height":"0.75rem"},attrs:{id:"version"}},[t._v(t._s(t.currentServer.version))])])]),t._v(" "),e("ul",{staticClass:"dropdown-menu dropdown-menu-right"},[e("h6",{staticClass:"dropdown-header"},[t._v(t._s(t.Ui.getText("server")))]),t._v(" "),t._l(t.allServers,function(a){return e("a",{key:a.id,class:["dropdown-item",a.id==t.currentServer.id?"active":""],attrs:{href:"#!/server/"+a.id}},[t._v("\n                        "+t._s(a.name)+"\n                        "),e("p",{staticClass:"m-0",staticStyle:{"font-size":"0.75rem","line-height":"0.75rem"}},[t._v(t._s(a.version))])])}),t._v(" "),e("div",{staticClass:"dropdown-divider",attrs:{id:"serverDivider"}}),t._v(" "),e("h6",{staticClass:"dropdown-header"},[t._v(t._s(t.Ui.getText("externallink")))]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"https://colopl.co.jp/alicegearaegis/",target:"_blank",rel:"noopener noreferrer"}},[e("span",{staticClass:"mr-4"},[t._v(t._s(t.Ui.getText("officalsite")))]),t._v(" "),e("i",{staticClass:"material-icons text-black-50",staticStyle:{position:"absolute",right:"1rem"}},[t._v("open_in_new")])]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"https://alice.colopl.jp/news/show",target:"_blank",rel:"noopener noreferrer"}},[e("span",{staticClass:"mr-4"},[t._v(t._s(t.Ui.getText("officalannouncement")))]),t._v(" "),e("i",{staticClass:"material-icons text-black-50",staticStyle:{position:"absolute",right:"1rem"}},[t._v("open_in_new")])])],2)]),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"material-icons"},[t._v("language")]),t._v(" "),e("span",{attrs:{id:"currentLang"}},[t._v(t._s(t.langText))])]),t._v(" "),e("ul",{staticClass:"dropdown-menu dropdown-menu-right"},t._l(t.Ui.supportedLang,function(a){return e("a",{key:a.key,staticClass:"dropdown-item",attrs:{href:"#!/lang/"+a.key},on:{click:function(e){t.langText=a.text}}},[t._v(t._s(a.text))])}),0)])])])])};d._withStripped=!0;var v=e(3),p=e(5),u=e(8),m=e.n(u),f={data:function(){return{langText:p.a.getLangText(),gearType:""}},created:function(){var t=this;o.$on("render",function(a,e){a&&(t.gearType=a)})},computed:{currentServer:function(){return v.Data.getCurrentServer()},allServers:function(){return v.Data.getAllServers()}}},g=(e(61),e(51)),h=Object(g.a)(f,d,[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"pr-2",attrs:{href:"../"}},[a("i",{staticClass:"icon icon-murakumo"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"navbar-brand",attrs:{title:"Murakumo Industries Gear List",href:"#"}},[e("span",{staticClass:"d-none d-xl-inline-block"},[t._v("Murakumo Industries")]),t._v(" "),e("span",{staticClass:"d-none d-lg-inline-block d-xl-none"},[t._v("MI")]),t._v(" "),e("span",{staticClass:"d-none d-sm-inline-block d-md-inline-block d-lg-none"},[t._v("Murakumo Industries")]),t._v(" "),e("span",{staticClass:"d-sm-none"},[t._v("MI")]),t._v(" "),e("span",[t._v("Gear")]),t._v(" "),e("span",{staticClass:"d-none d-sm-inline-block"},[t._v("List")]),t._v(" "),e("sup",[t._v("α")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"65af85a3",null);h.options.__file="src/components/Nav.vue";var C=h.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-container container-fluid"},[e("div",{staticClass:"card my-2"},[e("div",{staticClass:"card-header",staticStyle:{cursor:"pointer"},attrs:{"data-toggle":"collapse","data-target":"#collapseSearch"}},[e("i",{staticClass:"material-icons"},[t._v("menu")]),t._v(" "),e("span",[t._v(t._s(t.Ui.getText("search")))])]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapseSearch"}},[e("div",{staticClass:"card-body"},[e("form",{attrs:{id:"searchContainer",onsubmit:"return false;"}},[e("div",{staticClass:"form-group form-row mb-0"},[e("label",{staticClass:"col-3 col-lg-1 col-form-label",attrs:{for:"searchName"}},[t._v("Name")]),t._v(" "),e("div",{staticClass:"col-9 col-lg-3 mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.filters.name,expression:"filters.name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"searchName",placeholder:"Name"},domProps:{value:t.filters.name},on:{input:function(a){a.target.composing||t.$set(t.filters,"name",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),t._v(" "),e("label",{staticClass:"col-3 col-lg-1 col-form-label",attrs:{for:"searchCategory"}},[t._v("Category")]),t._v(" "),e("div",{staticClass:"col-9 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.category,expression:"filters.category"}],staticClass:"selectpicker",attrs:{id:"searchCategory","data-width":"100%"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filters,"category",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("All")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("2")])])]),t._v(" "),e("label",{staticClass:"col-3 col-lg-1 col-form-label",attrs:{for:"searchType"}},[t._v("Type")]),t._v(" "),e("div",{staticClass:"col-9 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.type,expression:"filters.type"}],staticClass:"selectpicker",attrs:{id:"searchType","data-width":"100%"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filters,"type",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("All")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("5")])])])]),t._v(" "),e("div",{staticClass:"form-group form-row mb-0"},[e("label",{staticClass:"col-3 col-lg-1 col-form-label",attrs:{for:"searchRare"}},[t._v("Rare")]),t._v(" "),e("div",{staticClass:"col-9 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.rare,expression:"filters.rare"}],staticClass:"selectpicker",attrs:{id:"searchRare","data-width":"100%"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filters,"rare",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("All")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("★★★★")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("★★★")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("★★")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("★")])])]),t._v(" "),e("label",{staticClass:"col-3 col-lg-1 col-form-label",attrs:{for:"searchActress"}},[t._v("Actress")]),t._v(" "),e("div",{staticClass:"col-9 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.actressId,expression:"filters.actressId"}],staticClass:"selectpicker",attrs:{id:"searchActress",multiple:"multiple","data-live-search":"true","data-width":"100%","data-size":"8","data-actions-box":"true"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filters,"actressId",a.target.multiple?e:e[0])}}},[e("option",{domProps:{value:0}},[t._v("General")]),t._v(" "),t._l(t.actressList,function(a){return e("option",{key:a.id,attrs:{"data-tokens":a.name,"data-content":"<img class='icon-option' src='"+(a.miniIcon?"../img/chara/"+a.miniIcon+".png":"")+"'>"+a.name},domProps:{value:a.id}},[t._v(t._s(a.name))])})],2)]),t._v(" "),e("label",{staticClass:"col-3 col-lg-1 col-form-label",attrs:{for:"searchCompany"}},[t._v("Company")]),t._v(" "),e("div",{staticClass:"col-9 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.company,expression:"filters.company"}],staticClass:"selectpicker",attrs:{id:"searchCompany",multiple:"multiple","data-live-search":"true","data-width":"100%","data-size":"8","data-actions-box":"true"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filters,"company",a.target.multiple?e:e[0])}}},t._l(t.companyList,function(a){return e("option",{key:a.id,attrs:{"data-tokens":a.name,"data-content":"<img class='icon-option' src='"+(a.icon?"../img/com/"+a.icon+".png":"")+"'>"+a.name},domProps:{value:a.id}},[t._v(t._s(a.name))])}),0)])]),t._v(" "),e("div",{staticClass:"form-group form-row mb-0"},[e("label",{staticClass:"col-3 col-lg-1 col-form-label",attrs:{for:"searchSeries"}},[t._v("Series")]),t._v(" "),e("div",{staticClass:"col-9 col-lg-3 mb-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.armaSeriesId,expression:"filters.armaSeriesId"}],staticClass:"selectpicker",attrs:{id:"searchSeries","data-width":"100%"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filters,"armaSeriesId",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("All")]),t._v(" "),e("option",{attrs:{value:"1702479047"}},[t._v("Original")]),t._v(" "),e("option",{attrs:{value:"2086860166"}},[t._v("Strike Witches")])])])]),t._v(" "),e("div",{staticClass:"form-group form-row mb-0"},[e("div",{staticClass:"col-12 col-lg-4 mb-2"},[e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label",attrs:{for:"searchExcludeDefault"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.excludeDefault,expression:"filters.excludeDefault"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"searchExcludeDefault"},domProps:{checked:Array.isArray(t.filters.excludeDefault)?t._i(t.filters.excludeDefault,"true")>-1:t.filters.excludeDefault},on:{change:function(a){var e=t.filters.excludeDefault,s=a.target,i=!!s.checked;if(Array.isArray(e)){var r=t._i(e,"true");s.checked?r<0&&t.$set(t.filters,"excludeDefault",e.concat(["true"])):r>-1&&t.$set(t.filters,"excludeDefault",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.filters,"excludeDefault",i)}}}),t._v("\n                                    Exclude Default\n                                ")])])])])])])])]),t._v(" "),e("VuetablePaginationBootstrap",{ref:"pagination",staticClass:"float-right mb-2",on:{"vuetable-pagination:change-page":t.onChangePage}}),t._v(" "),e("Vuetable",{ref:"vuetable",attrs:{css:t.css.table,"api-mode":!1,fields:t.fields(t.gearType),"sort-order":t.sortOrder,"data-manager":t.dataManager,"data-path":"data","pagination-path":"pagination","multi-sort":!0,"multi-sort-key":"ctrl"},on:{"vuetable:pagination-data":t.onPaginationData},scopedSlots:t._u([{key:"icon",fn:function(a){return[e("IconGear",{attrs:{isLink:!0,data:a.rowData,type:t.gearType}})]}},{key:"name",fn:function(a){return[e("a",{attrs:{href:"#!/"+t.gearType+"/"+a.rowData.id}},[t._v(t._s(a.rowData.name))])]}},{key:"rare",fn:function(a){return[t._v(t._s("★".repeat(a.rowData.rare)))]}},{key:"atk",fn:function(a){return[t._v("\n            "+t._s(1==a.rowData.category?a.rowData.shortAtkMax:2==a.rowData.category?a.rowData.longAtkMax:0)+"\n        ")]}},{key:"attrAtk",fn:function(a){return[t._v("\n            "+t._s(1==a.rowData.category?a.rowData.shortAttrMax[a.rowData.attribute2nd-4]||0:2==a.rowData.category&&a.rowData.longAttrMax[a.rowData.attribute2nd-4]||0)+"\n        ")]}},{key:"actress",fn:function(a){return[t._v("\n            "+t._s(a.rowData.actress?a.rowData.actress.name:"")+"\n        ")]}},{key:"desc",fn:function(a){return[e("div",{domProps:{innerHTML:t._s(t.Ui.renderDesc(a.rowData.shortDesc||""))}})]}}])}),t._v(" "),e("VuetablePaginationBootstrap",{ref:"paginationBottom",staticClass:"float-right mt-2",on:{"vuetable-pagination:change-page":t.onChangePage}}),t._v(" "),e("Detail")],1)};y._withStripped=!0;var b=e(59),x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"modal-title"}},[t._v(t._s(t.data.name))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"modal-body",attrs:{id:"modal-body"}},["weapon"==t.gearType?e("DetailWeapon",{attrs:{data:t.data}}):t._e(),t._v(" "),"equipment"==t.gearType?e("DetailEquipment",{attrs:{data:t.data}}):t._e()],1)])])])};x._withStripped=!0;var k=e(0),w=e.n(k),D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticStyle:{position:"absolute",right:"3rem",top:"-4rem"}},[e("span",{staticClass:"text-black-50"},[t._v(t._s(t.company.name))]),t._v(" "),e("img",{staticClass:"icon-company",attrs:{src:t.company.icon?"../img/com/"+t.company.icon+".png":"",title:t.company.name,alt:t.company.name}})]),t._v(" "),e("div",{staticClass:"media mb-2"},[e("div",{staticClass:"mr-3"},[e("IconGear",{attrs:{isLink:!1,data:t.data,type:"weapon"}})],1),t._v(" "),e("div",{staticClass:"media-body"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"float-left"},[t._v("COST")]),t._v(" "),e("div",{staticClass:"text-right"},[t._v(t._s(t.data.cost))])]),t._v(" "),e("div",{staticClass:"col-auto"},[t._v(t._s(t.Ui.getText("geartype")))]),t._v(" "),e("div",{staticClass:"col text-right"},[t._v(t._s(t.Ui.getText(2==t.data.category?"weaponL":"weaponS",t.data.type)))]),t._v(" "),e("div",{staticClass:"col-auto"},[t._v(t._s(t.Ui.getText("attribute",t.data.attribute1st)))])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-auto"},[t._v("ATK")]),t._v(" "),e("div",{staticClass:"col"},[1==t.data.category?e("div",{staticClass:"text-right",attrs:{id:"detailAtk"}},[t._v(t._s(t.data.shortAtkMax))]):t._e(),t._v(" "),2==t.data.category?e("div",{staticClass:"text-right",attrs:{id:"detailAtk"}},[t._v(t._s(t.data.longAtkMax))]):t._e()]),t._v(" "),e("div",{staticClass:"col-auto"},[1==t.data.category?e("div",{staticClass:"text-right",attrs:{id:"detailAttr"},domProps:{innerHTML:t._s(t.Ui.renderAttrText(t.data.shortAttrMax))}}):t._e(),t._v(" "),2==t.data.category?e("div",{staticClass:"text-right",attrs:{id:"detailAttr"},domProps:{innerHTML:t._s(t.Ui.renderAttrText(t.data.longAttrMax))}}):t._e()])])])]),t._v(" "),e("div",{attrs:{id:"gearExtraInfo"}},[e("div",{key:"collapseDesc"+t.data.id,staticClass:"card mb-2"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#collapseDesc"}},[t._v("Description")]),t._v(" "),e("div",{staticClass:"collapse show",attrs:{id:"collapseDesc","data-parent":"#gearExtraInfo"}},[e("div",{staticClass:"card-body",domProps:{innerHTML:t._s(t.Ui.renderDesc(t.data.desc))}})])]),t._v(" "),t.passiveSkills.length?e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#collapsePassiveSkill"}},[t._v("Passive Skill")]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapsePassiveSkill","data-parent":"#gearExtraInfo"}},[e("div",{staticClass:"card-body"},t._l(t.passiveSkills,function(a){return e("div",{key:a.id+"-"+a.openLevel,staticClass:"row"},[e("div",{staticClass:"col-auto"},[e("span",{staticClass:"font-weight-light"},[t._v("\n                                Lv.\n                                "+t._s(a.openLevel)+"\n                            ")])]),t._v(" "),e("div",{staticClass:"col"},[e("h5",[t._v(t._s(a.skill.name))]),t._v(" "),e("div",{staticClass:"mb-1",domProps:{innerHTML:t._s(t.Ui.renderDesc(a.skill.desc))}}),t._v(" "),t.isExperimentalMode()?e("div",t._l(a.skill.detailList,function(a){return e("div",{key:a},[e("small",{staticClass:"text-black-50"},[t._v(t._s(a))])])}),0):t._e()])])}),0)])]):t._e(),t._v(" "),e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#collapseEvo"}},[e("span",[t._v("Evolve")]),t._v(" "),e("span",{staticClass:"float-right text-black-50"},[t._v("\n                    Phase.\n                    "+t._s(t.data.phase)+"\n                ")])]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapseEvo","data-parent":"#gearExtraInfo"}},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"form-row m-0"},[e("div",{staticClass:"col px-2 pt-2 pb-0 border-right"},[e("div",{attrs:{id:"collapseEvoFrom"}},t._l(t.evoFrom,function(a){return e("EvoCard",{key:a.id,attrs:{type:"weapon",evoType:0,from:a,to:t.data}})}),1)]),t._v(" "),e("div",{staticClass:"col px-2 pt-2 pb-0"},[e("div",{attrs:{id:"collapseEvoTo"}},t._l(t.evoTo,function(a){return e("EvoCard",{key:a.id,attrs:{type:"weapon",evoType:1,from:t.data,to:a}})}),1)])])])])])])])};D._withStripped=!0;var S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"evo-type-text"},[t._v(t._s(t.data.evoType))]),t._v(" "),e("div",{staticClass:"icon-gear-container"},[e(t.isLink?"a":"span",{tag:"a",attrs:{href:"#!/"+t.type+"/"+t.data.id}},[e("img",{staticClass:"icon-gear",attrs:{src:t.data.icon?"../img/item/"+t.data.icon+".png":"",title:t.data.name,alt:t.data.name}})])],1)])};S._withStripped=!0;var T={props:{isLink:Boolean,data:Object,type:String}},P=(e(62),Object(g.a)(T,S,[],!1,null,"40c99c50",null));P.options.__file="src/components/IconGear.vue";var A=P.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-header py-2 px-3",attrs:{"data-toggle":"collapse","data-target":"#collapseEvo"+t.evoTypeText+t.data.id}},[e("span",[t._v(t._s(t.data.name))]),t._v(" "),e("span",{staticClass:"float-right text-black-50"},[t._v("Phase."+t._s(t.data.phase))])]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapseEvo"+t.evoTypeText+t.data.id,"data-parent":"#collapseEvo"+t.evoTypeText}},[e("div",{staticClass:"card-body p-2"},[e("div",{staticClass:"media"},[e("div",{staticClass:"mr-2 text-center"},[e("IconGear",{attrs:{isLink:!0,data:t.data,type:t.type}})],1),t._v(" "),e("div",{staticClass:"media-body",domProps:{innerHTML:t._s(t.Ui.renderDesc(t.to.evoDesc))}})]),t._v(" "),t._l(t.from.evoPattern,function(a,s){return e("div",{key:a.key,staticClass:"form-row"},[e("div",{staticClass:"col-6 col-lg-3"},[t._v(t._s(t.to.evoPattern[s].key))]),t._v(" "),e("div",{staticClass:"col"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:{width:Math.min(t.patternValue(t.from.evoPattern[s],t.to.evoPattern[s]),100)/2+"%"},attrs:{role:"progressbar"}},[t._v(t._s(t.patternValue(t.from.evoPattern[s],t.to.evoPattern[s]))+"%")]),t._v(" "),e("div",{staticClass:"progress-bar bg-warning",style:{width:Math.max(t.patternValue(t.from.evoPattern[s],t.to.evoPattern[s])-100,0)/2+"%"},attrs:{role:"progressbar"}})])])])}),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"col text-center"},t._l(t.data.evoMaterials,function(a){return e("div",{key:a[0].id,staticClass:"item-container",attrs:{"data-toggle":"tooltip","data-html":"true",title:"<b>"+a[0].name+"</b><br />"+t.Ui.renderDesc(a[0].desc)}},[e("img",{staticClass:"icon-item",attrs:{src:"../img/item/"+(a[0].icon||"itm2_04_000_01")+".png"}}),t._v(" "),e("span",{staticClass:"item-count"},[t._v(t._s(a[1]))])])}),0)])],2)])])};E._withStripped=!0;var M={props:{type:String,evoType:Number,from:Object,to:Object},mounted:function(){var t=this;this.$nextTick(function(){m()(t.$el).find('[data-toggle="tooltip"]').tooltip()})},computed:{data:function(){return 0==this.evoType?this.from:this.to},evoTypeText:function(){return 0==this.evoType?"From":"To"}},methods:{patternValue:function(t,a){return Math.round(a.value/t.value*100)}},components:{IconGear:A}},I=(e(63),Object(g.a)(M,E,[],!1,null,"ee44ec06",null));I.options.__file="src/components/DetailEvoCard.vue";var L=I.exports,$={props:{data:Object},computed:{passiveSkills:function(){var t=[];return _.each(this.data.passiveSkills,function(a){var e=_.extend({},a);e.skill=v.Data.get("skillpassive",a.id)||{},t.push(e)}),t},evoFrom:function(){var t=this;return _.map(_.filter(v.Data.getAll("recipe"),function(a){return a.remodelId==t.data.id}),function(t){var a=_.extend({evoMaterials:_.orderBy(_.map(t.materials,function(t,a){return[v.Data.get("material",a),t]}),function(t){return t[0].sortPriority})},v.Data.get("weapon",t.catalogId));return t.evoDesc&&(a.evoDesc=t.evoDesc),a})},evoTo:function(){var t=this;return _.map(_.filter(v.Data.getAll("recipe"),function(a){return a.catalogId==t.data.id}),function(t){var a=_.extend({evoMaterials:_.orderBy(_.map(t.materials,function(t,a){return[v.Data.get("material",a),t]}),function(t){return t[0].sortPriority})},v.Data.get("weapon",t.remodelId));return t.evoDesc&&(a.evoDesc=t.evoDesc),a})},company:function(){return v.Data.get("company",this.data.company)||{}}},components:{IconGear:A,EvoCard:L}},F=(e(64),Object(g.a)($,D,[],!1,null,"61596b7d",null));F.options.__file="src/components/DetailWeapon.vue";var O=F.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticStyle:{position:"absolute",right:"3rem",top:"-4rem"}},[e("span",{staticClass:"text-black-50"},[t._v(t._s(t.company.name))]),t._v(" "),e("img",{staticClass:"icon-company",attrs:{src:t.company.icon?"../img/com/"+t.company.icon+".png":"",title:t.company.name,alt:t.company.name}})]),t._v(" "),e("div",{staticClass:"media mb-2"},[e("div",{staticClass:"mr-3"},[e("IconGear",{attrs:{isLink:!1,data:t.data,type:"equipment"}})],1),t._v(" "),e("div",{staticClass:"media-body"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"float-left"},[t._v("COST")]),t._v(" "),e("div",{staticClass:"text-right"},[t._v(t._s(t.data.cost))])]),t._v(" "),2==t.data.category?e("div",{staticClass:"col-8"},[e("div",{staticClass:"float-left"},[t._v("spd type")]),t._v(" "),200==t.data.spdMax?e("div",{staticClass:"text-right"},[t._v("重装")]):t._e(),t._v(" "),240==t.data.spdMax?e("div",{staticClass:"text-right"},[t._v("バランス")]):t._e(),t._v(" "),280==t.data.spdMax?e("div",{staticClass:"text-right"},[t._v("高機動")]):t._e()]):t._e()]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"},[t._v("HP")]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"text-right",attrs:{id:"detailHP"}},[t._v(t._s(t.data.hpMax))])]),t._v(" "),e("div",{staticClass:"col-1"},[t._v("DEF")]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"text-right",attrs:{id:"detailDEF"}},[t._v(t._s(t.data.defMax))])]),t._v(" "),e("div",{staticClass:"col-1"},[t._v("SPD")]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"text-right",attrs:{id:"detailDEF"}},[t._v(t._s(t.data.spdMax))])])])])]),t._v(" "),e("div",{attrs:{id:"gearExtraInfo"}},[e("div",{key:"collapseDesc"+t.data.id,staticClass:"card mb-2"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#collapseDesc"}},[t._v("Description")]),t._v(" "),e("div",{staticClass:"collapse show",attrs:{id:"collapseDesc","data-parent":"#gearExtraInfo"}},[e("div",{staticClass:"card-body",domProps:{innerHTML:t._s(t.Ui.renderDesc(t.data.desc))}})])]),t._v(" "),e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#collapseActiveSkill"}},[t._v("Gear Skill")]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapseActiveSkill","data-parent":"#gearExtraInfo"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"media"},[e("img",{staticClass:"mr-3",attrs:{src:t.aSkill.icon&&"../img/skill/"+t.aSkill.icon+".png"}}),t._v(" "),e("div",{staticClass:"media-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("fieldset",[e("legend",[t._v(t._s(t.aSkill.name))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",[t._v("Freeze:")]),t._v("\n                                                "+t._s(t.aSkill.freezeTime)+"s\n                                            ")]),t._v(" "),e("div",{staticClass:"col"},[e("span",[t._v("Count:")]),t._v("\n                                                "+t._s(t.aSkill.activateLimit)+"\n                                            ")]),t._v(" "),e("div",{staticClass:"col"},[e("span",[t._v("ATK:")]),t._v("\n                                                "+t._s(t.data.longAtkMax)+"\n                                                "),e("span",{domProps:{innerHTML:t._s(t.Ui.renderAttrText(t.data.longAttrMax))}})])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",[t._v("Invincible:")]),t._v("\n                                                "+t._s(t.aSkill.invincibleTime)+"s\n                                            ")]),t._v(" "),e("div",{staticClass:"col"},[e("span",[t._v("Duration:")]),t._v("\n                                                "+t._s(t.aSkill.effectTime)+"s\n                                            ")]),t._v(" "),e("div",{staticClass:"col"},[e("span",[t._v("Cooldown:")]),t._v("\n                                                "+t._s(t.aSkill.coolTime)+"s\n                                            ")])]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.Ui.renderDesc(t.aSkill.desc))}})])])])])])])])]),t._v(" "),t.passiveSkills.length?e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#collapsePassiveSkill"}},[t._v("Passive Skill")]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapsePassiveSkill","data-parent":"#gearExtraInfo"}},[e("div",{staticClass:"card-body"},t._l(t.passiveSkills,function(a){return e("div",{key:a.id+"-"+a.openLevel,staticClass:"row"},[e("div",{staticClass:"col-auto"},[e("span",{staticClass:"font-weight-light"},[t._v("\n                                Lv.\n                                "+t._s(a.openLevel)+"\n                            ")])]),t._v(" "),e("div",{staticClass:"col"},[e("h5",[t._v(t._s(a.skill.name))]),t._v(" "),e("div",{staticClass:"mb-1",domProps:{innerHTML:t._s(t.Ui.renderDesc(a.skill.desc))}}),t._v(" "),t.isExperimentalMode()?e("div",t._l(a.skill.detailList,function(a){return e("div",{key:a},[e("small",{staticClass:"text-black-50"},[t._v(t._s(a))])])}),0):t._e()])])}),0)])]):t._e(),t._v(" "),e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"collapse","data-target":"#collapseEvo"}},[e("span",[t._v("Evolve")]),t._v(" "),e("span",{staticClass:"float-right text-black-50"},[t._v("\n                    Phase.\n                    "+t._s(t.data.phase)+"\n                ")])]),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"collapseEvo","data-parent":"#gearExtraInfo"}},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"form-row m-0"},[e("div",{staticClass:"col px-2 pt-2 pb-0 border-right"},[e("div",{attrs:{id:"collapseEvoFrom"}},t._l(t.evoFrom,function(a){return e("EvoCard",{key:a.id,attrs:{type:"equipment",evoType:0,from:a,to:t.data}})}),1)]),t._v(" "),e("div",{staticClass:"col px-2 pt-2 pb-0"},[e("div",{attrs:{id:"collapseEvoTo"}},t._l(t.evoTo,function(a){return e("EvoCard",{key:a.id,attrs:{type:"equipment",evoType:1,from:t.data,to:a}})}),1)])])])])])])])};U._withStripped=!0;var N={props:{data:Object},computed:{aSkill:function(){return v.Data.get("skillactive",this.data.activeSkill)||{}},passiveSkills:function(){var t=[];return _.each(this.data.passiveSkills,function(a){var e=_.extend({},a);e.skill=v.Data.get("skillpassive",a.id)||{},t.push(e)}),t},evoFrom:function(){var t=this;return _.map(_.filter(v.Data.getAll("recipe"),function(a){return a.remodelId==t.data.id}),function(t){var a=_.extend({evoMaterials:_.orderBy(_.map(t.materials,function(t,a){return[v.Data.get("material",a),t]}),function(t){return t[0].sortPriority})},v.Data.get("equipment",t.catalogId));return t.evoDesc&&(a.evoDesc=t.evoDesc),a})},evoTo:function(){var t=this;return _.map(_.filter(v.Data.getAll("recipe"),function(a){return a.catalogId==t.data.id}),function(t){var a=_.extend({evoMaterials:_.orderBy(_.map(t.materials,function(t,a){return[v.Data.get("material",a),t]}),function(t){return t[0].sortPriority})},v.Data.get("equipment",t.remodelId));return t.evoDesc&&(a.evoDesc=t.evoDesc),a})},company:function(){return v.Data.get("company",this.data.company)||{}}},components:{IconGear:A,EvoCard:L}},j=(e(65),Object(g.a)(N,U,[],!1,null,"a82ac886",null));j.options.__file="src/components/DetailEquipment.vue";var G={data:function(){return{gearType:"",id:"",data:{}}},created:function(){var t=this;o.$on("render",function(a,e){var s=!(!t.gearType||!t.id);t.gearType=a,t.id=e,t.data=v.Data.get(a,e)||{},t.gearType&&t.id&&t.data&&t.data.id?t.$nextTick(function(){m()(t.$el).modal("show"),m()(t.$el).on("hide.bs.modal",function(){w.a.show("/"+t.gearType)})}):s&&m()(t.$el).modal("hide")})},components:{DetailWeapon:O,DetailEquipment:j.exports}},H=Object(g.a)(G,x,[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,"a38ba3fe",null);H.options.__file="src/components/Detail.vue";var q=H.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"pagination"},[e("li",{class:["page-item",{disabled:t.isOnFirstPage}]},[e("a",{staticClass:"page-link",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.loadPage(1)}}},[e("i",{staticClass:"material-icons",staticStyle:{height:"1rem","line-height":"1.25rem"}},[t._v("first_page")])])]),t._v(" "),e("li",{class:["page-item",{disabled:t.isOnFirstPage}]},[e("a",{staticClass:"page-link",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.loadPage("prev")}}},[e("i",{staticClass:"material-icons",staticStyle:{height:"1rem","line-height":"1.25rem"}},[t._v("chevron_left")])])]),t._v(" "),t.notEnoughPages?t._l(t.totalPage,function(a){return e("li",{key:a,class:["page-item",{active:t.isCurrentPage(a)}]},[e("a",{staticClass:"page-link",attrs:{href:""},domProps:{innerHTML:t._s(a)},on:{click:function(e){return e.preventDefault(),t.loadPage(a)}}})])}):[e("li",{directives:[{name:"show",rawName:"v-show",value:t.windowStart>1,expression:"windowStart>1"}],class:["page-item","disabled"]},[t._m(0)]),t._v(" "),t._l(t.windowSize,function(a){return e("li",{key:a,class:["page-item",{active:t.isCurrentPage(t.windowStart+a-1)}]},[e("a",{staticClass:"page-link",attrs:{href:""},domProps:{innerHTML:t._s(t.windowStart+a-1)},on:{click:function(e){return e.preventDefault(),t.loadPage(t.windowStart+a-1)}}})])}),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.windowStart+t.windowSize-1<t.totalPage,expression:"windowStart+windowSize-1<totalPage"}],class:["page-item","disabled"]},[t._m(1)])],t._v(" "),e("li",{class:["page-item",{disabled:t.isOnLastPage}]},[e("a",{staticClass:"page-link",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.loadPage("next")}}},[e("i",{staticClass:"material-icons",staticStyle:{height:"1rem","line-height":"1.25rem"}},[t._v("chevron_right")])])]),t._v(" "),e("li",{class:["page-item",{disabled:t.isOnLastPage}]},[e("a",{staticClass:"page-link",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.loadPage(t.totalPage)}}},[e("i",{staticClass:"material-icons",staticStyle:{height:"1rem","line-height":"1.25rem"}},[t._v("last_page")])])])],2)};z._withStripped=!0;var B={mixins:[b.VuetablePaginationMixin]},V=Object(g.a)(B,z,[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"page-link",attrs:{href:""}},[a("i",{staticClass:"material-icons",staticStyle:{height:"1rem","line-height":"1.25rem"}},[this._v("more_horiz")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"page-link",attrs:{href:""}},[a("i",{staticClass:"material-icons",staticStyle:{height:"1rem","line-height":"1.25rem"}},[this._v("more_horiz")])])}],!1,null,null,null);V.options.__file="src/components/VuetablePaginationBootstrap.vue";var R=V.exports,W={data:function(){return{actressList:v.Data.getAll("actress"),companyList:v.Data.getAll("company"),gearType:"",filters:{name:"",category:"",type:"",rare:"",actressId:[],company:[],armaSeriesId:"",excludeDefault:!0},sortOrder:[{field:"cost",direction:"desc"},{field:"__slot:rare",sortField:"rare",direction:"desc"},{field:"maxLv",direction:"desc"},{field:"category",direction:"asc"},{field:"type",direction:"asc"}],pageSize:10}},created:function(){var t=this;o.$on("render",function(a,e){a&&t.gearType!=a&&(t.gearType=a,t.$nextTick(function(){t.$refs.vuetable.normalizeFields(),t.$refs.vuetable.refresh()}))})},mounted:function(){var t=this;this.$nextTick(function(){m()(t.$el).find(".selectpicker").selectpicker()})},watch:{filters:{handler:function(){this.search()},deep:!0}},computed:{css:function(){return{table:{tableClass:"table table-striped table-bordered table-sm m-0",loadingClass:"loading",ascendingIcon:"arrow_drop_up",descendingIcon:"arrow_drop_down",handleIcon:"menu",renderIcon:function(t,a){return'<i class="material-icons">'+(t[1]||"")+"</i>"}}}}},methods:{search:_.debounce(function(){console.log("search"),this.$refs.vuetable.refresh()},500),onPaginationData(t){this.$refs.pagination.setPaginationData(t),this.$refs.paginationBottom.setPaginationData(t)},onChangePage(t){this.$refs.vuetable.changePage(t)},fields:function(t){var a=[];switch(t){case"weapon":a=[{name:"__slot:icon",title:""},{name:"__slot:name",title:"Name",sortField:"name"},{name:"cost",sortField:"cost"},{name:"__slot:rare",title:"Rare",sortField:"rare"},{name:"category",sortField:"category"},{name:"type",sortField:"type"},{name:"maxLv",sortField:"maxLv"},{name:"__slot:atk",title:"Atk",sortField:"__atk"},{name:"__slot:attrAtk",title:"AttrAtk",sortField:"__attrAtk"},{name:"__slot:actress",title:"Actress",sortField:"__actress",dataClass:"text-nowrap"},{name:"__slot:desc",title:"Desc",dataClass:"text-nowrap"}];break;case"equipment":a=[{name:"__slot:icon",title:""},{name:"__slot:name",title:"Name",sortField:"name"},{name:"cost",sortField:"cost"},{name:"__slot:rare",title:"Rare",sortField:"rare"},{name:"category",sortField:"category"},{name:"type",sortField:"type"},{name:"maxLv",sortField:"maxLv"},{name:"hpMax",title:"HP",sortField:"hpMax"},{name:"defMax",title:"DEF",sortField:"defMax"},{name:"spdMax",title:"SPD",sortField:"spdMax"},{name:"__slot:actress",title:"Actress",sortField:"__actress",dataClass:"text-nowrap"},{name:"__slot:desc",title:"Desc",dataClass:"text-nowrap"}]}return _.each(a,function(t,a){t.titleClass="text-nowrap pr-0"}),a},dataManager(t,a){var e=this;if(e.gearType){var s=v.Data.getAll(e.gearType);s=_.filter(s,function(t,a){return!(e.filters.name&&(t.name||"").toLowerCase().indexOf(e.filters.name.toLowerCase())<0)&&((!e.filters.category||t.category==e.filters.category)&&((!e.filters.type||t.type==e.filters.type)&&((!e.filters.rare||t.rare==e.filters.rare)&&(!(e.filters.actressId.length&&e.filters.actressId.indexOf(t.actressId)<0)&&(!(e.filters.company.length&&e.filters.company.indexOf(t.company)<0)&&(!(e.filters.armaSeriesId.length&&t.armaSeriesId&&e.filters.armaSeriesId.indexOf(t.armaSeriesId)<0)&&(!e.filters.excludeDefault||!t.isDefault)))))))});var i=[];if(m.a.each(s,function(t,a){var e=m.a.extend({},a);e.actress=v.Data.get("actress",a.actressId),i.push(e)}),t.length>0){var r=[],n=[];_.each(t,function(t){switch(t.sortField){case"__atk":r.push(function(t){switch(t.category){case 1:return t.shortAtkMax;case 2:return t.longAtkMax;default:return 0}});break;case"__attrAtk":r.push(function(t){switch(t.category){case 1:return t.shortAttrMax[t.attribute2nd-4]||0;case 2:return t.longAttrMax[t.attribute2nd-4]||0;default:return 0}});break;case"__actress":r.push(function(t){return t.actress&&t.actress.name||""});break;default:r.push(t.sortField)}n.push(t.direction)}),i=_.orderBy(i,r,n),console.log(r,n)}return{pagination:a=this.$refs.vuetable.makePagination(i.length,e.pageSize,a.current_page),data:_.slice(i,a.from-1,a.to)}}}},components:{Vuetable:b.Vuetable,VuetablePaginationBootstrap:R,Detail:q,IconGear:A}},J=(e(66),e(67),Object(g.a)(W,y,[],!1,null,"0850b3ff",null));J.options.__file="src/components/GearTable.vue";var K={components:{Nav:C,GearTable:J.exports}},Q=Object(g.a)(K,c,[],!1,null,null,null);Q.options.__file="src/App.vue";var X,Y=Q.exports;e.d(a,"init",function(){return Z});var Z=function(t,a){t=t.toLowerCase(),i.a.start(),tt(),i.a.set(.3),at(),i.a.set(.6),it(t,a),i.a.done()},tt=function(){},at=function(){if(!X){new r.a({el:"#app",render:function(t){return t("App")},components:{App:Y}});r.a.prototype.isExperimentalMode=function(){return et()},new l.a(function(){st(!et()),location.reload()}),X=!0}},et=function(){return"true"===localStorage.ExperimentalMode||"true"===sessionStorage.ExperimentalMode},st=function(t){sessionStorage.ExperimentalMode=t},it=function(t,a){console.log("render",t,a),o.$emit("render",t,a)};a.default={init:Z}}}]);