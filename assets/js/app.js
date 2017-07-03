$(_ => {
  $(".button-collapse").sideNav();

  const fixedCol = $('.portfolio .col.s4');
  const fixedNav = $('.navbar-fixed');
  let lastScroll = 0;
  console.log(fixedCol);

  $(window).scroll(function(e) {
    const currScroll = $(window).scrollTop();
    console.log(currScroll);
    if (currScroll > lastScroll && currScroll > 150) {
      console.log('ocultar');
      fixedNav.css('top', '-100px');
    } else {
      console.log('mostrar');
      fixedNav.css('top', '0');
    }
     lastScroll = currScroll;
  });
})
