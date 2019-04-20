<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="pr-2" href="../">
            <i class="icon icon-murakumo"></i>
        </a>
        <a class="navbar-brand" title="Murakumo Industries Gear List" href="#">
            <span class="d-none d-xl-inline-block">Murakumo Industries</span>
            <span class="d-none d-lg-inline-block d-xl-none">MI</span>
            <span class="d-none d-sm-inline-block d-md-inline-block d-lg-none">Murakumo Industries</span>
            <span class="d-sm-none">MI</span>
            <span>Gear</span>
            <span class="d-none d-sm-inline-block">List</span>
            <sup>α</sup>
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <form class="form-inline">
                    <div class="btn-group">
                        <a
                            :class="['btn','btn-light',{'active':gearType=='weapon'}]"
                            href="#!/weapon"
                            @click="gearType='weapon'"
                        >{{Ui.getText("weapon")}}</a>
                        <a
                            :class="['btn','btn-light',{'active':gearType=='equipment'}]"
                            href="#!/equipment"
                            @click="gearType='equipment'"
                        >{{Ui.getText("equipment")}}</a>
                    </div>
                </form>
            </ul>

            <ul class="navbar-nav my-0">
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle py-0"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i class="icon icon-version"></i>
                        <div class="d-inline-block" style="vertical-align: middle;">
                            <div id="server">{{currentServer.name}}</div>
                            <div
                                class="m-0"
                                style="font-size: 0.75rem;line-height:0.75rem;"
                                id="version"
                            >{{currentServer.version}}</div>
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <h6 class="dropdown-header">{{Ui.getText("server")}}</h6>
                        <a
                            v-for="o in allServers"
                            :key="o.id"
                            :class="['dropdown-item',o.id == currentServer.id ? 'active' : '']"
                            :href="'#!/server/' + o.id"
                        >
                            {{o.name}}
                            <p
                                class="m-0"
                                style="font-size:0.75rem;line-height:0.75rem;"
                            >{{o.version}}</p>
                        </a>
                        <div class="dropdown-divider" id="serverDivider"></div>
                        <h6 class="dropdown-header">{{Ui.getText("externallink")}}</h6>
                        <a
                            class="dropdown-item"
                            href="https://colopl.co.jp/alicegearaegis/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="mr-4">{{Ui.getText("officalsite")}}</span>
                            <i
                                class="material-icons text-black-50"
                                style="position:absolute;right:1rem;"
                            >open_in_new</i>
                        </a>
                        <a
                            class="dropdown-item"
                            href="https://alice.colopl.jp/news/show"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="mr-4">{{Ui.getText("officalannouncement")}}</span>
                            <i
                                class="material-icons text-black-50"
                                style="position:absolute;right:1rem;"
                            >open_in_new</i>
                        </a>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i class="material-icons">language</i>
                        <span id="currentLang">{{langText}}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <a
                            v-for="lang in Ui.supportedLang"
                            v-bind:key="lang.key"
                            class="dropdown-item"
                            v-bind:href="'#!/lang/'+lang.key"
                            @click="langText=lang.text"
                        >{{lang.text}}</a>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { Data } from "../js/data.js";
import { Event } from "../js/event.js";
import { Ui } from "../js/ui.js";
import $ from "jquery";

export default {
    data: function() {
        var langText = Ui.getLangText();
        return {
            langText: langText,
            gearType: ""
        };
    },
    created: function() {
        var $vm = this;
        Event.$on("render", function(type, id) {
            if (!type) {
                return;
            }
            $vm.gearType = type;
        });
    },
    computed: {
        currentServer: function() {
            return Data.getCurrentServer();
        },
        allServers: function() {
            return Data.getAllServers();
        }
    }
};
</script>
<style scoped>
.icon {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: inline-block;
    vertical-align: middle;
}

.icon.icon-version {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0.5;
    background-image: url(../img/version.png);
}

.icon.icon-murakumo {
    width: 2.5rem;
    height: 2.5rem;
    background-image: url(../img/murakumo.png);
}
</style>
