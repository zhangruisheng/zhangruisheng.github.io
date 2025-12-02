// 安全地初始化jQuery功能，添加错误处理
(function() {
    // 检查jQuery是否已加载
    if (typeof jQuery !== 'undefined' && typeof $ !== 'undefined') {
        $(function () {
            "use strict";

            //显示博客文章特征图像
            try {
                showFirstBlogPostFeatureImge();
                showBlogPostFeatureImage();
            } catch (e) {
                console.error('博客图像功能初始化错误:', e);
            }

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
    } else {
        console.log('jQuery未加载，跳过jQuery相关功能初始化');
        // 如果需要，可以使用原生JavaScript替代jQuery功能
        function initFallbackBlogFeatures() {
            try {
                var entries = document.querySelectorAll('.home-item-holder .entry-holder');
                if (entries.length > 0) {
                    entries[0].classList.add('active-post');
                    
                    entries.forEach(entry => {
                        entry.addEventListener('mouseenter', function() {
                            entries.forEach(e => e.classList.remove('active-post'));
                            this.classList.add('active-post');
                        });
                    });
                }
            } catch (e) {
                console.error('原生JavaScript博客功能初始化错误:', e);
            }
        }
        
        // 在DOM加载完成后初始化
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initFallbackBlogFeatures);
        } else {
            initFallbackBlogFeatures();
        }
    }
})();

// 安全地初始化夜间模式功能，不依赖jQuery
(function() {
    try {
        var dark = "#000";
        var light = "#fff";
        var oadark = "#0A0A0A";
        var oalight = "#fafafa";
        var d5 = "rgba(0, 0, 0, .25)";
        var l5 = "rgba(255, 255, 255, .25)";
        var white10 = "rgba(255, 255, 255, 0.10)";
        var black10 = "rgba(0, 0, 0, 0.10)";

        // 安全地获取document.documentElement
        var root = document.documentElement;
        if (!root || typeof root.style.setProperty !== 'function') {
            console.log('无法设置CSS变量，跳过夜间模式初始化');
            return;
        }

        try {
            if (new Date().getHours() > 18 || new Date().getHours() < 6) {
                root.style.setProperty('--color-ff', dark);
                root.style.setProperty('--color-00', light);
                root.style.setProperty('--color-oa', oadark);
                root.style.setProperty('--color-o5', d5);
                root.style.setProperty('--grey-10', white10);
                
                console.log('夜间模式开启');
            } else {
               
                root.style.setProperty('--color-00', dark);
                root.style.setProperty('--color-ff', light);
                root.style.setProperty('--color-oa', oalight);
                root.style.setProperty('--color-o5', l5);
                root.style.setProperty('--grey-10', black10);
                console.log('夜间模式关闭');
            }
        } catch (e) {
            console.error('设置CSS变量时出错:', e);
        }
    } catch (e) {
        console.error('夜间模式功能初始化错误:', e);
    }
})();



// $('.monknew-ls').masonry({
//     // options...
//     itemSelector: '.old',
//     columnWidth: '.old',
//     percentPosition: true

//   });