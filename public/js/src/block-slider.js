$(() => {
    var $block = $('.block-slider');
    var $slider = $block.find('.slider');
    var $buttonHide =  $block.find('.hide');
    var $buttonShow = $block.find('.show');

    $slider.slick({
        appendArrows: $block
    });

    $buttonHide.on('click', function () {
        $block.addClass('close');
    });

    $buttonShow.on('click', function () {
        $block.removeClass('close');
    });
});