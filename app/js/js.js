/**
 * Created by Mateusz Chybiorz on 2016-11-26.
 */
(function ($) {
    var body = $("body");
    var menuHam = $("#menu");
    var secondNav = $("#secondNav");
    var mainNav = $("#mainNav");
    var geoSlaskNav = $("#geoSlaskNav");
    var pierwszaLista = document.getElementById("mainNav");
    var drugaLista = document.getElementById("geoSlaskNav");
    var galleryPhotos = $(".photos a");
    var sizeOfHeader = $("header").height();
    var previousSize = window.innerWidth;
    var ojciec;

    $(window).ready(function () {
        var gallery = $(".photos img");
        var galleries = $(".galleries img");
        function imgLoaded(imgElement) {
            return imgElement.complete && imgElement.naturalHeight !== 0;
        }
        for(var g = 0; g < gallery.length; g++){
            if(imgLoaded(gallery[g])){
                $(gallery[g]).parent().parent().addClass("figuryUp");
            }
        }
        for(var i = 0; i < galleries.length; i++){
            if(imgLoaded(galleries[i])){
                $(galleries[i]).parent().addClass("figuryUp");
            }
        }
        $(galleries).on("load", function () {
            for(var i = 0; i < galleries.length; i++){
                $(this).parent().addClass("figuryUp");
            }
        });
        $(gallery).on("load", function () {
            for(var i = 0; i < gallery.length; i++ ){
                $(this).parent().parent().addClass("figuryUp");
            }
        });
    });

    menuHam.on("click", function () {
        if(window.matchMedia('(max-width: 767px)').matches){
            $(mainNav).slideToggle(200);
            $(geoSlaskNav).slideUp(0);
        }
        if($(this).hasClass("expanded")){
            $(this).removeClass("expanded");
        } else  {
            $(this).addClass("expanded");
        }
    });

    secondNav.on("click", function () {
        if(window.matchMedia('(max-width: 1199px)').matches) {
            $(geoSlaskNav).slideToggle(150);
        }
    });

    $(window).on("resize", function () {
        sizeOfHeader = $("header").height();
        var currentSize = window.innerWidth;
        if((previousSize <= 768 && currentSize > 768) || (previousSize <= 1200 && currentSize > 1200)){
            if(pierwszaLista.style.display){
                $(geoSlaskNav).slideUp(0);
                pierwszaLista.style.removeProperty("display");
            }
            if(drugaLista.style.display){
                drugaLista.style.removeProperty("display");
            }
            if($(menuHam).hasClass("expanded")){
                $(menuHam).removeClass("expanded");
            }
        }
        previousSize = currentSize;
    });

    $("#buttonUp").on("click", function () {
        if($(body).scrollTop() > 0){
            $(body).stop().animate({
                scrollTop: 0
            }, 500);
        }
    });

    $("#scrollToMap").on("click", function () {
        $("body").stop().animate({
            scrollTop: 2000
        }, 1000);
    });

    $(".categories").on("click", function () {
        $('.markedCategory').removeClass('markedCategory');
        $(this).addClass('markedCategory');
        var filterVal = $(this).data("category");
        if(filterVal =="all"){
            $(galleryPhotos).removeClass("figuryUp");
            setTimeout(function () {
                $(galleryPhotos).removeClass("hidden");
                setTimeout(function () {
                    $(galleryPhotos).addClass("figuryUp");
                }, 100);
            }, 501);
        } else {
            $(galleryPhotos).removeClass("figuryUp");
            setTimeout(function () {
                $(galleryPhotos).removeClass("hidden").each(function () {
                    if($(this).data("category") != filterVal){
                        $(this).addClass("hidden");
                    }
                    if($(this).data("category") == filterVal){
                        var self = this;
                        setTimeout(function () {
                            $(self).addClass("figuryUp");
                        }, 100);
                    }
                })
            }, 501);
        }
    });

    $(".head").on("click", function () {
        var brat  = $(this).next();
        $(".body").not(brat).slideUp(400).parent().removeClass("border");
        $(brat).slideToggle(400);
        $(this).parent().toggleClass("border");
    });

    $(".tabs li").on("click", function () {
        var tabClass = $(this).attr("class");
        tabClass = tabClass.substring(0, 11);
        console.log(tabClass);
        $(".tabs li").removeClass("selectedTab");
        $(this).addClass("selectedTab");
        $(".structures").each(function () {
            if($(this).attr("id") == tabClass){
                $(this).slideDown(500);
            } else {
                $(this).slideUp(500);
            }
        });
    });

    $(window).on("scroll", function () {
        if(document.getElementById("map")){
            var scrollTopOfMap  = $("#map")[0].scrollHeight;
            var scrollTopWindow =   $(window).scrollTop();
            var diff = scrollTopOfMap - sizeOfHeader;
            if(scrollTopWindow > diff && scrollTopOfMap){
                $("header").slideUp(500);
            } else {
                $("header").slideDown(100);
            }
        }
    });


    $(".galleries figure").on("click", function () {
        ojciec = $(this);
        var fullMode = $("<div class='fullScreenMode'></div>");
        var opis = $(ojciec).children("figcaption").children(".opis").text();
        var image = $(ojciec).children("img").attr("src");
        image = image.substring(0, image.length - 8);
        image += ".jpg";
        var author = $(ojciec).children("figcaption").children(".authorAndDate").text();
        var moreText = $(ojciec).children("figcaption").children(".moreText").html();
        var figure = $("<figure id='figura'><img id='fullScreenImage'><figcaption id='fullScreenFigcaption'><h3 id='fullScreenOpis'></h3><p id='fullScreenMore'></p><p id='fullScreenAuthor'></p></figcaption><span class='prevnext prev'><img src='../images/strzalka_050.png'></span><span class='prevnext next'><img src='../images/strzalka_050.png'></span></figure>");
        var loader = $("<div class='loadingPhoto'></div>");

        fullMode.append($("<button id='closeFullScreenMode'><img src='../images/x-bialy.png'></button>"));
        fullMode.append(loader);
        fullMode.append(figure);
        $("main").append(fullMode);
        $("#fullScreenImage").attr("src", image).on("load", function () {
            setTimeout(function () {
                $(".loadingPhoto").hide();
                $("#figura").addClass("up");
            }, 10);

        });
        $("#fullScreenOpis").text(opis);
        $("#fullScreenMore").html(moreText);
        $("#fullScreenAuthor").text(author);


        $("#closeFullScreenMode").on("click", function () {
            $(".fullScreenMode").slideUp(500, function () {
                $(".fullScreenMode").remove();
            });
            $(document).off("keydown");
        });

        $(".prevnext").on("click", function () {
            $(".loadingPhoto").show();
            if($(this).hasClass("prev")){
                if($(ojciec).prevAll("figure").length != 0){
                    ojciec = $(ojciec).prev();
                } else {
                    ojciec = $(".galleries figure:last-of-type");
                }
            } else  {
                if($(ojciec).nextAll("figure").length != 0){
                    ojciec = $(ojciec).next();
                } else {
                    ojciec = $(".galleries figure:first-of-type");
                }
            }
            var image = $(ojciec).children("img").attr("src");
            image = image.substring(0, image.length - 8);
            image += ".jpg";
            var opis = $(ojciec).children("figcaption").children(".opis").text();
            var author = $(ojciec).children("figcaption").children(".authorAndDate").text();
            var moreText = $(ojciec).children("figcaption").children(".moreText").html();
            $("#fullScreenImage").attr("src", image).on("load", function () {
                $("#fullScreenOpis").text(opis);
                $("#fullScreenMore").html(moreText);
                $("#fullScreenAuthor").text(author);
                $(".loadingPhoto").hide();
            });
        });

        $(document).on("keydown", function (e) {
            var code = e.keyCode || e.which;
            if(code == 37){
                $(".prev").click();
            }
            if(code == 39){
                $(".next").click();
            }
            if(code == 8 || code == 27){
                e.preventDefault();
                $("#closeFullScreenMode").click();
            }
        });
    });
})(jQuery);







