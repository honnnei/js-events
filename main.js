$(function() { //$ --> taking to jquery
  console.log("working");
    // all of our js goes here
    // $( "main" ).click(function() {
    //      $( "main" ).toggleClass( "black-background" );
    // });
    // $( "section" ).click(function() {
    //     $( this ).toggleClass( "highlight" );
    // });

// If a user clicks on the h1 tag,  the background should change colour, 
$( "h1" ).click(function() {
         $( "main" ).addClass( "main_background_change" );
         
});

//if they move their mouse out of the space the background should return to the original colour.

$("main").on("mouseover", () => {
    $( "main" ).removeClass("main_background_change");
  });

// If a user hovers over a h2 tag replace the words inside it to contain a greeting

$("h2").hover(function() {
    $( "h2" ).html("Hello, how are you?");
    }, function(){
    $( "h2" ).html("Section");
  });

// If someone types a letter whilst viewing the webpage a new paragraph should be created and that letter should be added to it.

$("body").keydown(function(e){
    var code = e.keyCode;
    var letter = String.fromCharCode(code);
    $("#section_4").append(`<div class="letters"><h3 class="${letter}"></h3></div>`);
    console.log(String.fromCharCode(code));
    $(`.${letter}`).html(`${letter}`);

    });
    



// $("body").keydown(function(e){
//   var code = e.keyCode;
//   var letter = String.fromCharCode(code);
//   var number = 0;
//   $("#section_4").append(`<div><h3 class="${(number += 1)}"></h3></div>`, function() {
//     $(this).html(`${letter}`);
//   });
//   // console.log(String.fromCharCode(code));
//   // $(`#${letter}`).html(`${letter}`);

//   });
  // $( "h3" ).html("not sure yet how to link this to keys");




// If someone clicks on one of the navigation items the styling of the connecting paragraph should change to be more bold and be a larger font size. If they click again on the same navigation item, the paragraph should revert to original styling.
$( "#button_1" ).click(function() {
    $( "#section_1" ).toggleClass( "section_change" );
    
});

$( "#button_2" ).click(function() {
    $( "#section_2" ).toggleClass( "section_change" );
    
});

$( "#button_3" ).click(function() {
    $( "#section_3" ).toggleClass( "section_change" );
    
});

});