var app = angular.module("quotesApp", []);

// On page load:
$(function() {
    
var $seagull = $("#seagull");
setTimeout(function() {
    $seagull.animate({height: "95px", width: "140px"}, 500, function() {
        $seagull.animate({height: "54", width: "80"});
    });
}, 4000);

$seagull.on("mousedown", function() {
    $seagull.animate({height: "48", width: "72"}, 5);
});

$seagull.on("mouseup", function() {
    $seagull.animate({height: "54", width: "80"}, 5);
});

});
