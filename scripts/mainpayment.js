(function (window) {
    'use strict';
    var FORM_SELECTOR = '[payment-order="form"]';
    var DIALOG_SELECTOR = '[payment-response="person"]';

    var App = window.App;
    var Payment = App.Payment;
    var Dialog = App.Dialog;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var $ = window.jQuery;

    //var Truck = App.Truck;
    //var Validation = App.Validation;
    //var CheckList = App.CheckList;

    var payment = new Payment(new DataStore());
    window.payment = payment;

    var dialog = new Dialog(DIALOG_SELECTOR);

    var formHandler = new FormHandler(FORM_SELECTOR);


    formHandler.addSubmitHandler(function (data) {
        payment.createPayment.call(payment, data);
        dialog.addPayment.call(dialog, data);
        $("#payment-response").modal();
    });


    //formHandler.addInputHandler(Validation.isCompanyEmail);




    //console.log(formHandler);
})(window);