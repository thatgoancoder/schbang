$(function() {

    var slideCount = $(".slider ul li").length;
    var currentSlide = 1;
    $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").addClass('animate__rotateIn');
    $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").addClass('animate__zoomIn animate__delay-1s');
    $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").addClass('animate__fadeInRight');

    for (var i = 1; i <= slideCount; i++) {
        if (i == currentSlide) {
            continue;
        }
        $(".slider ul li:nth-child(" + i.toString() + ")").hide()
    }

    function moveLeft() {
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").removeClass('animate__rotateIn');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").removeClass('animate__zoomIn animate__delay-1s');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").removeClass('animate__fadeInRight');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").addClass('animate__zoomOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").addClass('animate__rotateOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").addClass('animate__fadeOutRight');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ")").delay(500).fadeOut(0);
        if (currentSlide == 1) {
            currentSlide = slideCount;
            console.log(currentSlide, "Yeh wala");
        } else {
            currentSlide--;
            console.log(currentSlide, "Woh wala");
        }
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").removeClass('animate__rotateOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").removeClass('animate__zoomOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").removeClass('animate__fadeOutRight');
        setTimeout(() => {
            $(".slider ul li:nth-child(" + currentSlide.toString() + ")").show();
            $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").addClass('animate__zoomIn animate__delay-1s');
            $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").addClass('animate__rotateIn');
            $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").addClass('animate__fadeInRight');
        }, 500);
    }

    function moveRight() {
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").removeClass('animate__rotateIn');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").removeClass('animate__zoomIn animate__delay-1s');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").removeClass('animate__fadeInRight');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").addClass('animate__zoomOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").addClass('animate__rotateOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").addClass('animate__fadeOutRight');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ")").delay(500).fadeOut(0);
        if (currentSlide == slideCount) {
            currentSlide = 1;
            console.log(currentSlide, "Yeh wala");
        } else {
            currentSlide++;
            console.log(currentSlide, "Woh wala");
        }
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").removeClass('animate__rotateOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").removeClass('animate__zoomOut');
        $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").removeClass('animate__fadeOutRight');
        setTimeout(() => {
            $(".slider ul li:nth-child(" + currentSlide.toString() + ")").show();
            $(".slider ul li:nth-child(" + currentSlide.toString() + ") .leaf").addClass('animate__zoomIn animate__delay-1s');
            $(".slider ul li:nth-child(" + currentSlide.toString() + ") .plate").addClass('animate__rotateIn');
            $(".slider ul li:nth-child(" + currentSlide.toString() + ") div").addClass('animate__fadeInRight');
        }, 500);
    }


    $(".next").on("click", function() {
        moveRight();
    });

    $(".prev").on("click", function() {
        moveLeft();
    });

    var repeater;

    function doWork() {
        moveLeft();
        repeater = setTimeout(doWork, 10000);
    }

    setTimeout(doWork, 6000);
});