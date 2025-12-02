// work in progress - needs some refactoring and will drop JQuery i promise :)
var instance = $(".dazzle");
$.each( instance, function(key, value) {
    
  var arrows = $(instance[key]).find(".arrow"),
      prevArrow = arrows.filter('.arrow-prev'),
      nextArrow = arrows.filter('.arrow-next'),
      box = $(instance[key]).find(".dazzle-imgs"), 
      x = 0,
      mx = 0;
  
  if (!box.length || !box[0]) {
    return; // skip this instance if required DOM is missing
  }

  var maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);

  if (arrows && arrows.length) {
    $(arrows).on('click', function() {
        
      if ($(this).hasClass("arrow-next")) {
        x = ((box.width() / 2)) + box.scrollLeft() - 10;
        box.animate({
          scrollLeft: x,
        })
      } else {
        x = ((box.width() / 2)) - box.scrollLeft() -10;
        box.animate({
          scrollLeft: -x,
        })
      }
        
    });
  }
    
  $(box).on({
    mousemove: function(e) {
      var mx2 = e.pageX - this.offsetLeft;
      if(mx) this.scrollLeft = this.sx + mx - mx2;
    },
    mousedown: function(e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
    },
    scroll: function() {
      toggleArrows();
    }
  });

  $(document).on("mouseup", function(){
    mx = 0;
  });
  
  function toggleArrows() {
    if(box.scrollLeft() > maxScrollWidth - 10) {
        // disable next button when right end has reached 
        nextArrow.addClass('disabled');
      } else if(box.scrollLeft() < 10) {
        // disable prev button when left end has reached 
        prevArrow.addClass('disabled')
      } else{
        // both are enabled
        nextArrow.removeClass('disabled');
        prevArrow.removeClass('disabled');
      }
  }
  
});

//菜单项点击切换
$(document).ready(function() {
    $('#open-button').click(function() {
        $('nav').toggleClass('menu-open');
    });
    $('#close-button').click(function() {
        $('nav').removeClass('menu-open');
    });
    $('.zzhao').click(function() {
        $('nav').removeClass('menu-open');
    });
    
    // 移动端子菜单切换
    $('.menu li').has('.submenu').click(function(e) {
        // 阻止事件冒泡，避免触发菜单项的链接跳转
        if ($(e.target).closest('a').length === 0 || $(e.target).closest('a').parent().hasClass('submenu')) {
            e.preventDefault();
            $(this).toggleClass('active');
        }
    });
});