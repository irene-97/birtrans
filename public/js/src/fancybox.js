$(() => {
    $('.js-fancybox').on('click', function () {
        var $this = $(this);
        var options = $this.data('options') || {};
        var href = $this.attr('href') || $this.data('href');

        $.fancybox(href, options);

        return false;
    });
});