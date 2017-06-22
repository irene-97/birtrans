$(() => {
    var $block = $('.block-header');
    var $mobileMenu = $block.find('.mobile-menu');

    $mobileMenu.children('.toggle').on('click', function () {
        $mobileMenu.toggleClass('open');
    });
});