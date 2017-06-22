$(() => {
    var $block = $('.block-post');

    $block.find('.slider').slick({
        speed: 0,
        adaptiveHeight: true,
        draggable: false,
        touchMove: false
    });

    $block.find('.show-more').on('click', function () {
        $block.addClass('open');
    });
});