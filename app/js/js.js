/**
 * Created by Mateusz Chybiorz on 2016-11-26.
 */

var previousSize = window.innerWidth;

$(window).ready(function () {
    $(".photos figure").addClass("figuryUp");
});

$("#menu").click(function () {
    if(window.matchMedia('(max-width: 767px)').matches){
        $("#mainNav").slideToggle(200);
        $("#geoSlaskNav").slideUp(0);
    }
    if($(this).hasClass("expanded")){
        $(this).removeClass("expanded");
    } else  {
        $(this).addClass("expanded");
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
        if($("#menu").hasClass("expanded")){
            $("#menu").removeClass("expanded");
        }
    }
    previousSize = currentSize;
}

(function($){
    $(function(){
        $("#buttonUp").click(function(){
            if($("body").scrollTop() > 0){
                $('body').stop().animate({
                    scrollTop: 0
                }, 500);
            }

        });
    });
})(jQuery);

$('.categories').click(function() {
    $('.markedCategory').removeClass('markedCategory');
    $(this).addClass('markedCategory');
    var filterVal = $(this).data("category");

    if(filterVal =="all"){
        $(".photos figure").removeClass("figuryUp");
        setTimeout(function () {
            $(".photos figure").removeClass("hidden");
            setTimeout(function () {
                $(".photos figure").addClass("figuryUp");
            }, 100);
        }, 501);
    } else {
        $(".photos figure").removeClass("figuryUp");
        setTimeout(function () {
            $(".photos figure").removeClass("hidden").each(function () {
                if($(this).data("category") != filterVal){
                    $(this).addClass("hidden");
                }
                if($(this).data("category") == filterVal){
                    var obiekt = this;
                    setTimeout(function () {
                        $(obiekt).addClass("figuryUp");
                    }, 100);
                    // $(this).addClass("figuryUp");
                }
            })
        }, 501);
    }
});