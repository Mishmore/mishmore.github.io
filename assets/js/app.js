$(_ => {
    const fadeInScreen = setTimeout(() => {
        $('.black-in').addClass('animated slideOutRight');
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
        } else {
            fixedNav.css('top', '0');
        }
        lastScroll = currScroll;
    });

    const downKey = 40;
    const upKey = 38;

    const YPos = {
        hero: 0,
        aboutPos: $("#about").offset().top,
        skillsPos: $("#skills").offset().top,
        firstProj: $("#portfolio").offset().top + 50,
        secondProj: $("#p2").offset().top - 85,
        thirdProj: $("#p3").offset().top - 85,
        contactPos: $("#contact").offset().top
    }

    const Scroll = (section) => {
        $('body').animate({
            scrollTop: section
        }, 700);
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
        } else if (event.which == upKey) {
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
            if (currPos >= YPos.aboutPos - 550) {
                $('.about-text').addClass('animated fadeInUp');
            }
            if (currPos >= YPos.skillsPos - 550) {
                $('.skills-text').addClass('animated fadeInUp');
                $('.badget').addClass('animated fadeInUp');
            }
            if (currPos >= YPos.firstProj - 550) {
                $('.project-1').addClass('animated fadeInLeftBig');
            }
            if (currPos >= YPos.secondProj - 410) {
                $('.project-2').addClass('animated fadeInLeftBig');
            }
            if (currPos >= YPos.thirdProj - 410) {
                $('.project-3').addClass('animated fadeInLeftBig');
            }
            if (currPos >= YPos.contactPos - 550) {
                $('.section').addClass('animated fadeInUp');
            }
          }
    });

    $('nav a').on('click', function(){
      $('body,html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 700);
      return false;
    });


    $('.img-col').hover(
        function() {
            $(this).addClass('animated pulse');
        },
        function() {
            $(this).removeClass('animated pulse');
        }
    );

    $('.credits').hover(
        function() {
            $(this).addClass('animated flash');
        },
        function() {
            $(this).removeClass('animated flash');
        }
    );

    console.log("%c¿Quieres ver más código? %cTe invito a mi repositorio en %cgithub.com/Mishmore :)", "color: #059b85; font-size:15px; font-weight:bold", "color: #483e45; font-size:15px;", "color: #483e45; font-size:15px;font-weight:bold;");

});
