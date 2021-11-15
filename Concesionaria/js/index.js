$(document).ready(function () {
    var x = 0;
    // cambiar img 
    $('.btn-next').click(function () {

        x = (x <= 300) ? (x + 100) : 0;
        $('figure').css('left', -x + '%');
    });

    // ir atras 
    $('.btn-prev').click(function () {

        x = (x >= 100) ? (x - 100) : 400;
        $('figure').css('left', -x + '%');
    });
});