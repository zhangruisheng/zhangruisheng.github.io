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



$(function () {
    var h1 = 400;
    var h2 = 480;
    var ss = $(document).scrollTop();
    $(window).scroll(function () {
        var s = $(document).scrollTop();

        if (s < h1) {
            $('.yapiskan').removeClass('yya');
        }
        if (s > h1) {
            $('.yapiskan').addClass('yya');
        }
        if (s > h2) {
            $('.yapiskan').addClass('gizle');
            if (s > ss) {
                $('.yapiskan').removeClass('sabit');
            } else {
                $('.yapiskan').addClass('sabit');
            }
            ss = s;
        }


    });

});
