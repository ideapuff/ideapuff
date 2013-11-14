$(document).ready(function() {

    $.validator.addMethod("numberonly", function(value, element) {
        return this.optional(element) || /^\d+$/i.test(value);
    }, "Numbers only please.");

    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
    }, "Letters only please.");

    $.validator.addMethod("addressonly", function(value, element) {
        return this.optional(element) || /^[A-Za-z0-9 ]+$/i.test(value);
    }, "Number and Letters only please.");

    $.validator.addMethod("nameRegex", function(value, element) {
        return this.optional(element) || /^[-a-zA-Z'\s.]{1,40}$/.test(value);
    }, "Name cannot contain a number.");


    $.validator.addMethod("messageRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9\?\!\,\.\'\"\-\:\/ ]+$/i.test(value);
    }, "Message cannot contain special characters.");

    // validate signup form on keyup and submit
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                nameRegex: true,
                lettersonly: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                messageRegex: true
            }
        },
        messages: {
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parents(".inputField ").find(".status"));
        }

    });








});

