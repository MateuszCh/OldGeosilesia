function changeSize(){var e=window.innerWidth;(previousSize<=768&&e>768||previousSize<=1200&&e>1200)&&(pierwszaLista.style.display&&($("#geoSlaskNav").slideUp(0),pierwszaLista.style.removeProperty("display")),drugaLista.style.display&&drugaLista.style.removeProperty("display")),previousSize=e}var previousSize=window.innerWidth;$("#menu").click(function(){window.matchMedia("(max-width: 1199px)").matches&&($("#mainNav").slideToggle(200),$("#geoSlaskNav").slideUp(0))}),$("#secondNav").click(function(){window.matchMedia("(max-width: 1199px)").matches&&$("#geoSlaskNav").slideToggle(150)}),window.addEventListener("resize",function(){changeSize()},!1);var pierwszaLista=document.getElementById("mainNav"),drugaLista=document.getElementById("geoSlaskNav");