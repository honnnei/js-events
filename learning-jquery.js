$(document).ready(() => { //$ --> taking to jquery
    // all of our js goes here
    $( "main" ).click(function() {
         $( "main" ).toggleClass( "black-background" );
    });
    $( "section" ).click(function() {
        $( this ).toggleClass( "highlight" );
    });
});