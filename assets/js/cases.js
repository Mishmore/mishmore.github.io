$('.circle-num').hover(
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
