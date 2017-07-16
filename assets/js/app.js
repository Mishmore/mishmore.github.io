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
    if (currPos <= YPos.skillsPos) {
      Scroll(YPos.aboutPos);
      return false;
    }
    if (currPos <= YPos.firstProj) {
      Scroll(YPos.skillsPos);
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

let last = 0;

  $(window).scroll(function(e) {
    const currPos = $(window).scrollTop() || window.pageYOffset || document.documentElement.scrollTop;
    if (currPos > last) {
      last = currPos;
      if (currPos >= YPos.aboutPos-550) {
        $('.about-text').addClass('animated fadeInUp');
      }
      if (currPos >= YPos.skillsPos-550) {
        $('.skills-text').addClass('animated fadeInUp');
      }
      if (currPos >= YPos.firstProj-550) {
        $('.portfolio h3').addClass('fixed');
        $('.project-1').addClass('animated fadeInLeft');
      }
      if (currPos >= YPos.secondProj-250) {
        $('.project-2').addClass('animated fadeInLeft');
      }
      if (currPos >= YPos.thirdProj-250) {
        $('.project-3').addClass('animated fadeInLeft');
      }
      if (currPos >= YPos.contactPos-300) {
        $('.portfolio h3').removeClass('fixed');
      }

    }
    else if (currPos < last) {
      console.log('subiendo');
      console.log(last);
    }
  });

  const spaceAnimate = 340;
  const initialAnimate = YPos.firstProj;

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
