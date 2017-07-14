$(_ => {
  $(".button-collapse").sideNav();

  const fixedNav = $('.navbar-fixed');
  const portfolioTitle = $('.portfolio h3');
  const proj1 = $('.project1');
  const proj2 = $('.project2');
  const proj3 = $('.project3');

  let lastScroll = 0;
  console.log(proj1);

  $(window).scroll(function(e) {
    const currScroll = $(window).scrollTop();
    console.log(currScroll);
    if (currScroll > lastScroll && currScroll > 150) {
      fixedNav.css('top', '-100px');
    }
    else {
      fixedNav.css('top', '0');
    }
     lastScroll = currScroll;
  });

  const spaceAnimate = 340;
  const initialAnimate = 1330;

  $(window).scroll(function(e) {
    const currScroll = $(window).scrollTop();
    console.log(currScroll);
    if (currScroll < initialAnimate) {
      portfolioTitle.removeClass('fixed');
    }
    if (currScroll > initialAnimate) {
      portfolioTitle.addClass('fixed');
      portfolioTitle.css('top', '120px');
      portfolioTitle.css('margin', '0');
      proj1.css('left', '13.5%');
      proj2.css('left', '-350px');
    }
    if (currScroll > 1700) {
      proj1.css('left', '-350px');
    }
    if (currScroll > 2750 || currScroll < 1330) {
      proj1.css('left', '-350px');
    }
    if (currScroll > 1992) {
      proj3.css('left', '-350px');
      proj2.css('left', '13.5%');
    }
    if (currScroll > 2346) {
      proj2.css('left', '-350px');
    }
    if (currScroll > 2600) {
      proj3.css('left', '13.5%');
    }
    if (currScroll > 2946) {
      portfolioTitle.css('left', '-350px');
      proj3.css('left', '-350px');
    }
    if (currScroll <= 2946) {
      portfolioTitle.css('left', '13.5%');
    }
  });
})

let aboutPos = 671;
const downKey = 40;

$(window).on('keydown', (event) => {
  if (event.which == downKey) {
     $('body').animate({
         scrollTop: aboutPos}
         ,700);
    }
});
