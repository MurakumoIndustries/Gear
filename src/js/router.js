import $ from "jquery";
import _ from 'lodash';
import page from 'page';
import Ui from './ui.js';
import Data from './data.js'

var init = function () {
    import(
        /* webpackChunkName: "view" */
        './view.js').then(View => {
            page.base('/Gear/');

            var langPage = function (ctx) {
                console.log("route:langRoute", ctx);
                Ui.setLang(ctx.params.lang);
                page.redirect('/');
            };
            page('lang/:lang', langPage);
            page.exit('lang/:lang', function () {
                location.reload();
            });
            page('/lang/:lang', langPage);
            page.exit('/lang/:lang', function () {
                location.reload();
            });

            var forceInitPage = function (ctx) {
                console.log("route:forceInit", ctx);
                Data.init(true);
                page.redirect('/');
            };
            page('/init/force', forceInitPage);
            page.exit('/init/force', function () {
                location.reload();
            });

            var typePage = function (ctx) {
                console.log("route:typePage", ctx.params);
                View.init(ctx.params.type, ctx.params.id);
            };
            page(':type/:id?', typePage);
            page('/:type/:id?', typePage);

            page('/', function () {
                console.log("route:homeRoute");
                //View.init();
                page.redirect('/weapon');
            });

            page('*', function (ctx) {
                console.log("route:notMatchRoute", ctx);
                page.redirect('/');
            });
            page.start({ hashbang: true });
        });
};

export { init };
export default { init };
