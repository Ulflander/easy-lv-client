(function(){
    'use strict';

    var connection = io.connect('localhost:1234');

    connection.on( 'connect', function() {
        console.log( "Connected." );
    });

    connection.on( 'reload', function() {
        window.location.reload(true);        
    });
}());