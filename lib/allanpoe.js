"use strict";

(function () {
    // función anónima autoinvocada

    var allanPoe = function allanPoe(number) {
        var crow = "";

        for (var i = 0; i < number; i++) {
            crow += "nunca más ";
        }
        return crow;
    };

    if (typeof window == "undefined") {
        console.log('consola');
        module.exports = allanPoe;
    } else {
        console.log('navegador');
        window.allanPoe = allanPoe;
    }
})();