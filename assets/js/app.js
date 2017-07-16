$(_ => {
  //FadeIn de logo intro
  const fadeInScreen = setTimeout(() => {
    $('.logo-animated-front').fadeOut(400);
    $('.logo-animated-back').fadeOut(400);
    $('.black-in').fadeOut(2000);
    $('body').removeClass('no-scroll');
  }, 3500);

  $(".button-collapse").sideNav();

  const fixedNav = $('.navbar-fixed');
  const portfolioTitle = $('.portfolio h3');
  const proj1 = $('.project1');
  const proj2 = $('.project2');
  const proj3 = $('.project3');

  let lastScroll = 0;

  $(window).scroll((e) => {
    const currScroll = $(window).scrollTop();
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
});




const downKey = 40;
const upKey = 38;

const YPos = {
  hero       : 0,
  aboutPos   : $("#about").offset().top,
  skillsPos   : $("#skills").offset().top,
  firstProj  : $("#portfolio").offset().top + 50,
  secondProj : $("#p2").offset().top - 200,
  thirdProj  : $("#p3").offset().top - 200,
  contactPos : $("#contact").offset().top
}

const Scroll = (section) => {
   $('body').animate({
       scrollTop: section}
       ,700);
}

$(window).on('keyup keypress', (event) => {
  const currPos = $(window).scrollTop() || window.pageYOffset || document.documentElement.scrollTop;
  if (event.which == downKey) {
    if (currPos > YPos.hero && currPos < YPos.aboutPos) {
      Scroll(YPos.aboutPos);
    }
    if (currPos >= YPos.aboutPos && currPos < YPos.skillsPos) {
      Scroll(YPos.skillsPos);
      return false;
    }
    if (currPos >= YPos.skillsPos && currPos < YPos.firstProj) {
      Scroll(YPos.firstProj);
      return false;
    }
    if (currPos >= YPos.firstProj && currPos < YPos.secondProj) {
      Scroll(YPos.secondProj);
      return false;
    }
    if (currPos >= YPos.secondProj && currPos < YPos.thirdProj) {
      Scroll(YPos.thirdProj);
      return false;
    }
    if (currPos >= YPos.thirdProj && currPos < YPos.contactPos) {
      Scroll(YPos.contactPos);
      return false;
    }
  }

  else if (event.which == upKey) {
    if (currPos <= YPos.aboutPos) {
      Scroll(YPos.hero);
      return false;
    }
    if (currPos <= YPos.firstProj) {
      Scroll(YPos.aboutPos);
      return false;
    }
    if (currPos <= YPos.secondProj && currPos > YPos.firstProj) {
      Scroll(YPos.firstProj);
      return false;
    }
    if (currPos <= YPos.thirdProj && currPos > YPos.secondProj) {
      Scroll(YPos.secondProj);
      return false;
    }
    if (currPos <= YPos.contactPos && currPos > YPos.thirdProj) {
      Scroll(YPos.thirdProj);
      return false;
    }
  }
});

const aboutText = $('.about-text');
const skillsText = $('.skills-text');

$(window).scroll(function(e) {
  const currPos = $(window).scrollTop() || window.pageYOffset || document.documentElement.scrollTop;
  if (currPos >= YPos.aboutPos-550) {
    aboutText.addClass('animated fadeInUp');
  }
  if (currPos >= YPos.skillsPos-550) {
    skillsText.addClass('animated fadeInUp');
  }
});
/*
document.addEventListener("wheel", function(e) {
  const currPos = window.pageYOffset || document.documentElement.scrollTop;
  let delta;
  if (event.wheelDelta) {
      delta = event.wheelDelta;
  } else {
    delta = -1 *event.deltaY;
  }

  if (delta < 0) {
      console.log('down');
      if (currPos > YPos.hero && currPos < YPos.aboutPos) {
        Scroll(YPos.aboutPos);
      }
  }

  else if (delta > 0) {
      console.log('up');
      if (currPos <= YPos.aboutPos) {
        Scroll(YPos.hero);
      }
  }

}, false);
*/
