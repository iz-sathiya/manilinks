/*!
 * Custom JS V0.0.1
 * www.manylinks.com
 */


  /* Ready Function */
$(function(){
  
  console.log('Hi, My name is console :)');

  /* Scroll Animation */ 
  $('body').animate({opacity:1},1000);

  $('*[data-animated]').addClass('animated');

  /* Animate */ 
  function animated_contents() {
    $(".animated:appeared").each(function (i) {
    var $this    = $(this),
    animated = $(this).data('animated'),
    delay = $(this).data('delay');
      setTimeout(function () {
        $this.addClass(animated);
        $this.addClass('delay'+delay);
      }, 5 * i);
    });
  }

  $(window).scroll(function() {
    animated_contents();
  });

  // Header scroll section 
    $(window).scroll(function() {

      if ($(this).scrollTop() > 200){  
        $('header').addClass("sticky");
      }

      else{
        $('header').removeClass("sticky");
      } 
    });

    // background
    $('[data-bg]').each(function(){
      var curBg = $(this).data('bg');
      $(this).css('background-image','url('+curBg+')');
    }); 


    $('.bgPart').css('min-height', $(window).height()+"px");

    $(".dropbtn").on("click",function(){
      var id = $(this).nextAll(".dropdown-content").attr("id");
      document.getElementById(id).classList.toggle("show");
    });

    window.onbeforeunload = function(){
      window.scrollTo(0,0);
    }


    // $('.tester > div').matchHeight();
       $('.row-plate .single-info').matchHeight();

    // sidebar menu
       var sideslider = $('[data-toggle=collapse-side]');
        var sel = sideslider.attr('data-target');
        var sel2 = sideslider.attr('data-target-2');
        sideslider.click(function(event){
            $(sel).toggleClass('in');
            $(sel2).toggleClass('out');
        });
    

}); // Ready Function


// Resize Function 

if(!Modernizr.touch) { 
  $(window).resize(function(){
    console.log('Hi, iam touch device :)');

    $('.bgPart').css('min-height', $(window).height()+"px");

  });
}


