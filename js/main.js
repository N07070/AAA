// Load the main JSON file



function load_arguments() {
    // Get all the arguments form the json file
    $.getJSON( "arguments.json")
        .done(function( json ) {
            for (var i = 0; i < json.arguments.length; i++) {
                // console.log( "JSON Data: " + json.arguments[i] );
                $('.row').append("<div id=\"arg"+ i +"\" class=\"col-md-2 argument\" onmousenter=\"load_counter_argument("+i+")\" onmouseout=\"load_argument("+i+")\"> <h3> "+ json.arguments[i] +" </h3></div>");
            }
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
}

function load_counter_argument(arg_number) {
    // Get all the arguments form the json file
    var argument_to_be_replaced = "#arg" + arg_number;
    $.getJSON( "arguments.json")
        .done(function( json ) {
            $(argument_to_be_replaced).html("<h3> "+ json.counter_arguments[arg_number] +" </h3>");
        }
        )
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
}

function load_argument(arg_number) {
    // Get all the arguments form the json file
    var argument_to_be_replaced = "#arg" + arg_number;
    $.getJSON( "arguments.json")
        .done(function( json ) {
            $(argument_to_be_replaced).html("<h3> "+ json.arguments[arg_number] +" </h3>");
        }
        )
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
}




load_arguments();
