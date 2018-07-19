( function(){ // función anónima autoinvocada

    const allanPoe = (number) => {
        let crow = "";

        for (let i = 0; i < number ; i++ ){
            crow += "nunca más ";
        }
        return crow;
    };

    if ( typeof window == "undefined" ) {
        console.log('consola');
        module.exports = allanPoe;
    } else {
        console.log('navegador');
        window.allanPoe = allanPoe;
    }

})();