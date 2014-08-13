// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


 $(window).scroll(function() {   
   if($(window).scrollTop() >= 500) {
       $( "#navBar" ).addClass( "visible animated bounceIn" );
       $( "#navBar" ).removeClass( "hidden animate bounceOut" );
   }
   if($(window).scrollTop() <= 500) {
       $( "#navBar" ).addClass( "hidden" );
       $( "#navBar" ).removeClass( "visible animated bounceIn" );
   }
});