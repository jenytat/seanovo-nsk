'use strict';

$(document).ready(function () {
    $('.popup__price, .popup__btn, .left-banner a').click(function () {
        $('.form-price').addClass('active-form');
    });

    $(document).mouseup(function (e) {
        var div = $(".form__wrap");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.parent().removeClass('active-form');
        }
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5wb3B1cF9fcHJpY2UsIC5wb3B1cF9fYnRuLCAubGVmdC1iYW5uZXIgYScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmZvcm0tcHJpY2UnKS5hZGRDbGFzcygnYWN0aXZlLWZvcm0nKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGRpdiA9ICQoXCIuZm9ybV9fd3JhcFwiKTtcbiAgICAgICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpICYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGl2LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUtZm9ybScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=
