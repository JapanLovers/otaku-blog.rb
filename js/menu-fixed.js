$(function(){
        // Check the initial position of the Sticky Header
        var stickyHeaderTop = $('#wrapper-menu').offset().top;


        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('#wrapper-menu').css({position: 'fixed', top:'0px'});
                } else {
                        $('#wrapper-menu').css({position: 'static', top:'0px'});
                }
        });
  });
