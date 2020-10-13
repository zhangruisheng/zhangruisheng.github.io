(function ($) {
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
})(jQuery);

(function () {
    var light = "#fff";
    var dark = "#000";
    var oadark = "#1A161C"
    var oalight = "#fafafa"
    if (new Date().getHours() > 18 || new Date().getHours() < 17) {

        document.documentElement.style.setProperty('--color-ff', dark);
        document.documentElement.style.setProperty('--color-00', light);
        document.documentElement.style.setProperty('--color-oa', oadark);

        console.log('夜间模式开启');
    } else {

        document.documentElement.style.setProperty('--color-ff', light);
        document.documentElement.style.setProperty('--color-00', dark);
        document.documentElement.style.setProperty('--color-oa', oalight);
        console.log('夜间模式关闭');
    }
})();
