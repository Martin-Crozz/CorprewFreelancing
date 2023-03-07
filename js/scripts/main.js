//Menu On Hover

$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
        var _d = $(e.target).closest('.nav-item');
        _d.addClass('show');
        setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        }, 1);
    }
});
// End Menu On Hover 

// Start My cart show on hover 

(function () {

    $("#cart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
    });

})();

// End My cart show on Hover


//============================================== header start

(function ($) {
    "use strict";
    $(window).on("load", function () {
        $("#preloader-active").delay(450).fadeOut("slow");
        $("body").delay(450).css({
            overflow: "visible",
        });
    });
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".header-sticky").removeClass("sticky-bar");
            $("#back-top").fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $("#back-top").fadeIn(500);
        }
    });
    $("#back-top a").on("click", function () {
        $("body,html").animate({
            scrollTop: 0,
        },
            800
        );
        return false;
    });
    var menu = $("ul#navigation");
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: "+",
            openedSymbol: "-",
        });
    }
})(jQuery);

//============================================== header end

//   Video Play Button Pop Up Starts
$('#play-video').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) { close_video(); }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};
//   Video Play Button Pop Up Ends
//   Video Play Button Pop Up Starts
$('#play-video1').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) { close_video(); }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};
//   Video Play Button Pop Up Ends
//   Video Play Button Pop Up Starts
$('#play-video2').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) { close_video(); }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};
//   Video Play Button Pop Up Ends
//   Video Play Button Pop Up Starts
$('#play-video3').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) { close_video(); }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};
//   Video Play Button Pop Up Ends

// Lightbox Gallery
$(document).ready(() => {
    $("#lightgallery").lightGallery({
        pager: true
    });
});

// Google Map

// var geocoder = new google.maps.Geocoder();

// function geocodePosition(pos) {
//     geocoder.geocode({
//         latLng: pos
//     }, function (responses) {
//         if (responses && responses.length > 0) {
//             updateMarkerAddress(responses[0].formatted_address);
//         } else {
//             updateMarkerAddress('Cannot determine address at this location.');
//         }
//     });
// }

// function updateMarkerStatus(str) {
//     document.getElementById('markerStatus').innerHTML = str;
// }

// function updateMarkerPosition(latLng) {
//     document.getElementById('info').innerHTML = [
//         latLng.lat(),
//         latLng.lng()
//     ].join(', ');
// }

// function updateMarkerAddress(str) {
//     document.getElementById('address').innerHTML = str;
// }

// function updateMarkerURL(str) {
//     var pos = [str.lat(), str.lng()].join(',');
//     var link = "https://www.google.com/maps/search/?api=1&query=" + pos;

//     var htmlLink = document.getElementById("url");
//     htmlLink.innerHTML = "Open Maps";
//     htmlLink.setAttribute('href', link);
// }

// function initialize() {
//     var latLng = new google.maps.LatLng(-6.1312767, 106.8001397);
//     var map = new google.maps.Map(document.getElementById('mapCanvas'), {
//         zoom: 15,
//         center: latLng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         streetViewControl: false
//     });

//     var image = 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/64/Map-Marker-Marker-Outside-Chartreuse.png';

//     var marker = new google.maps.Marker({
//         position: latLng,
//         title: 'Posisi Saya',
//         map: map,
//         draggable: false,
//         icon: image,
//     });
//     // Update current position info.
//     updateMarkerPosition(latLng);
//     geocodePosition(latLng);

//     // Add dragging event listeners.
//     //           google.maps.event.addListener(marker, 'dragstart', function() {
//     //             updateMarkerAddress('Dragging...');
//     //           });

//     //           google.maps.event.addListener(marker, 'drag', function() {
//     //             updateMarkerStatus('Dragging...');
//     //             updateMarkerPosition(marker.getPosition());
//     //           });

//     //           google.maps.event.addListener(marker, 'dragend', function() {
//     //             updateMarkerStatus('Drag ended');
//     //             geocodePosition(marker.getPosition());
//     //           });

//     map.addListener('center_changed', function () {
//         marker.setPosition(map.getCenter());
//         //updateMarkerStatus('Center of Map');
//         geocodePosition(marker.getPosition());
//         updateMarkerPosition(marker.getPosition());
//         updateMarkerURL(marker.getPosition());
//     });

//     if (navigator.geolocation) {

//         navigator.geolocation.getCurrentPosition(function (position) {
//             user_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//             map.setCenter(user_location);
//         });
//     } else {
//         /* Browser doesn't support Geolocation */
//     }
// }

// // Onload handler to fire off the app.
// google.maps.event.addDomListener(window, 'load', initialize);
// Animate Js
$(function () {
    new WOW().init();
});