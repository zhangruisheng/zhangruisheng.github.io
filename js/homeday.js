$(function () {
    "use strict";

    //显示博客文章特征图像
    showFirstBlogPostFeatureImge();
    showBlogPostFeatureImage();

    function showFirstBlogPostFeatureImge() {
        $(".home-item-holder .entry-holder").first().addClass('active-post');
    }

    function showBlogPostFeatureImage() {
        $(".home-item-holder .entry-holder").on('mouseenter', function () {
            $(".home-item-holder .entry-holder").removeClass('active-post');
            $(this).addClass('active-post');
        });
    }
});

$(function () {
    var light = "#fff";
    var dark = "#000";
    var oadark = "#0A0A0A";
    var oalight = "#fafafa";
    var d5 = "rgba(0, 0, 0, .25)";
    var l5 = "rgba(255, 255, 255, .25)";

    if (new Date().getHours() > 18 || new Date().getHours() < 6) {
        document.documentElement.style.setProperty('--color-ff', light);
        document.documentElement.style.setProperty('--color-00', dark);
        document.documentElement.style.setProperty('--color-oa', oalight);
        document.documentElement.style.setProperty('--color-o5', l5);
        console.log('夜间模式关闭');
    } else {
        document.documentElement.style.setProperty('--color-ff', light);
        document.documentElement.style.setProperty('--color-00', dark);
        document.documentElement.style.setProperty('--color-oa', oalight);
        document.documentElement.style.setProperty('--color-o5', l5);
        console.log('夜间模式关闭');
    }
});



// $('.monknew-ls').masonry({
//     // options...
//     itemSelector: '.old',
//     columnWidth: '.old',
//     percentPosition: true

//   });