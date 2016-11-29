/**
 * Created by Mateusz Chybiorz on 2016-11-26.
 */

var previousSize = window.innerWidth;

$("#logo").click(function () {
    if(window.matchMedia('(max-width: 1199px)').matches){
        $("#mainNav").slideToggle(200);
        $("#geoSlaskNav").slideUp(0);
    }
});

$("#secondNav").click(function () {
    if(window.matchMedia('(max-width: 1199px)').matches) {
        $("#geoSlaskNav").slideToggle(150);
    }
});

window.addEventListener("resize", function () {
    changeSize();
}, false);

var pierwszaLista = document.getElementById("mainNav");
var drugaLista = document.getElementById("geoSlaskNav");

function changeSize() {
    var currentSize = window.innerWidth;
    if((previousSize <= 768 && currentSize > 768) || (previousSize <= 1200 && currentSize > 1200)){
        if(pierwszaLista.style.display){
            $("#geoSlaskNav").slideUp(0);
            pierwszaLista.style.removeProperty("display");
        }
        if(drugaLista.style.display){
            drugaLista.style.removeProperty("display");
        }
    }
    previousSize = currentSize;
}
