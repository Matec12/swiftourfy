jQuery(document).ready(function($) {

//open/close primary navigation
$('.primary-nav-trigger').on('click', function(e) {
    e.stopPropagation();
    $('.menu-icon').toggle('is-clicked');
    $('.main-header').toggle('menu-is-open');
    $('.main-header').toggle('is-active');
});

//open search widget
    $('.btn-search-trigger > a').on('click', function(e) {
      e.stopPropagation();
      $('.nav-search-form').addClass('has_value');
      $('.main_header').addClass('show_search');
  });

  $('.nav-search-reset').on('click', function(e) {
      e.stopPropagation();
      if($('.main-header').hasClass('show_search')) {
          $('.main-header').removeClass('show_search');
      }
  });

  $('.form-control').on('input', function() {
    var $input_field = $(this).closest('.funky-form');
    if (this.value) {
        $input_field.addClass('not_empty');
    } else {
        $input_field.removeClass('not_empty');
    }
  });

  $('.nav-search-input').on('input', function(){
      var parent_container = $(this).closest('.nav-search-form');

      if(this.value) {
          parent_container.addClass('has_value');
      } else if (!($('.main-header').hasClass('show_search'))) {
          parent_container.removeClass('has_value');
      }
  });

  var subNav = $(".sticky-nav"),
  navScrolled = "fix__top",
  scroll_offset_top = 500; 

  $(window).scroll(function() {
  if($(this).scrollTop() > scroll_offset_top) {
      subNav.addClass(navScrolled);
  } else {
      subNav.removeClass(navScrolled);
  }
  });
});