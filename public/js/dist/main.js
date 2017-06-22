(function () {
    'use strict';

    $.fancybox.defaults.tpl.error = '<p class="fancybox-error">Содержимое не может быть загружено.<br/>Пожалуйста, повторите запрос позже.</p>';
    $.fancybox.defaults.tpl.closeBtn = '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>';
    $.fancybox.defaults.tpl.next = '<a title="Вперед" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>';
    $.fancybox.defaults.tpl.prev = '<a title="Назад" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>';

    $.fancybox.helpers.buttons.defaults.tpl = '\n    <div id="fancybox-buttons">\n        <ul>\n            <li>\n                <a class="btnPrev" title="Назад" href="javascript:;"></a>\n            </li>\n            <li>\n                <a class="btnPlay" title="Слайдшоу" href="javascript:;"></a>\n            </li>\n            <li>\n                <a class="btnNext" title="Вперед" href="javascript:;"></a>\n            </li>\n            <li>\n                <a class="btnToggle" title="Изменить размер" href="javascript:;"></a>\n            </li>\n            <li>\n                <a class="btnClose" title="Закрыть" href="javascript:;"></a>\n            </li>\n        </ul>\n    </div>\n';

    $(function () {
        $('.js-fancybox').on('click', function () {
            var $this = $(this);
            var options = $this.data('options') || {};
            var href = $this.attr('href') || $this.data('href');

            $.fancybox(href, options);

            return false;
        });
    });

    /**
     * @return {boolean}
     */
    window.ShowShareDialog = function (counter) {
        var div = document.getElementById("share-dialog" + counter);

        if (!div) {
            return;
        }

        if (div.style.display == "block") {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }

        return false;
    };

    /**
     * @return {boolean}
     */
    window.CloseShareDialog = function (counter) {
        var div = document.getElementById("share-dialog" + counter);

        if (!div) {
            return;
        }

        div.style.display = "none";

        return false;
    };

    window.__function_exists = function (function_name) {
        if (typeof function_name == 'string') {
            return typeof window[function_name] == 'function';
        } else {
            return function_name instanceof Function;
        }
    };

    $(function () {
        var $block = $('.block-header');
        var $mobileMenu = $block.find('.mobile-menu');

        $mobileMenu.children('.toggle').on('click', function () {
            $mobileMenu.toggleClass('open');
        });
    });

    $(function () {
        var $block = $('.block-slider');
        var $slider = $block.find('.slider');
        var $buttonHide = $block.find('.hide');
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

    $(function () {
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

    $(function () {
        var $block = $('.block-photo');

        $block.find(".item .fancybox").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: { type: 'inside' },
                buttons: {}
            }
        });

        $block.find('.more a').on('click', function (e) {
            e.preventDefault();
            $(this).parent().addClass('wait');
        });
    });

}());
//# sourceMappingURL=main.js.map
