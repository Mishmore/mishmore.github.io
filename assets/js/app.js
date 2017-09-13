$(_ => {
    $('.lang-es').on('click', e => {
        $('.black-in svg').addClass('animated fadeOut');
        $('.lang').addClass('animated fadeOut');
        setTimeout(function() {
            window.location.href = './portafolio.html';
        }, 750);
    });

    $('.lang-en').on('click', e => {
        $('.black-in svg').addClass('animated fadeOut');
        $('.lang').addClass('animated fadeOut');
        setTimeout(function() {
            window.location.href = './portfolio.html';
        }, 750);
    });

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
                $('.divider').addClass('animated fadeInUp');
            }
          }
    });

    $('nav a').on('click', function(){
      const id =  $(this).attr('href');
        $('body,html').animate({
          scrollTop: $( id ).offset().top
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
