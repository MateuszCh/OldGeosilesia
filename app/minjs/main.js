function changeSize(){var e=window.innerWidth;(previousSize<=768&&e>768||previousSize<=1200&&e>1200)&&(pierwszaLista.style.display&&($("#geoSlaskNav").slideUp(0),pierwszaLista.style.removeProperty("display")),drugaLista.style.display&&drugaLista.style.removeProperty("display"),$("#menu").hasClass("expanded")&&$("#menu").removeClass("expanded")),previousSize=e}function change(e){console.log(e);var i=$(e).children("img").attr("src");console.log(i),i=i.substring(0,i.length-8),i+=".jpg";var a=$(e).children("figcaption").text();$("#fullScreenImage").attr("src",i),$("#fullScreenFigcaption").text(a),console.log(a)}var previousSize=window.innerWidth;$(window).ready(function(){$(".photos figure").addClass("figuryUp")}),$("#menu").click(function(){window.matchMedia("(max-width: 767px)").matches&&($("#mainNav").slideToggle(200),$("#geoSlaskNav").slideUp(0)),$(this).hasClass("expanded")?$(this).removeClass("expanded"):$(this).addClass("expanded")}),$("#secondNav").click(function(){window.matchMedia("(max-width: 1199px)").matches&&$("#geoSlaskNav").slideToggle(150)}),window.addEventListener("resize",function(){changeSize()},!1);var pierwszaLista=document.getElementById("mainNav"),drugaLista=document.getElementById("geoSlaskNav");!function(e){e(function(){e("#buttonUp").click(function(){e("body").scrollTop()>0&&e("body").stop().animate({scrollTop:0},500)})})}(jQuery),$(".categories").click(function(){$(".markedCategory").removeClass("markedCategory"),$(this).addClass("markedCategory");var e=$(this).data("category");"all"==e?($(".photos figure").removeClass("figuryUp"),setTimeout(function(){$(".photos figure").removeClass("hidden"),setTimeout(function(){$(".photos figure").addClass("figuryUp")},100)},501)):($(".photos figure").removeClass("figuryUp"),setTimeout(function(){$(".photos figure").removeClass("hidden").each(function(){if($(this).data("category")!=e&&$(this).addClass("hidden"),$(this).data("category")==e){var i=this;setTimeout(function(){$(i).addClass("figuryUp")},100)}})},501))});var ojciec;$(".photos figure").click(function(e){var i=$("<section class='fullScreenMode'></section>");i.append($("<button id='closeFullScreenMode'>X</button>")),ojciec=e.target.parentNode,console.log(ojciec);var a=$(ojciec).children("figcaption").text(),o=$(ojciec).children("img").attr("src");o=o.substring(0,o.length-8),o+=".jpg",console.log(o),console.log(a);var t=$("<figure id='figura'><img id='fullScreenImage'><figcaption id='fullScreenFigcaption'></figcaption><span class='prevnext prev'><span>&lt;</span></span><span class='prevnext next'><span>&gt;</span></span></figure>");i.append(t),$(".galleries").append(i),$("#fullScreenImage").attr("src",o),$("#fullScreenFigcaption").text(a),$("#closeFullScreenMode").click(function(){$(".fullScreenMode").remove()}),setTimeout(function(){$("#figura").addClass("up")},10),$(".prevnext").click(function(){$(this).hasClass("prev")?0!=$(ojciec).prevAll().length?(ojciec=$(ojciec).prev(),change(ojciec)):(ojciec=$("figure:last-of-type"),change(ojciec)):0!=$(ojciec).nextAll().length?(ojciec=$(ojciec).next(),change(ojciec)):(ojciec=$("figure:first-of-type"),change(ojciec))})});