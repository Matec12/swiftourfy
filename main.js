jQuery(document).ready(function($) {
//open search widget
    $('.btn_search_trigger > a').on('click', function() {
      event.stopPropagation();
      $('.navbar_search_form').addClass('has_value');
      $('.main_header').addClass('show_search');
  });

  $('.navbar_search_reset').on('click', function() {
      event.stopPropagation();
      if($('.main_header').hasClass('show_search')) {
          $('.main_header').removeClass('show_search');
      }
  });
});