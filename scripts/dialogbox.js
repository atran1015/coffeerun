(function (window) {
    "use strict";

    var App = window.App || {};
    var $ = window.jQuery;

    function Dialog(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    Dialog.prototype.addPayment = function (paymentOrder) {
        var rowElement = new Payment(paymentOrder);
        this.$element.append(rowElement.$element);
    };

    function Payment(paymentOrder) {
        var $div = $('<div></div>', {
            id: 'payment-response',
            class: 'modal'
        });

        var $p = $('<p></p>');

        var $a = $('<a></a>', {
            href: '#',
            rel: 'model:close'
        });

        var description = 'Thank you for your order, ' + paymentOrder.title + ' ';
        description += paymentOrder.name;

        $p.append(description);
        $div.append($p);
        $div.append($a);

        this.$element = $div;
    }

    App.Dialog = Dialog;
    window.App = App;
})(window);