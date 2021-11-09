
  $(document).ready(function(){
    if($(window).width() <= 1024){
      $('.nav-item-submenu').addClass('collapse');
    }else{
      $('.nav-item-submenu').removeClass('collapse');
    }

    // Nav submenu Responsive
    $(window).resize(function(){
      if($(window).width() <= 1024){
        $('.nav-item-submenu').addClass('collapse');
      }else{
        $('.nav-item-submenu').removeClass('collapse');
      }
    });

    // Nav submenu collapse

     $(window).resize(function(){
        if($(window).width() <= 1024){
          $('.item-has-submenu .nav-item-main-link').on('click', function(e){
              e.preventDefault();
              $(this).closest('.nav-item-main').find('.collapse').collapse('toggle');
            });
          $('.nav-toggle-btn').click(function(){
            $(this).closest('.nav-main').toggleClass('menu-visible');
          });
        }
      });
     
      if($(window).width() <= 1024){
        $('.item-has-submenu .nav-item-main-link').on('click', function(e){
            e.preventDefault();
            $(this).closest('.nav-item-main').find('.collapse').collapse('toggle');
          });
        $('.nav-toggle-btn').click(function(){
          $(this).closest('.nav-main').toggleClass('menu-visible');
        });
      }

  // Input Validation For Animate Label
  $('.animate-label input, .animate-label textarea').on('change', function(){
    if($(this).val().length > 0){
      $(this).addClass('filled');
    }else{
      $(this).removeClass('filled');
    }
  });

  $('.animate-label input, .animate-label textarea').on('focusout', function(){
    if($(this).val().length > 0){
      $(this).removeClass('empty');
    }else{
      $(this).addClass('empty');
    }
  });
});