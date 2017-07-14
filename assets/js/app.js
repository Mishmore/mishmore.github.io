$(_ => {
  $(".button-collapse").sideNav();

  const fixedNav = $('.navbar-fixed');
  const portfolioTitle = $('.portfolio h3');
  const proj1 = $('.project1');
  const proj2 = $('.project2');
  const proj3 = $('.project3');

  let lastScroll = 0;

  $(window).scroll((e) => {
    const currScroll = $(window).scrollTop();
    //console.log(currScroll);
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
    //console.log(currScroll);
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

const scrollPos = {
  aboutPos   : $("#about").offset().top,
  firstProj  : $("#portfolio").offset().top,
  secondProj : $(".project2").offset().top,
  thirdProj  : $(".project3").offset().top,
  contactPos : $("#contact").offset().top,
}

console.log(scrollPos.currPos);

const aboutPos = $("#about").offset().top;
const firstProj = 1512;
const secondProj = 2308;
const thirdProj = 2980;
const contactPos = 3777;
const downKey = 40;
const upKey = 38;
const currScroll = $(window).scrollTop();
let downCounter = 0;
$("#about").offset().top;

$(window).on('keydown', (event) => {

  if (event.which == upKey) {
    --downCounter;
    //console.log('up'+downCounter);
    doScrollKey();
    console.log('up'+downCounter);
  }
  else if (event.which == downKey ) {
    //console.log('down'+downCounter);
    ++downCounter;
    doScrollKey();

    console.log('down'+downCounter);
  }
});
/*
$(window).scroll(function(e) {
  let lastScroll = 0;
  const currScroll = $(window).scrollTop();
    if (currScroll > 0 && lastScroll < aboutPos) {
      downCounter = 0;
    }
    if (currScroll >= aboutPos && lastScroll < firstProj) {
      downCounter = 1;
    }
});
*/
const doScrollKey = () => {
  switch (downCounter) {
    case 0:
    Scroll(aboutPos);
    //downCounter++;
    break;
    case 1:
    Scroll(firstProj);
    //downCounter++;
    break;
    case 2:
    Scroll(secondProj);
    //downCounter++;
    break;
    case 3:
    Scroll(thirdProj);
    //downCounter++;
    break;
    case 4:
    Scroll(contactPos);
    //downCounter++;
    break;
  }
}

const Scroll = (section) => {
   $('body').animate({
       scrollTop: section}
       ,700);
}
