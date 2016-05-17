$(document).ready(function() {
  /** side bar animation */
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  })

  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
    }
  })

  /** blog filter */
  $('.barpoint').click(function(event) {
        $('.barpoint').css('color', '#999');
        $('.all').css('color', '#87BDB1');
        $(this).parent().children().css('color', '#999');
        $(this).css('color', '#87BDB1');
        var id = $(this).attr('id');
        var category = "." + id;
        if ($(this).hasClass('all')) {
            $('.article').show();
        } else {
            $('.article').hide();
            $(category).show();
        }
    });
});