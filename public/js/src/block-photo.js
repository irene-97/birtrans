$(() => {
    var $block = $('.block-photo');

    $block.find(".item .fancybox").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        helpers: {
            title: {type: 'inside'},
            buttons: {}
        }
    });

    $block.find('.more a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('wait');
    });
});