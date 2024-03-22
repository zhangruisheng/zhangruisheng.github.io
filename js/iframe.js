//联系我展开与关闭
var open1 = document.getElementById("open-button");
var close1 = document.getElementById("close-button");


close1.onclick = function () {
    "use strict";
    document.getElementById("menu").setAttribute("class", "menu");
    document.getElementById("zzhao").setAttribute("class", "zzzhao");
    document.getElementById("logo").setAttribute("class", "logo");

};

open1.onclick = function () {
    "use strict";
    document.getElementById("menu").setAttribute("class", "menu-open");
    document.getElementById("zzhao").setAttribute("class", "zzhao");
    document.getElementById("logo").setAttribute("class", "logom");


};

(function () {
    var light = "#fff";
    var dark = "#000";
    if (new Date().getHours() > 18 || new Date().getHours() < 6) {

        document.documentElement.style.setProperty('--color-ff', dark);
        document.documentElement.style.setProperty('--color-00', light);

        console.log('夜间模式开启');
    } else {

        document.documentElement.style.setProperty('--color-ff', light);
        document.documentElement.style.setProperty('--color-00', dark);
        console.log('夜间模式关闭');
    }
})();
