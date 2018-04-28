// Fade out the divs

// Regular fadeout - note that 'fade completed' is displayed immediately
// $('button').on('click', function () {
//     $('div').fadeOut(1000);
//     console.log('fade completed');
// });

//Remove after fading
// $('button').on('click', function () {
//     $('div').fadeOut(1000, function(){
//         $(this).remove();
//
//     });
// });

// $('button').on('click', function () {
//     $('div').fadeIn(1000, function(){
//         // $(this).remove();
//
//     });
// });

//Fade toggle
// $('button').on('click', function () {
//     $('div').fadeToggle(1000, function(){
//
//     });
// });

//Slide
$('button').on('click', function () {
    $('div').slideToggle(1000, function(){
        console.log('slide is done');
    });
});

