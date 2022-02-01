var halfText = $('.products__text--pink').innerHeight() / 2,
    textHeight = $('.products__text--pink').innerHeight();

$('.products__text--pink').css('height', $('.products__text--pink').innerHeight() / 2);

$('.products__button--pink').click(function() {
    if ($('.products__text--pink').innerHeight() == halfText) {
        $('.products__text--pink').animate({ height: textHeight }, 500);
    } else {
        $('.products__text--pink').animate({ height: halfText }, 500);
    }
});

var halfText = $('.products__text--yellow').innerHeight() / 2,
    textHeight = $('.products__text--yellow').innerHeight();

$('.products__text--yellow').css('height', $('.products__text--yellow').innerHeight() / 2);

$('.products__button--yellow').click(function() {
    if ($('.products__text--yellow').innerHeight() == halfText) {
        $('.products__text--yellow').animate({ height: textHeight }, 500);
    } else {
        $('.products__text--yellow').animate({ height: halfText }, 500);
    }
});



var halfText = $('.products__text--green').innerHeight() / 2,
    textHeight = $('.products__text--green').innerHeight();

$('.products__text--green').css('height', $('.products__text--green').innerHeight() / 2);

$('.products__button--green').click(function() {
    if ($('.products__text--green').innerHeight() == halfText) {
        $('.products__text--green').animate({ height: textHeight }, 500);
    } else {
        $('.products__text--green').animate({ height: halfText }, 500);
    }
});


// var halfText = $('.products__text--pink--desc').innerHeight() / 2,
//     textHeight = $('.products__text--pink--desc').innerHeight();

// $('.products__text--pink--desc').css('height', $('.products__text--pink--desc').innerHeight() / 2);

// $('.products__button--pink--desc').click(function() {
//     if ($('.products__text--pink--desc').innerHeight() == halfText) {
//         $('.products__text--pink--desc').animate({ height: textHeight }, 500);
//     } else {
//         $('.products__text--pink--desc').animate({ height: halfText }, 500);
//     }
// });

// var halfText = $('.products__text--yellow--desc').innerHeight() / 2,
//     textHeight = $('.products__text--yellow--desc').innerHeight();

// $('.products__text--yellow--desc').css('height', $('.products__text--yellow').innerHeight() / 2);

// $('.products__button--yellow--desc').click(function() {
//     if ($('.products__text--yellow--desc').innerHeight() == halfText) {
//         $('.products__text--yellow--desc').animate({ height: textHeight }, 500);
//     } else {
//         $('.products__text--yellow--desc').animate({ height: halfText }, 500);
//     }
// });



// var halfText = $('.products__text--green--desc').innerHeight() / 2,
//     textHeight = $('.products__text--green--desc').innerHeight();

// $('.products__text--green--desc').css('height', $('.products__text--green--desc').innerHeight() / 2);

// $('.products__button--green').click(function() {
//     if ($('.products__text--green--desc').innerHeight() == halfText) {
//         $('.products__text--green--desc').animate({ height: textHeight }, 500);
//     } else {
//         $('.products__text--green--desc').animate({ height: halfText }, 500);
//     }
// });