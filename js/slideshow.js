    

    var slidenum = 0;
    var slidenext = 0;
    var changeSpeed = 1000;
    var backgroundDelay = 3000; /* in milliseconds */

    var slideCount = $('#slider ul li').length; /* =4 */
    var slideWidth = $('#slider ul li').width(); /* =500px */
    var slideHeight = $('#slider ul li').height(); /* =300px */
    var sliderUlWidth = slideCount * slideWidth; /* 4 x 500px = 2000px */
    // var leftMargin = slideWidth - (slideWidth / 4); /* 500px - 125px = 375px */
    var leftMargin = 0; /* 500px - 125px = 375px */
    var containerWidth = slideWidth;

    // var timer = setTimeout(cycleImages, backgroundDelay); 

    $(window).resize(function() {

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {

            slideWidth = $('#slider ul li').width(); /* =500px */
            slideHeight = $('#slider ul li').height(); /* =300px */
            // console.log('The slideWidth is: ' + slideWidth);
            // console.log('The slideHeight is: ' + slideHeight);
            sliderUlWidth = slideCount * slideWidth; /* 4 x 500px = 2000px */
            leftMargin = 0; /* 500px - 125px = 375px */
            containerWidth = slideWidth;

            $('#slider').css({ width: containerWidth, height: slideHeight }); /* width:500px, height:300px */
            $('#slider ul').css({ width: sliderUlWidth, marginLeft: - leftMargin }); /* width:2000px, marginLeft: -500px */
        
        }, 100));

    });
        

	
	$('#slider').css({ width: containerWidth, height: slideHeight }); /* width:500px, height:300px */
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - leftMargin }); /* width:2000px, marginLeft: -500px */
    $('#slider ul li:last-child').prependTo('#slider ul'); /*  */
    $('#slider ul li:first-child').addClass('activeSlide');

    $(function(){
        $(".control_prev").bind("click", moveLeft);
        $(".control_next").bind("click", moveRight);
        // showFirstImage();
    });

    function moveLeft(event) {
        // clearTimeout(timer);
        // timer = setTimeout(moveRight, 4000); 
        $(".control_prev").unbind("click");
        $('.activeSlide').removeClass('activeSlide');
        $('#slider ul li:last-child').addClass('activeSlide');
        $('#slider ul li:last-child').prependTo('#slider ul');
        var currentMarginLeft = parseInt($('#slider ul').css('marginLeft'))
        var newMarginLeft = currentMarginLeft - slideWidth;
        $('#slider ul').css({marginLeft: newMarginLeft}); /* width:2000px, marginLeft: -500px */
        var newLeft = parseInt($('#slider ul').css('left')) + slideWidth
        $('#slider ul').animate({
            left: newLeft
        }, 500, function () {
            $('#slider ul').css('left', '');
            $('#slider ul').css('margin-left', currentMarginLeft);
            $(".control_prev").bind("click", moveLeft);
            // showFirstImage();
        });
    };

    function moveRight(event) {
        $('.activeSlide').next().addClass('activeSlide');
        $('.activeSlide:first-child').removeClass('activeSlide');
        $(".control_next").unbind("click");
        var newLeft = parseInt($('#slider ul').css('left')) - slideWidth
        $('#slider ul').animate({
            left: newLeft
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
            $(".control_next").bind("click", moveRight);
            // showFirstImage();
        });
    };

$('#slider ul li').hover(function(){
    $(this).find('.website-info').stop().fadeIn();
}, function(){
    $(this).find('.website-info').stop().fadeOut();
});