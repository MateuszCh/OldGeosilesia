/**
 * Created by Mateusz Chybiorz on 2016-12-11.
 */
function initMap() {

    var mapDiv = document.getElementById("map");

    var mapOptions =    {
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


    var map, marker, i;

    map = new google.maps.Map(mapDiv, mapOptions);

    var infowindow = new google.maps.InfoWindow();

    for (i = 0; i < obiekty.length; i++) {
        marker = new google.maps.Marker({
            position: obiekty[i].position,
            map: map,
            title: obiekty[i].title
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent("<div><p>" + obiekty[i].title + "</p><p>" + obiekty[i].place + "</p><a href=" + obiekty[i].www + ">Więcej</a></div>");
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}