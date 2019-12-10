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
