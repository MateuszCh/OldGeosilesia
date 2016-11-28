/**
 * Created by Mateusz Chybiorz on 2016-11-26.
 */



$("#logo").click(function () {
    $("#mainNav").slideToggle(200);
    $("#geoSlaskNav").slideUp(200);
});

$("#secondNav").click(function () {
    $("#geoSlaskNav").slideToggle(150);
});