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

  $(window).scroll(function(e) {
    const currScroll = $(window).scrollTop();
    console.log(currScroll);
    if (currScroll > 1385) {
      portfolioTitle.addClass('fixed');
      portfolioTitle.css('top', '80px');
      portfolioTitle.css('margin', '0');
      proj1.css('left', '13.5%');
    }
    if (currScroll > 1819) {
      proj1.css('left', '-350px');
    }
    if (currScroll > 2750 || currScroll < 1385) {
      portfolioTitle.removeClass('fixed');
      portfolioTitle.css('top', '0');
      proj1.css('left', '-350px');
    }
  });
})
