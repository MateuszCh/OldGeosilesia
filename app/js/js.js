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

var ojciec

$(".photos figure").click(function (e) {
    var fullMode = $("<section class='fullScreenMode'></section>");
    fullMode.append($("<button id='closeFullScreenMode'>X</button>"));
    ojciec = e.target.parentNode;
    console.log(ojciec);
    var opis = $(ojciec).children("figcaption").text();
    var image = $(ojciec).children("img").attr("src");
    image = image.substring(0, image.length - 8);
    image += ".jpg";
    console.log(image);
    console.log(opis);
    var figure = $("<figure id='figura'><img id='fullScreenImage'><figcaption id='fullScreenFigcaption'></figcaption><span class='prevnext prev'><span>&lt;</span></span><span class='prevnext next'><span>&gt;</span></span></figure>");

    fullMode.append(figure);
    $(".galleries").append(fullMode);
    $("#fullScreenImage").attr("src", image);
    $("#fullScreenFigcaption").text(opis);

    $("#closeFullScreenMode").click(function () {
        $(".fullScreenMode").remove();
    });
    setTimeout(function () {
        $("#figura").addClass("up");
    }, 10);


    $(".prevnext").click(function () {
        if($(this).hasClass("prev")){
            if($(ojciec).prevAll().length != 0){
                ojciec = $(ojciec).prev();
                change(ojciec);
            } else {
                ojciec = $("figure:last-of-type");
                change(ojciec);
            }
        } else  {
            if($(ojciec).nextAll().length != 0){
                ojciec = $(ojciec).next();
                change(ojciec);
            } else {
                ojciec = $("figure:first-of-type");
                change(ojciec);
            }

        }
    });
});

function change(ojciec) {
    console.log(ojciec);
    var image = $(ojciec).children("img").attr("src");
    console.log(image);
    image = image.substring(0, image.length - 8);
    image += ".jpg";
    var opis = $(ojciec).children("figcaption").text();
    $("#fullScreenImage").attr("src", image);
    $("#fullScreenFigcaption").text(opis);
    console.log(opis);
}

$(".head").click(function () {
    var brat  = $(this).next();
    $(".body").not(brat).slideUp(400);
    $(".body").not(brat).parent().removeClass("border");
    $(brat).slideToggle(400);
    $(this).parent().toggleClass("border");



    // if($(this).next().hasClass("teraz")){
    //     $(this).next().removeClass("teraz");
    // } else {
    //     $(".body").removeClass("teraz");
    //     $(this).next().addClass("teraz");
    // }

});