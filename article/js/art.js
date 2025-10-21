// (function () {
//     var light = "#fff";
//     var dark = "#000";
//     if (new Date().getHours() > 18 || new Date().getHours() < 6) {

//         document.documentElement.style.setProperty('--color-ff', dark);
//         document.documentElement.style.setProperty('--color-00', light);

//         console.log('夜间模式开启');
//     } else {

//         document.documentElement.style.setProperty('--color-ff', light);
//         document.documentElement.style.setProperty('--color-00', dark);
//         console.log('夜间模式关闭');
//     }
// })();

$(function () {
    var light = "#fff";
    var dark = "#000";
    var oadark = "#0A0A0A";
    var oalight = "#fafafa";
    var d5 = "rgba(0, 0, 0, .25)";
    var l5 = "rgba(255, 255, 255, .25)";

    if (new Date().getHours() > 18 || new Date().getHours() < 6) {
        document.documentElement.style.setProperty('--color-ff', dark);
        document.documentElement.style.setProperty('--color-00', light);
        document.documentElement.style.setProperty('--color-oa', oadark);
        document.documentElement.style.setProperty('--color-o5', d5);
        console.log('夜间模式开启');
    } else {
        document.documentElement.style.setProperty('--color-ff', light);
        document.documentElement.style.setProperty('--color-00', dark);
        document.documentElement.style.setProperty('--color-oa', oalight);
        document.documentElement.style.setProperty('--color-o5', l5);
        console.log('夜间模式关闭');
    }
});


//联系我展开与关闭
var open1 = document.getElementById("open-button");
var close1 = document.getElementById("close-button");


if (close1) {
    close1.onclick = function () {
        "use strict";
        var menu = document.getElementById("menu");
        var zzhao = document.getElementById("zzhao");
        if (menu) menu.setAttribute("class", "menu");
        if (zzhao) zzhao.setAttribute("class", "zzzhao");
    };
}

if (open1) {
    open1.onclick = function () {
        "use strict";
        var menu = document.getElementById("menu");
        var zzhao = document.getElementById("zzhao");
        if (menu) menu.setAttribute("class", "menu-open");
        if (zzhao) zzhao.setAttribute("class", "zzhao");
    };
}