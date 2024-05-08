$(function(){
    AOS.init();
    $('.accordion-item').children().removeClass('show')
    $('.accordion-item').find('button').addClass('collapsed');
    
    window.ityped.init(document.querySelector('.ityped'), {
            strings: ['Your Dream, Our Responsibility   '],
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            startDelay: 500,
            backDelay: 500,
            cursorChar: "|",
})
})

$(window).scroll(function () {
   var scroll = $(window).scrollTop();
    if (scroll > 2000) {
        $(".back-to-top").removeClass("d-none");
    } else {
        $(".back-to-top").addClass("d-none");
    }
});

$('#see-more').click(function(){
    $('#career-para1').css({'max-height':'unset'});
    $('#career-para2').show();
    $('#see-more').hide();
    $('#see-less').show();
})

$('#see-less').click(function(){
    $('#career-para1').removeAttr('style');
    $('#career-para2').hide();
    $('#see-more').show();
    $('#see-less').hide();
})

