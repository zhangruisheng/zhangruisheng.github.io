// iframe.js - 完全重写，使用安全的初始化方式
console.log('iframe.js 开始加载...');

// 立即执行函数表达式
(function() {
  // 只在页面完全加载后初始化
  if (window.addEventListener) {
    window.addEventListener('load', setupIframeComponents, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', setupIframeComponents);
  } else {
    // 作为最后的后备方案
    setTimeout(setupIframeComponents, 1000);
  }

  // 安全的初始化函数
  function setupIframeComponents() {
    try {
      console.log('尝试初始化iframe组件...');
      
      // 安全地获取所有需要的元素
      var elements = {
        open_iframe: document.getElementById('iframe_open'),
        close_iframe: document.getElementById('iframe_close'),
        iframe_window: document.getElementById('iframe_window'),
        iframe_content: document.getElementById('iframe_content')
      };
      
      // 检查必要元素是否存在
      var missingElements = [];
      for (var key in elements) {
        if (elements.hasOwnProperty(key) && !elements[key]) {
          missingElements.push(key);
        }
      }
      
      if (missingElements.length > 0) {
        console.log('警告: 未找到以下iframe相关元素:', missingElements.join(', '), 
                    '- 这在不需要iframe功能的页面上是正常的');
        return;
      }
      
      // 安全地添加事件监听器的辅助函数
      function addListener(element, event, callback) {
        if (element && element.addEventListener) {
          element.addEventListener(event, callback);
          console.log('已为', element.id, '添加', event, '事件监听器');
        } else if (element && element.attachEvent) {
          element.attachEvent('on' + event, callback);
          console.log('已为', element.id, '添加', event, '事件监听器(attachEvent)');
        } else if (element) {
          // 最后的后备方案
          var originalHandler = element['on' + event];
          element['on' + event] = function(e) {
            if (originalHandler) originalHandler.call(this, e);
            callback.call(this, e);
          };
          console.log('已为', element.id, '添加', event, '事件监听器(onproperty)');
        }
      }
      
      // 初始化打开按钮
      addListener(elements.open_iframe, 'click', function() {
        try {
          elements.iframe_window.style.display = 'block';
          setTimeout(function() {
            elements.iframe_window.style.opacity = '1';
            elements.iframe_window.style.transform = 'translateY(0)';
          }, 10);
        } catch (e) {
          console.error('打开iframe时出错:', e);
        }
      });
      
      // 初始化关闭按钮
      addListener(elements.close_iframe, 'click', function() {
        try {
          elements.iframe_window.style.opacity = '0';
          elements.iframe_window.style.transform = 'translateY(20px)';
          setTimeout(function() {
            elements.iframe_window.style.display = 'none';
          }, 300);
        } catch (e) {
          console.error('关闭iframe时出错:', e);
        }
      });
      
      // 安全地定义全局openIframe函数
      window.openIframe = function(src) {
        try {
          if (!src) {
            console.error('openIframe: 源URL未提供');
            return;
          }
          if (elements.iframe_content) {
            elements.iframe_content.src = src;
          }
          if (elements.open_iframe && elements.open_iframe.click) {
            elements.open_iframe.click();
          }
        } catch (e) {
          console.error('执行openIframe时出错:', e);
        }
      };
      
      console.log('iframe组件初始化完成');
      
    } catch (e) {
      console.error('iframe组件初始化失败:', e);
    }
  }
})();

console.log('iframe.js 加载完成');