(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{38:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){__p+='<div class="icon-gear-container">\r\n    ',isLink&&(__p+='\r\n        <a href="#!/'+(null==(__t=type)?"":__t)+"/"+(null==(__t=data.id)?"":__t)+'">\r\n            '),__p+='\r\n                <img class="icon icon-gear" src="'+(null==(__t=data.icon?"../img/item/"+data.icon+".png":" ")?"":__t)+'" title="'+(null==(__t=data.name)?"":__t)+'" alt="'+(null==(__t=data.name)?"":__t)+'">\r\n                ',isLink&&(__p+="\r\n        </a>\r\n        "),__p+="\r\n            <div class='icon-gear-memoca-container'>\r\n                ";for(var i=99;i<data.memocaSlotCount;i++)__p+="\r\n                    <div class='memoca-slot'></div>\r\n                    ";__p+="\r\n            </div>\r\n</div>"}return __p}},39:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){var data=0==evoType?from:to,evoTypeText=0==evoType?"From":"To";__p+='\r\n    <div class="card mb-2">\r\n        <div class="card-header py-2 px-3" data-toggle="collapse" data-target="#collapseEvo'+(null==(__t=evoTypeText)?"":__t)+(null==(__t=data.id)?"":__t)+'">\r\n            <span>'+(null==(__t=data.name)?"":__t)+'</span>\r\n            <span class="float-right text-black-50">Phase.'+(null==(__t=data.phase)?"":__t)+'</span>\r\n        </div>\r\n        <div id="collapseEvo'+(null==(__t=evoTypeText)?"":__t)+(null==(__t=data.id)?"":__t)+'" class="collapse" data-parent="#collapseEvo'+(null==(__t=evoTypeText)?"":__t)+'">\r\n            <div class="card-body p-2">\r\n                <div class="media">\r\n                    <div class="mr-2 text-center">\r\n                        <div class="evo-type-text">\r\n                            '+(null==(__t=data.evoType)?"":__t)+"\r\n                        </div>\r\n                        "+(null==(__t=getGearImg(type,data,!0))?"":__t)+'\r\n                            <div class="evo-type-text">\r\n                                '+(null==(__t=data.name)?"":__t)+'\r\n                            </div>\r\n                    </div>\r\n                    <div class="media-body">\r\n                        '+(null==(__t=Ui.renderDesc(to.evoDesc))?"":__t)+"\r\n                    </div>\r\n                </div>\r\n                ";for(var i=0;i<from.evoPattern.length;i++){var evoPatternFrom=from.evoPattern[i],evoPatternTo=to.evoPattern[i],patternName=evoPatternTo.key,patternValue=Math.round(evoPatternTo.value/evoPatternFrom.value*100);__p+='\r\n                    <div class="form-row">\r\n                        <div class="col-6 col-lg-3">\r\n                            '+(null==(__t=patternName)?"":__t)+'\r\n                        </div>\r\n                        <div class="col">\r\n                            <div class="progress">\r\n                                <div class="progress-bar" role="progressbar" style=\'width: '+(null==(__t=Math.min(patternValue,100)/2)?"":__t)+"%;'>\r\n                                    "+(null==(__t=patternValue)?"":__t)+'%</div>\r\n                                <div class="progress-bar bg-warning" role="progressbar" style=\'width: '+(null==(__t=Math.max(patternValue-100,0)/2)?"":__t)+"%;'></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    "}__p+='\r\n                        <div class="form-row">\r\n                            <div class="col text-center">\r\n                                ',_.each(data.evoMaterials,function(a,t){var n=a[0];__p+='\r\n                                    <div class="item-container" data-toggle="tooltip" data-html="true" title="'+__e("<b>"+n.name+"</b><br />"+Ui.renderDesc(n.desc))+'">\r\n                                        <img class="icon icon-item" src="'+(null==(__t="../img/item/"+(n.icon||"itm2_04_000_01")+".png")?"":__t)+'" />\r\n                                        <span class="item-count">\r\n                                        '+(null==(__t=a[1])?"":__t)+"\r\n                                            <span>\r\n                                </div>\r\n                                "}),__p+="\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n    </div>\r\n</div>"}return __p}},40:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){switch(__p+='<div style="position:absolute;right:3rem;top:-4rem;">\r\n    <span class="text-black-50">\r\n        '+(null==(__t=company.name)?"":__t)+'</span>\r\n    <img class="icon icon-company" src="'+(null==(__t=company.icon?"../img/com/"+company.icon+".png":" ")?"":__t)+'" title="'+(null==(__t=company.name)?"":__t)+'" alt="'+(null==(__t=company.name)?"":__t)+'">\r\n</div>\r\n<div class="media mb-2">\r\n    <div class="mr-3">\r\n        <div class="evo-type-text">\r\n            '+(null==(__t=data.evoType)?"":__t)+"\r\n        </div>\r\n        "+(null==(__t=getGearImg(type,data))?"":__t)+'\r\n    </div>\r\n    <div class="media-body">\r\n        <div class="row mt-3">\r\n            <div class="col-4">\r\n                <div class="float-left">\r\n                    COST\r\n                </div>\r\n                <div class="text-right">\r\n                    '+(null==(__t=data.cost)?"":__t)+'\r\n                </div>\r\n            </div>\r\n            <div class="col-auto">\r\n                '+(null==(__t=Ui.getText("geartype"))?"":__t)+'\r\n            </div>\r\n            <div class="col text-right">\r\n                '+(null==(__t=Ui.getText(0==data.catalog?"weaponL":"weaponS",data.type))?"":__t)+'\r\n            </div>\r\n            <div class="col-auto">\r\n                '+(null==(__t=Ui.getText("attribute",data.attribute1st))?"":__t)+'\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-auto">\r\n                ATK\r\n            </div>\r\n            <div class="col">\r\n                <div id="detailAtk" class="text-right">\r\n                    ',data.category){case 1:__p+="\r\n                    "+(null==(__t=data.shortAtkMax)?"":__t)+"\r\n                    ";break;case 2:__p+="\r\n                    "+(null==(__t=data.longAtkMax)?"":__t)+"\r\n                    "}switch(__p+='\r\n                </div>\r\n            </div>\r\n            <div class="col-auto">\r\n                <div id="detailAttr" class="text-right">\r\n                    ',data.category){case 1:__p+="\r\n                    "+(null==(__t=Ui.renderAttrText(data.shortAttrMax))?"":__t)+"\r\n                    ";break;case 2:__p+="\r\n                    "+(null==(__t=Ui.renderAttrText(data.longAttrMax))?"":__t)+"\r\n                    "}__p+='\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id="gearExtraInfo">\r\n    <div class="card mb-2">\r\n        <div class="card-header" data-toggle="collapse" data-target="#collapseDesc">\r\n            Description\r\n        </div>\r\n        <div id="collapseDesc" class="collapse show" data-parent="#gearExtraInfo">\r\n            <div class="card-body">\r\n                '+(null==(__t=Ui.renderDesc(data.desc))?"":__t)+"\r\n            </div>\r\n        </div>\r\n    </div>\r\n    ",data.passiveSkills.length&&(__p+='\r\n    <div class="card mb-2">\r\n        <div class="card-header" data-toggle="collapse" data-target="#collapsePassiveSkill">\r\n            Passive Skill\r\n        </div>\r\n        <div id="collapsePassiveSkill" class="collapse" data-parent="#gearExtraInfo">\r\n            <div class="card-body">\r\n                ',_.each(data.passiveSkills,function(a,t){var n=Data.get("skillpassive",a.id);__p+='\r\n                <div class="row mb-1">\r\n                    <div class="col-auto">\r\n                        <span class=\'font-weight-light\'>Lv.\r\n                            '+(null==(__t=a.openLevel)?"":__t)+'\r\n                        </span>\r\n                    </div>\r\n                    <div class="col">\r\n                        <h5>\r\n                            '+(null==(__t=n.name)?"":__t)+"\r\n                        </h5>\r\n                        <div>\r\n                            "+(null==(__t=Ui.renderDesc(n.desc))?"":__t)+"\r\n                        </div>\r\n                        ",isExperimentalMode&&_.each(n.detailList,function(a){__p+='\r\n                        <div>\r\n                            <small class="text-black-50">\r\n                                '+(null==(__t=a)?"":__t)+"\r\n                            </small>\r\n                        </div>\r\n                        "}),__p+="\r\n                    </div>\r\n                </div>\r\n                "}),__p+="\r\n            </div>\r\n        </div>\r\n    </div>\r\n    "),__p+='\r\n    <div class="card mb-2">\r\n        <div class="card-header" data-toggle="collapse" data-target="#collapseEvo">\r\n            <span>Evolve</span>\r\n            <span class="float-right text-black-50">Phase.\r\n                '+(null==(__t=data.phase)?"":__t)+'</span>\r\n        </div>\r\n        <div id="collapseEvo" class="collapse" data-parent="#gearExtraInfo">\r\n            <div class="card-body p-0">\r\n                <div class="form-row m-0">\r\n                    <div class="col px-2 pt-2 pb-0 border-right">\r\n                        <div id="collapseEvoFrom">\r\n                            ',_.each(data.evoFrom,function(a,t){__p+="\r\n                            "+(null==(__t=getEvoCard(type,0,a,data))?"":__t)+"\r\n                            "}),__p+='\r\n                        </div>\r\n                    </div>\r\n                    \x3c!-- <div class="d-none col-auto text-center">\r\n                        <div class="evo-type-text">\r\n                            '+(null==(__t=data.evoType)?"":__t)+"\r\n                        </div>\r\n                        "+(null==(__t=getGearImg(type,data))?"":__t)+'\r\n                            <div class="evo-type-text">\r\n                                '+(null==(__t=data.name)?"":__t)+'\r\n                            </div>\r\n                    </div> --\x3e\r\n                    <div class="col px-2 pt-2 pb-0">\r\n                        <div id="collapseEvoTo">\r\n                            ',_.each(data.evoTo,function(a,t){__p+="\r\n                            "+(null==(__t=getEvoCard(type,1,data,a))?"":__t)+"\r\n                            "}),__p+="\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"}return __p}},41:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){if(__p+='<div style="position:absolute;right:3rem;top:-4rem;">\r\n    <span class="text-black-50">'+(null==(__t=company.name)?"":__t)+'</span>\r\n    <img class="icon icon-company" src="'+(null==(__t=company.icon?"../img/com/"+company.icon+".png":" ")?"":__t)+'" title="'+(null==(__t=company.name)?"":__t)+'" alt="'+(null==(__t=company.name)?"":__t)+'">\r\n</div>\r\n<div class="media mb-2">\r\n    <div class="mr-3">\r\n        <div class="evo-type-text">\r\n            '+(null==(__t=data.evoType)?"":__t)+"\r\n        </div>\r\n        "+(null==(__t=getGearImg(type,data))?"":__t)+'\r\n    </div>\r\n    <div class="media-body">\r\n        <div class="row mt-3">\r\n            <div class="col-4">\r\n                <div class="float-left">\r\n                    COST\r\n                </div>\r\n                <div class="text-right">\r\n                    '+(null==(__t=data.cost)?"":__t)+'\r\n                </div>\r\n            </div>\r\n            <div class="col-8">\r\n                ',2==data.category){switch(__p+='\r\n                    <div class="float-left">\r\n                        spd type\r\n                    </div>\r\n                    <div class="text-right">\r\n                        ',data.spdMax){case 200:__p+=" 重装\r\n                            ";break;case 240:__p+=" バランス\r\n                                ";break;case 280:__p+=" 高機動\r\n                                    "}__p+="\r\n                    </div>\r\n                    "}__p+='\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-1">\r\n                HP\r\n            </div>\r\n            <div class="col-3">\r\n                <div id="detailHP" class="text-right">\r\n                    '+(null==(__t=data.hpMax)?"":__t)+'\r\n                </div>\r\n            </div>\r\n            <div class="col-1">\r\n                DEF\r\n            </div>\r\n            <div class="col-3">\r\n                <div id="detailDEF" class="text-right">\r\n                    '+(null==(__t=data.defMax)?"":__t)+'\r\n                </div>\r\n            </div>\r\n            <div class="col-1">\r\n                SPD\r\n            </div>\r\n            <div class="col-3">\r\n                <div id="detailDEF" class="text-right">\r\n                    '+(null==(__t=data.spdMax)?"":__t)+'\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id="gearExtraInfo">\r\n    <div class="card mb-2">\r\n        <div class="card-header" data-toggle="collapse" data-target="#collapseDesc">\r\n            Description\r\n        </div>\r\n        <div id="collapseDesc" class="collapse show" data-parent="#gearExtraInfo">\r\n            <div class="card-body">\r\n                '+(null==(__t=Ui.renderDesc(data.desc))?"":__t)+'\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="card mb-2">\r\n        <div class="card-header" data-toggle="collapse" data-target="#collapseActiveSkill">\r\n            Gear Skill\r\n        </div>\r\n        <div id="collapseActiveSkill" class="collapse" data-parent="#gearExtraInfo">\r\n            <div class="card-body">\r\n                ';var aSkill=Data.get("skillactive",data.activeSkill);__p+='\r\n                    <div class="media">\r\n                        <img class="mr-3" src="'+(null==(__t=aSkill.icon&&"../img/skill/"+aSkill.icon+".png")?"":__t)+'" />\r\n                        <div class="media-body">\r\n                            <div class=\'row\'>\r\n                                <div class="col">\r\n                                    <fieldset>\r\n                                        <legend>\r\n                                            '+(null==(__t=aSkill.name)?"":__t)+'\r\n                                        </legend>\r\n                                        <div class="row">\r\n                                            <div class="col">\r\n                                                <span>Freeze:</span>\r\n                                                '+(null==(__t=aSkill.freezeTime)?"":__t)+'s\r\n                                            </div>\r\n                                            <div class="col">\r\n                                                <span>Count:</span>\r\n                                                '+(null==(__t=aSkill.activateLimit)?"":__t)+'\r\n                                            </div>\r\n                                            <div class="col">\r\n                                                <span>ATK:</span>\r\n                                                '+(null==(__t=data.longAtkMax)?"":__t)+"\r\n                                                    "+(null==(__t=Ui.renderAttrText(data.longAttrMax))?"":__t)+'\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class="row">\r\n                                            <div class="col">\r\n                                                <span>Invincible:</span>\r\n                                                '+(null==(__t=aSkill.invincibleTime)?"":__t)+'s\r\n                                            </div>\r\n                                            <div class="col">\r\n                                                <span>Duration:</span>\r\n                                                '+(null==(__t=aSkill.effectTime)?"":__t)+'s\r\n                                            </div>\r\n                                            <div class="col">\r\n                                                <span>Cooldown:</span>\r\n                                                '+(null==(__t=aSkill.coolTime)?"":__t)+"s\r\n                                            </div>\r\n                                        </div>\r\n                                        <div>\r\n                                            "+(null==(__t=Ui.renderDesc(aSkill.desc))?"":__t)+'\r\n                                        </div>\r\n                                    </fieldset>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="card mb-2">\r\n        <div class="card-header" data-toggle="collapse" data-target="#collapsePassiveSkill">\r\n            Passive Skill\r\n        </div>\r\n        <div id="collapsePassiveSkill" class="collapse" data-parent="#gearExtraInfo">\r\n            <div class="card-body">\r\n                ',_.each(data.passiveSkills,function(a,t){var n=Data.get("skillpassive",a.id);__p+='\r\n                    <div class="row mb-1">\r\n                        <div class="col-auto">\r\n                            <span class=\'font-weight-light\'>Lv.\r\n                                '+(null==(__t=a.openLevel)?"":__t)+'\r\n                            </span>\r\n                        </div>\r\n                        <div class="col">\r\n                            <h5>\r\n                                '+(null==(__t=n.name)?"":__t)+"\r\n                            </h5>\r\n                            <div>\r\n                                "+(null==(__t=Ui.renderDesc(n.desc))?"":__t)+"\r\n                            </div>\r\n                            ",isExperimentalMode&&_.each(n.detailList,function(a){__p+='\r\n                            <div>\r\n                                <small class="text-black-50">\r\n                                    '+(null==(__t=a)?"":__t)+"\r\n                                </small>\r\n                            </div>\r\n                            "}),__p+="\r\n                        </div>\r\n                    </div>\r\n                    "}),__p+='\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="card mb-2">\r\n        <div class="card-header" data-toggle="collapse" data-target="#collapseEvo">\r\n            <span>Evolve</span>\r\n            <span class="float-right text-black-50">Phase.'+(null==(__t=data.phase)?"":__t)+'</span>\r\n        </div>\r\n        <div id="collapseEvo" class="collapse" data-parent="#gearExtraInfo">\r\n            <div class="card-body p-0">\r\n                <div class="form-row m-0">\r\n                    <div class="col px-2 pt-2 pb-0 border-right">\r\n                        <div id="collapseEvoFrom">\r\n                            ',_.each(data.evoFrom,function(a,t){__p+="\r\n                                "+(null==(__t=getEvoCard(type,0,a,data))?"":__t)+"\r\n                                    "}),__p+='\r\n                        </div>\r\n                    </div>\r\n                    \x3c!-- <div class="d-none col-auto text-center">\r\n                        <div class="evo-type-text">\r\n                            '+(null==(__t=data.evoType)?"":__t)+"\r\n                        </div>\r\n                        "+(null==(__t=getGearImg(type,data))?"":__t)+'\r\n                            <div class="evo-type-text">\r\n                                '+(null==(__t=data.name)?"":__t)+'\r\n                            </div>\r\n                    </div> --\x3e\r\n                    <div class="col px-2 pt-2 pb-0">\r\n                        <div id="collapseEvoTo">\r\n                            ',_.each(data.evoTo,function(a,t){__p+="\r\n                                "+(null==(__t=getEvoCard(type,1,data,a))?"":__t)+"\r\n                                    "}),__p+="\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"}return __p}},42:function(a,t,n){"use strict";n.r(t),n.d(t,"init",function(){return y});var r,e,l=n(2),i=n.n(l),d=n(6),s=n.n(d),o=n(0),c=n.n(o),_=n(7),v=n(3),p=n(4),u=n.n(p),m=n(33),g=n.n(m),f=(n(34),n(35),n(37)),x=n.n(f),y=function(a,t){a=a.toLowerCase(),u.a.start(),h(),u.a.set(.3),b(),u.a.set(.6),E(a),u.a.set(.9),S(a,t),u.a.done()},h=function(){},b=function(){if(!r){i()("#version").text(v.default.getVersion()),i()("input[type=radio][name=GearType]").change(function(){c.a.redirect("/"+this.value)});var a,t=v.default.getAll("actress");s.a.each(t,function(a,t){var n=a.name+"|"+a.age;i()("#searchActress").append('<option value="'+a.id+'" data-tokens="'+n+'">'+n)}),i()("#searchActress").selectpicker("refresh"),i()("#searchContainer input").keyup(function(){clearTimeout(a),a=setTimeout(function(){w()},200)}),i()("#searchContainer select").change(function(){clearTimeout(a),a=setTimeout(function(){w()},200)}),new x.a(function(){k(!T()),location.reload()}),r=!0}},T=function(){return"true"===localStorage.ExperimentalMode||"true"===sessionStorage.ExperimentalMode},k=function(a){sessionStorage.ExperimentalMode=a},w=function(){i.a.fn.DataTable.isDataTable("#dataTable")&&i()("#dataTable").DataTable().ajax.reload()},D=function(a,t,r){return n(38)({type:a,data:t,isLink:r})},E=function(a){if(a!=e){e=a,i()("input[type=radio][name=GearType]").parent().removeClass("active"),i()("input[type=radio][name=GearType][value="+a+"]").prop("checked",!0).parent().addClass("active"),i.a.extend(g.a.ext.classes,{sInfo:"",sLengthSelect:"custom-select form-control"}),i.a.fn.DataTable.isDataTable("#dataTable")&&i()("#dataTable").DataTable().destroy();var t={ajax:function(t,n,r){n({data:function(a){var t=v.default.getAll(a),n={name:i()("#searchName").val(),rare:i()("#searchRare").val(),actress:i()("#searchActress").val()};t=s.a.filter(t,function(a,t){return!(n.name&&a.name.toLowerCase().indexOf(n.name.toLowerCase())<0||n.rare&&a.rare!=n.rare||n.actress.length&&n.actress.indexOf(String(a.actressId))<0)});var r=[];return i.a.each(t,function(a,t){var n=i.a.extend({},t);n.actress=v.default.get("actress",t.actressId),r.push(n)}),r}(a)})},language:_.a.getText("DataTables_i18n"),dom:'<"row mx-1"<"col text-nowrap"l><"col text-center py-2"i><"col-auto"p>>rt<"row mx-1"<"col text-nowrap"l><"col text-center py-2"i><"col-auto"p>>',processing:!0,order:[[2,"desc"],[3,"desc"],[6,"desc"],[4,"asc"],[5,"asc"]]};switch(a){case"weapon":i.a.extend(t,{columns:[{data:"icon",orderable:!1,render:function(t,n,r,e){return D(a,r,!0)}},{title:"Name",data:"name",render:function(t,n,r,e){return'<a href="#!/'+a+"/"+r.id+'">'+t}},{title:"Cost",data:"cost"},{title:"Rare",data:"rare",render:function(a,t,n,r){return s.a.repeat("★",a)}},{title:"Category",data:"category",render:function(a,t,n,r){return a}},{title:"Type",data:"type"},{title:"MaxLv",data:"maxLv"},{title:"Atk",data:null,render:function(a,t,n,r){switch(n.category){case 1:return n.shortAtkMax;case 2:return n.longAtkMax;default:return 0}}},{title:"AttrAtk",data:null,render:function(a,t,n,r){switch(n.category){case 1:return n.shortAttrMax[n.attribute2nd-4]||0;case 2:return n.longAttrMax[n.attribute2nd-4]||0;default:return 0}}},{title:"Actress",data:null,render:function(a,t,n,r){return n.actress?n.actress.name:null},className:"text-nowrap"},{title:"Desc",width:"20rem",data:function(a,t,n,r){return a.shortDesc||""},orderable:!1,render:function(a,t,n,r){return _.a.renderDesc(a)}}]});break;case"equipment":i.a.extend(t,{columns:[{data:"icon",orderable:!1,render:function(t,n,r,e){return D(a,r,!0)}},{title:"Name",data:"name",render:function(t,n,r,e){return'<a href="#!/'+a+"/"+r.id+'">'+t}},{title:"Cost",data:"cost"},{title:"Rare",data:"rare",render:function(a,t,n,r){return s.a.repeat("★",a)}},{title:"Category",data:"category",render:function(a,t,n,r){return a}},{title:"Type",data:"type"},{title:"MaxLv",data:"maxLv"},{title:"HP",data:"hpMax"},{title:"DEF",data:"defMax"},{title:"SPD",data:"spdMax"},{title:"Desc",width:"20rem",data:function(a,t,n,r){return a.shortDesc||""},orderable:!1,render:function(a,t,n,r){return _.a.renderDesc(a)}}]})}i()("#dataTable").DataTable(t)}},A=function(a,t,r,e){return n(39)({type:a,evoType:t,from:r,to:e,Ui:_.a,getGearImg:D})},S=function(a,t){if(console.log("render",a,t),a&&t){var r=v.default.get(a,t),e=r.name;r.evoFrom=s.a.map(s.a.filter(v.default.getAll("recipe"),function(a){return a.remodelId==r.id}),function(t){var n=s.a.extend({evoMaterials:s.a.orderBy(s.a.map(t.materials,function(a,t){return[v.default.get("material",t),a]}),function(a){return a[0].sortPriority})},v.default.get(a,t.catalogId));return t.evoDesc&&(n.evoDesc=t.evoDesc),n}),r.evoTo=s.a.map(s.a.filter(v.default.getAll("recipe"),function(a){return a.catalogId==r.id}),function(t){var n=s.a.extend({evoMaterials:s.a.orderBy(s.a.map(t.materials,function(a,t){return[v.default.get("material",t),a]}),function(a){return a[0].sortPriority})},v.default.get(a,t.remodelId));return t.evoDesc&&(n.evoDesc=t.evoDesc),n});var l=v.default.get("company",r.company);switch(a){case"weapon":var d=n(40)({type:a,data:r,company:l,Ui:_.a,Data:v.default,getGearImg:D,getEvoCard:A,isExperimentalMode:T()});i()("#modal-body").html(d);break;case"equipment":d=n(41)({type:a,data:r,company:l,Ui:_.a,Data:v.default,getGearImg:D,getEvoCard:A,isExperimentalMode:T()});i()("#modal-body").html(d)}i()('#modal [data-toggle="tooltip"]').tooltip(),i()("#modal-title").text(e),i()("#modal").modal("show")}};t.default={init:y}}}]);