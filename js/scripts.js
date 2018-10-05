$(function() {
  $('.hamburger-icon').click(function() {
    $('.mobilenav')
      .stop()
      .fadeToggle(500);
    $('.top-menu')
      .stop()
      .toggleClass('top-animate');
    $('.mid-menu')
      .stop()
      .toggleClass('mid-animate');
    $('.bottom-menu')
      .stop()
      .toggleClass('bottom-animate');
  });

  var _showTab = 0;
  var $defaultLi = $('ul.tabs li')
    .eq(_showTab)
    .addClass('active');

  $($defaultLi.find('a').attr('href'))
    .siblings()
    .hide();

  $(window).on('resize', CLEARSTYLE);

  function CLEARSTYLE() {
    $('.mobilenav').css('display', 'none');
    $('.top-menu').removeClass('top-animate');
    $('.mid-menu').removeClass('mid-animate');
    $('.bottom-menu').removeClass('bottom-animate');
  }

  $('ul.tabs li')
    .click(function() {
      var $this = $(this),
        _clickTab = $this.find('a').attr('href');
      $this
        .addClass('active')
        .siblings('.active')
        .removeClass('active');
      $(_clickTab)
        .stop(false, true)
        .fadeIn()
        .siblings()
        .hide();

      return false;
    })
    .find('a')
    .focus(function() {
      this.blur();
    });

  $('.favorite > a').on('click', function() {
    var i = $(this)
      .find('i')
      .text();

    if (i == 'favorite_border') {
      $(this)
        .find('i')
        .text('favorite');
    } else {
      $(this)
        .find('i')
        .text('favorite_border');
    }
  });
});
