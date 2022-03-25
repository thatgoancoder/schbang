// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({ loop: false })
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 100 * i
    });

$(window).on('scroll', function() {
    $(".resto-card").each(function() {
        if (isScrolledIntoView($(this))) {
            $(".resto-card .square-dots2").show();
            $(".resto-card .square-dots2").addClass("animate__animated");

            $(".resto-card .square-dots").show();
            $(".resto-card .square-dots").addClass("animate__animated");

            $(".resto-card .book-now").show();
            $(".resto-card .book-now").addClass("animate__animated");
        } else {
            $(".resto-card .square-dots").hide();
            $(".resto-card .square-dots").removeClass("animate__animated");

            $(".resto-card .square-dots2").hide();
            $(".resto-card .square-dots2").removeClass("animate__animated");

            $(".resto-card .book-now").hide();
            $(".resto-card .book-now").removeClass("animate__animated");
        }
    });
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(".navbar .mobile-menu-container").hide();
$(".user-box .navbar-toggler-icon").click(function() {
    $(".navbar .mobile-menu-container").toggle();
});