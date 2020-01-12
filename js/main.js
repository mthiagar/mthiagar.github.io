// Responsive Nav
$(function() {
    menu = $('nav ul');
  
    $('#openup').on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  
    $(window).resize(function() {
      var w = $(this).width();
      if (w > 480 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  
    $('nav li').on('click', function(e) {
      var w = $(window).width();
      if (w < 480) {
        menu.slideToggle();
      }
    });
    $('.open-menu').height($(window).height());
  });
  
// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

ready(() => {
  animate_arrow();
});


function animate_arrow() {
  let timeline = new TimelineMax({ repeat: -1 });
  let arrow = document.getElementById("arrow-button");

  timeline.add(TweenLite.to(arrow, 0.5, { bottom: "1rem", ease: Power0.easeNone }));
  timeline.add(TweenLite.to(arrow, 0.5, { bottom: "2rem", ease: Power0.easeNone }));
  scroll_arrow();
}
