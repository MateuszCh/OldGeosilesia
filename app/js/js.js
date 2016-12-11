/**
 * Created by Mateusz Chybiorz on 2016-11-26.
 */

var previousSize = window.innerWidth;

$(window).ready(function () {
    $(".photos a").addClass("figuryUp");
    $(".galleries figure").addClass("figuryUp");
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

$("#buttonUp").click(function(){
    if($("body").scrollTop() > 0){
        $("body").stop().animate({
            scrollTop: 0
        }, 500);
    }
});

$('.categories').click(function() {
    $('.markedCategory').removeClass('markedCategory');
    $(this).addClass('markedCategory');
    var filterVal = $(this).data("category");

    if(filterVal =="all"){
        $(".photos a").removeClass("figuryUp");
        setTimeout(function () {
            $(".photos a").removeClass("hidden");
            setTimeout(function () {
                $(".photos a").addClass("figuryUp");
            }, 100);
        }, 501);
    } else {
        $(".photos a").removeClass("figuryUp");
        setTimeout(function () {
            $(".photos a").removeClass("hidden").each(function () {
                if($(this).data("category") != filterVal){
                    $(this).addClass("hidden");
                }
                if($(this).data("category") == filterVal){
                    var obiekt = this;
                    setTimeout(function () {
                        $(obiekt).addClass("figuryUp");
                    }, 100);
                }
            })
        }, 501);
    }
});

var ojciec;

$(".galleries figure").click(function () {
    var fullMode = $("<section class='fullScreenMode'></section>");
    fullMode.append($("<button id='closeFullScreenMode'>X</button>"));
    ojciec = $(this);
    console.log(ojciec);
    var opis = $(ojciec).children("figcaption").children(".opis").text();
    var image = $(ojciec).children("img").attr("src");
    var author = $(ojciec).children("figcaption").children(".authorAndDate").text();
    var moreText = $(ojciec).children("figcaption").children(".moreText").html();
    image = image.substring(0, image.length - 8);
    image += ".jpg";
    var figure = $("<figure id='figura'><img id='fullScreenImage'><figcaption id='fullScreenFigcaption'><h3 id='fullScreenOpis'></h3><p id='fullScreenMore'></p><p id='fullScreenAuthor'></p></figcaption><span class='prevnext prev'><span>&lt;</span></span><span class='prevnext next'><span>&gt;</span></span></figure>");

    fullMode.append(figure);
    $("main").append(fullMode);
    $("#fullScreenImage").attr("src", image);
    $("#fullScreenOpis").text(opis);
    $("#fullScreenMore").html(moreText);
    $("#fullScreenAuthor").text(author);

    $("#closeFullScreenMode").click(function () {
        $(".fullScreenMode").slideUp(500, function () {
            $(".fullScreenMode").remove();
        });

    });
    setTimeout(function () {
        $("#figura").addClass("up");
    }, 10);


    $(".prevnext").click(function () {
        if($(this).hasClass("prev")){
            if($(ojciec).prevAll("figure").length != 0){
                ojciec = $(ojciec).prev();
                change(ojciec);
            } else {
                ojciec = $("figure:last-of-type");
                change(ojciec);
            }
        } else  {
            if($(ojciec).nextAll("figure").length != 0){
                ojciec = $(ojciec).next();
                change(ojciec);
            } else {
                ojciec = $("figure:first-of-type");
                change(ojciec);
            }

        }
    });

    $(document).keydown(function (e) {
        var code = e.keyCode || e.which;
        if(code == 37){
            $(".prev")[0].click();
        }
        if(code == 39){
            $(".next")[0].click();
        }
        if(code == 8 || code == 27){
            e.preventDefault();
            $("#closeFullScreenMode").click();
        }
    });
});

function change(ojciec) {
    console.log(ojciec);
    var image = $(ojciec).children("img").attr("src");
    console.log(image);
    image = image.substring(0, image.length - 8);
    image += ".jpg";
    var opis = $(ojciec).children("figcaption").children(".opis").text();
    var author = $(ojciec).children("figcaption").children(".authorAndDate").text();
    var moreText = $(ojciec).children("figcaption").children(".moreText").html();
    $("#fullScreenImage").attr("src", image);
    $("#fullScreenOpis").text(opis);
    $("#fullScreenMore").html(moreText);
    $("#fullScreenAuthor").text(author);
    console.log(opis);
}

$(".head").click(function () {
    var brat  = $(this).next();
    $(".body").not(brat).slideUp(400).parent().removeClass("border");
    $(brat).slideToggle(400);
    $(this).parent().toggleClass("border");
});

$(".tabs li").click(function () {
    var tabClass = $(this).attr("class");
    tabClass = tabClass.substring(0, 11);
    console.log(tabClass);
    $(".tabs li").removeClass("selectedTab");
    $(this).addClass("selectedTab");
    $(".structures").each(function () {
       if($(this).attr("id") == tabClass){
           $(this).show();
       } else {
           $(this).hide();
       }
    });
});

var sizeOfHeader    =   $("header").height();

$(window).on("resize", function () {
    sizeOfHeader = $("header").height();
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





function initMap() {
    var mapDiv = document.getElementById("map");
    var options =   {
        center: {
            lat: 50.277978,
            lng: 19.020544
        },
        zoom: 9,
        scrollwheel: false,
        draggable: true,
        mapTypeId: "roadmap",
        // maxZoom: 12,
        minZoom: 8
        // disableDefaultUI: true
    };

    var map = new google.maps.Map(mapDiv, options);

    var contentString = "<div class='marker'><p>Muzeum Górnictwa Rud Żelaza</p><p>Częstochowa, Park im. S.Staszica</p><a href='http://kopalnia.muzeumczestochowa.pl'>Więcej</a></div>";

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    var marker = new google.maps.Marker({
        position: {lat:50.810997, lng:19.100235},
        map: map,
        title: "Muzeum Górnictwa Rud Żelaza"
    });

    marker.addListener("click", function () {
        infowindow2.close();
       infowindow.open(map, marker);
    });

    var contentString2 = "<div class='marker'><p>Ścieżka przyrodnicza na terenie rezerwatu przyrody Góra Zborów</p><p>Podlesice, Gmina Kroczyce</p><a href='http://www.podlesice.org.pl/podlesice1/'>Więcej</a></div>";

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2,
        maxWidth: 200
    });

    var marker2 = new google.maps.Marker({
        position: {lat:50.573488, lng:19.522357},
        map: map,
        title: "Ścieżka przyrodnicza na terenie rezerwatu przyrody Góra Zborów"
    });

    marker2.addListener("click", function () {
        infowindow.close();
        infowindow2.open(map, marker2);
    });
}

