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
