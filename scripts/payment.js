(function (window) {
    'use strict';

    var App = window.App || {};

    class Payment {
        constructor(db) {
            this.db = db;
        }


        createPayment(order) {
            console.log("Adding order for " + order.emailAddress);
            this.db.add(order.emailAddress, order);
        }

        printPayment() {
            var customerIdArray = Object.keys(this.db.getAll());

            console.log("Payment has pending orders:");
            customerIdArray.forEach(function (id) {

                console.log(this.db.get(id));
            }.bind(this));
        }
    }

    App.Payment = Payment;
    window.App = App;
})(window);