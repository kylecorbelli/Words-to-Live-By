var app = angular.module("quotesApp", []);

// On page load:
$(function() {
    
var $seagull = $("#seagull");
setTimeout(function() {
    $seagull.animate({height: "108px", width: "160px"}, 500, function() {
        $seagull.animate({height: "54", width: "80"});
    });
}, 4000);

$seagull.on("mouseenter", function() {
    $seagull.animate({height: "60", width: "88"}, 5);
});

$seagull.on("mouseleave", function() {
    $seagull.animate({height: "54", width: "80"}, 5);
});

$seagull.on("mousedown", function() {
    $seagull.animate({height: "54", width: "80"}, 5);
});

$seagull.on("mouseup", function() {
    $seagull.animate({height: "60", width: "88"}, 5);
});

});
