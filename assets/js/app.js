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
  const initialAnimate = 1360;

  $(window).scroll(function(e) {
    const currScroll = $(window).scrollTop();
    console.log(currScroll);
    if (currScroll > initialAnimate) {
      portfolioTitle.addClass('fixed');
      portfolioTitle.css('top', '80px');
      portfolioTitle.css('margin', '0');
      proj1.css('left', '13.5%');
      proj2.css('left', '-350px');
    }
    if (currScroll > 1700) {
      proj1.css('left', '-350px');
    }
    if (currScroll > 2750 || currScroll < 1360) {
      portfolioTitle.removeClass('fixed');
      portfolioTitle.css('top', '0');
      proj1.css('left', '-350px');
    }
    if (currScroll > 1836) {
      proj2.css('left', '13.5%');
    }
    if (currScroll > 2346) {
      proj2.css('left', '-350px');
    }
    if (currScroll > 2436) {
      proj3.css('left', '13.5%');
    }
    if (currScroll > 2946) {
      proj3.css('left', '-350px');
    }
  });
})
