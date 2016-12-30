function initMap(){var a,e,o,i=[{position:{lat:50.810997,lng:19.100235},title:"Muzeum Górnictwa Rud Żelaza w Częstochowie",place:"Częstochowa, Park im. S.Staszica",www:"http://kopalnia.muzeumczestochowa.pl",category:"trasyPodziemne"},{position:{lat:50.574331,lng:19.522621},title:"Ścieżka przyrodnicza na terenie rezerwatu przyrody Góra Zborów, Geostanowiska",place:"Podlesice, Gmina Kroczyce",www:"http://www.podlesice.org.pl/podlesice1/",category:"sciezkiTematyczne"},{position:{lat:50.575626,lng:19.524289},title:"Jaskinia Głęboka w rezerwacie przyrody Góra Zborów",place:"Podlesice, Gmina Kroczyce",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=171",category:"trasyPodziemne"},{position:{lat:50.877535,lng:19.233106},title:"Ścieżka dydaktyczna w kamieniołomie Lipówka, Geostanowisko",place:"Rudniki, ul .Dworcowa 15C",www:"http://www.cemex.pl/kamieniolom-lipowka.aspx",category:"sciezkiTematyczne"},{position:{lat:50.681461,lng:18.629606},title:"Muzeum Paleontologiczne w Lisowicach",place:"Lisowice, ul. Mickiewicza 20",www:"http://muzeum.lisowice.com/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:49.604436,lng:19.118363},title:"Wirtualne muzeum Huty żelaza w Węgierskiej Górce",place:"Węgierska Górka",www:"http://www.historia.metalpol.com/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.757984,lng:19.268618},title:"Ścieżka geoturystyczna w Górach Towarnych, Geostanowiska",place:"Olsztyn, powiat częstochowski",www:"http://jura.slaskie.travel/Trasy/Pokaz/8108/sciezka-geologiczna-w-krainie-bialych-skal/1247",category:"sciezkiTematyczne"},{position:{lat:50.752308,lng:19.278467},title:"Wirtualna ścieżka dydaktyczna Kamieniołom Kielniki, Geostanowiska",place:"Olsztyn, powiat częstochowski",www:"http://geoportal.pgi.gov.pl/css/virtual/kielniki/sciezka.swf",category:"sciezkiTematyczne"},{position:{lat:50.227293,lng:19.274351},title:"Ośrodek Edukacji Ekologiczno-Geologicznej GEOsfera w Jaworznie",place:"Jaworzno, Św. Wojciecha 100",www:"https://www.facebook.com/geosfera/?ref=page_internal",category:"wybraneGeostanowiska"},{position:{lat:50.319327,lng:19.184904},title:"Kopalnia Ćwiczebna w Dąbrowie Górniczej, Geostanowisko",place:"Dąbrowa Górnicza, ul. Górnicza",www:"http://muzeum-dabrowa.pl/",category:"trasyPodziemne"},{position:{lat:50.296432,lng:18.798901},title:"Sztolnia Królowa Luiza w Zabrzu – Strefa podziemna",place:"Zabrze, ul. Sienkiewicza 43 (wjazd od ul. Mochnackiego)",www:"http://www.sztolnialuiza.pl/index.php/park-12c-1",category:"trasyPodziemne"},{position:{lat:50.296689,lng:18.806437},title:"Sztolnia Królowa Luiza w Zabrzu – Strefa naziemna (Szyb Carnall), Geostanowisko",place:"Zabrze, ul. Wolności 410",www:"http://sztolnialuiza.pl/index.php/szyb-carnall2",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.425519,lng:18.849568},title:"Zabytkowa Kopalnia Srebra w Tarnowskich Górach, Geostanowisko",place:"Tarnowskie Góry, ul. Szczęść Boże 81",www:"http://www.kopalniasrebra.pl/kopalnia/kopalnia.php",category:"trasyPodziemne"},{position:{lat:50.289459,lng:18.79142},title:"Kopalnia Guido w Zabrzu, Geostanowisko",place:"Zabrze, 3 Maja 93",www:"https://kopalniaguido.pl/index.php/pl-pl/",category:"trasyPodziemne"},{position:{lat:50.314952,lng:18.74149},title:"Szyb „Maciej” w Zabrzu",place:"Zabrze, ul. Srebrna 6",www:"http://www.szybmaciej.pl/",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.427044,lng:18.807134},title:"Sztolnia Czarnego Pstrąga w Tarnowskich Górach, Geostanowisko",place:"Tarnowskie Góry, ul. Śniadeckiego / Repecka",www:"http://www.kopalniasrebra.pl/sztolnia/sztolnia.php",category:"trasyPodziemne"},{position:{lat:50.402597,lng:18.859255},title:"Stanowisko dokumentacyjne Blachówka w Bytomiu, Geostanowisko",place:"Bytom - Sucha Góra, ul. Blachówka 94",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10446",category:"obszaryIObiektyChronione"},{position:{lat:49.464108,lng:19.152271},title:"Geopark Glinka - Ujsoły",place:"Ujsoły, Glinka 4 ",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=7350",category:"wybraneGeostanowiska"},{position:{lat:50.325843,lng:19.133729},title:"Podziemia będzińskie w Górze Zamkowej, Geostanowisko",place:"Będzin, ul. Małachowskiego",www:"http://muzeum.bedzin.pl/podziemia-b%C4%99dzi%C5%84skie",category:"trasyPodziemne"},{position:{lat:50.439148,lng:19.667091},title:"Ośrodek edukacyjny ZPKWŚ w Smoleniu",place:"Smoleń, Gmina Pilica",www:"http://www.zpk.com.pl/index.php/osrodek-smolen",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.313082,lng:19.131317},title:"Ośrodek edukacyjny ZPKWŚ w Będzinie",place:"Będzin, ul. I. Krasickiego 25",www:"http://www.zpk.com.pl/index.php/bedzin",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.73412,lng:18.886205},title:"Ośrodek edukacyjny ZPKWŚ w Kalinie",place:"Kalina, ul. Lompy 6",www:"http://www.zpk.com.pl/index.php/osrodek-kalina",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.191491,lng:18.445949},title:"Ośrodek edukacyjny ZPKWŚ w Rudach",place:"Rudy, ul. Raciborska 10 ",www:"http://www.zpk.com.pl/index.php/osrodek-rudy",category:"muzeaGeologiczneIDinoparki"},{position:{lat:49.691166,lng:19.184952},title:"Ośrodek edukacyjny ZPKWŚ w Żywcu",place:"Żywiec, ul. Łączki 44 a",www:"http://www.zpk.com.pl/index.php/osrodek-zywiec",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.268775,lng:19.143301},title:"Sala ekspozycyjna Oddziału Górnośląskiego PIG-PIB w Sosnowcu",place:"Sosnowiec, ul. Królowej Jadwigi 1",www:"https://www.pgi.gov.pl/sosnowiec/wystawa.html",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.318136,lng:19.008677},title:"Park Tradycji w Siemianowicach",place:"Siemianowice, ul. Orzeszkowej 12",www:"http://siemck.pl/o-parku-tradycji",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.349076,lng:18.925711},title:"Muzeum Górnośląskie w Bytomiu",place:"Bytom, pl. Jana III Sobieskiego 2 ",www:"http://muzeum.bytom.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.394799,lng:18.676303},title:"Zabytkowa Stacja Wodociągowa Zawada w Karchowicach",place:"Karchowice, ul. Bytomska 6",www:"http://www.gpw-zawada.pl/",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.298939,lng:19.13381},title:"Muzeum Wydziału Nauk o Ziemi w Sosnowcu",place:"Sosnowiec, Będzińska 60",www:"http://www.muzeum.wnoz.us.edu.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.282372,lng:18.995629},title:"Kotlina Dinozaurów w Chorzowie, Geostanowisko",place:"Chorzów, Promenada Gen. Jerzego Ziętka 7",www:"http://zoo.silesia.pl/kotlina-dinozaurow",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.315801,lng:19.029369},title:"Park dinozaurów w Siemianowicach",place:"Siemianowice Śl., ul. Spacerowa",www:"https://www.google.pl/search?q=dinozaury+siemianowice+slaskie&oq=dinozaury+siem&aqs=chrome.1.69i57j0.9730j0j4&sourceid=chrome&ie=UTF-8#q=park+dinozaur%C3%B3w+siemianowice,+siemianowice+%C5%9Bl%C4%85skie",category:"muzeaGeologiczneIDinoparki"},{position:{lat:49.720208,lng:18.825733},title:"Uzdrowisko Ustroń – źródło Karola, pijalnia wód i fontanna solankowa, Geostanowisko",place:"Ustroń, ul. Sanatoryjna",www:"http://www.uzdrowisko-ustron.pl/O-uzdrowisku/Atrakcje-Uzdrowiska-i-okolicy.html",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:49.937325,lng:18.980228},title:"Uzdrowisko Goczałkowice",place:"Goczałkowice, ul. Uzdrowiskowa",www:"http://www.info.goczalkowicezdroj.pl/warto-zobaczyc/zabytki/",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:49.813844,lng:18.719806},title:"Tężnia solankowa w Dębowcu",place:"Dębowiec, ul. Katowicka / Szkolna",www:"http://debowiec.cieszyn.pl/teznia-solankowa.html",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:50.055238,lng:18.478153},title:"Tężnia solankowa w Radlinie",place:"Radlin, ul. Wypandów",www:"https://teznia.radlin.pl/",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:49.79218,lng:18.948498},title:"Fontana solankowa w Jaworzu",place:"Jaworze, ul. Zdrojowa / Wapienicka",www:"https://jaworze.pl/category/dla-turystow/",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:49.793155,lng:18.954901},title:"Tężnia solankowa w Jaworzu",place:"Jaworze, ul. Koralowa",www:"http://www.villabarbara.pl/teznia-solankowa-jaworze",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:49.915367,lng:18.764967},title:"Fontana solankowa w Strumieniu",place:"Strumień, ul. Łuczkiewicza",www:"http://www.archiwum.strumien.com/modules.php?name=Content&pa=showpage&pid=123",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:49.950263,lng:18.56671},title:"Park Zdrojowy w Jastrzębiu Zdroju",place:"Jastrzębie Zdrój, ul. Witczaka 5",www:"http://jastrzebiezdroj.naszemiasto.pl/tag/inhalatorium-solankowe-jastrzebie.html",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:50.0078,lng:18.456769},title:"Górnicza Sztolnia Ćwiczebna w Wodzisławiu Śl.",place:"Wodzisław Śl., ul. Gałczyńskiego 1",www:"http://pckziu.wodzislaw.pl/index.php/sztolnia/",category:"trasyPodziemne"},{position:{lat:50.095908,lng:18.5416},title:"Muzeum w Rybniku",place:"Rybnik, Rynek 18",www:"http://www.muzeum.rybnik.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.080939,lng:18.188644},title:"Śląskie Obserwatorium Geofizyczne PAN w Raciborzu",place:"Racibórz, ul.Chłopska 1",www:"http://www.raciborz.com.pl/art6723.html",category:"muzeaGeologiczneIDinoparki"},{position:{lat:49.715843,lng:18.817493},title:"Muzeum Ustrońskie",place:"Ustroń, ul. Hutnicza 3",www:"http://www.muzeum.ustron.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.297939,lng:18.967105},title:"Szyb Prezydent w Chorzowie",place:"Chorzów, ul. Piotra Skargi 34 a-d",www:"http://sztygarka.pl/",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.308657,lng:19.063447},title:"Elektrownia dawnej KWK Saturn w Czeladzi",place:"Czeladź, ul. Dehnelów 45",www:"http://www.galeria-elektrownia.czeladz.pl/",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.273376,lng:18.860002},title:"Kolonia Robotnicza Ficinus w Rudzie Śl.",place:"Ruda Śląska,  ul. Kubiny",www:"http://www.ficinus.rudaslaska.pl/ ",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.290718,lng:18.674892},title:"Muzeum Geologii Złóż Wydziału Górnictwa i Geologii Politechniki Śląskiej w Gliwicach",place:"Gliwice, ul. Akademicka 2",www:"https://www.polsl.pl/Wydzialy/RG/rg7/Strony/MuzeumGeologiiZloz.aspx",category:"muzeaGeologiczneIDinoparki"},{position:{lat:49.767549,lng:18.909748},title:"Szlak szklany Jaworze Nałęże – ranczo Błatnia",place:"Jaworze, Dolina Jasionki",www:"http://www.szklanym-szlakiem.jaworze.pl/strona_glowna",category:"sciezkiTematyczne"},{position:{lat:50.318384,lng:19.183715},title:"Muzeum Miejskie Sztygarka w Dąbrowie Górniczej",place:"Dąbrowa Górnicza, ul. Legionów Polskich 69",www:"http://muzeum-dabrowa.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.263505,lng:19.034892},title:"Muzeum Śląskie na terenie dawnej KWK Katowice",place:"Katowice, ul. Dobrowolskiego 1",www:"http://www.muzeumslaskie.pl/",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:49.619821,lng:18.986288},title:"Kaskady Rodła u źródeł Wisły",place:"Wisła, Biała Wisełka",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1409",category:"wybraneGeostanowiska"},{position:{lat:50.444508,lng:18.855449},title:"Gwarki tarnogórskie",place:"Tarnowskie Góry",www:"http://www.gwarki.tg.net.pl/",category:"inne"},{position:{lat:50.278443,lng:19.126652},title:"Dni Ziemi w Sosnowcu",place:"",www:"http://ptg.wnoz.us.edu.pl/index.php?option=com_content&view=article&id=177&Itemid=197",category:"inne"},{position:{lat:50.264264,lng:19.023591},title:"Industriada",place:"Województwo Śląskie",www:"http://www.industriada.pl/",category:"inne"},{position:{lat:50.678225,lng:18.644894},title:"Glinianka w Lisowicach (Lipiu Śląskim)",place:"Lubliniec, ul. Cegielniana",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=707",category:"geostanowiskaMiedzynarodowe"},{position:{lat:49.657494,lng:18.982282},title:"Jaskinia Malinowska w górze Malinów",place:"Gmina Wisła",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=733",category:"geostanowiskaMiedzynarodowe"},{position:{lat:49.648888,lng:18.992777},title:"Stanowisko dokumentacyjne Jaskinia Miecharska w Malinowskiej Skale",place:"Gmina Wisła",www:"://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=637",category:"geostanowiskaMiedzynarodowe"},{position:{lat:49.665277,lng:18.9575},title:"Stanowisko dokumentacyjne Jaskinia Wiślańska w górze Malinów",place:"Gmina Brenna, Przełęcz Salmopolska",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1412",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.797718,lng:.050711},title:"Glinianka iłów środkowojurajskich Gnaszyn w Częstochowie",place:"Częstochowa, ul. Tatrzańska 3",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9219",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.494523,lng:19.38073},title:"Hałda utworów górnotriasowych w Zawierciu - Marciszowie",place:"Zawiercie, ul. Podmiejska",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9554",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.6615832,lng:19.484227},title:"Jaskinia Stajnia w Grzędzie Mirowskiej",place:"Gmina Niegowa",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10096",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.546111,lng:19.532777},title:"Jaskinia w Dziadowej Skale k/Podlesic",place:"Gmina Kroczyce",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9378",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.572777,lng:19.518611},title:"Jaskinia Żabia w Skałkach Podlesickich",place:"Gmina Kroczyce",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9371",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.931638,lng:19.011936},title:"Kamieniołom wapieni górnojurajskich w Łobodnie (nieczynny)",place:"Łobodno, gm. Kłobuck",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9570",category:"geostanowiskaMiedzynarodowe"},{position:{lat:.931638,lng:19.011936},title:"Kamieniołom wapieni górnojurajskich w Łobodnie (nieczynny)",place:"Łobodno, gm. Kłobuck",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9570",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.504768,lng:19.368913},title:"Odsłonięcie utworów triasu górnego w Porębie",place:"Poręba, ul. Partyzantów",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9376",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.439185,lng:19.521302},title:"Odsłonięcie utworów środkowojurajskich Ogrodzieniec - Świertowiec",place:"Gmina Ogrodzieniec",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9373",category:"geostanowiskaMiedzynarodowe"},{position:{lat:49.780585,lng:18.646307},title:"Sill cieszynitu teralitowego w Zamarskach - Rudowie",place:"Zamarski, ul. Kamienna",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9721",category:"geostanowiskaMiedzynarodowe"},{position:{lat:49.837137,lng:18.91972},title:"Sill pikrytowy ze skarnem pektolitowym w Miedzyrzeczu Górnym",place:"Międzyrzecze Górne, gm. Jasienica",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9668",category:"geostanowiskaMiedzynarodowe"},{position:{lat:49.835494,lng:18.628023},title:"Żwirownia w Kończycach Wielkich",place:"Kończyce Wielkie, gm. Hażlach",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9381",category:"geostanowiskaMiedzynarodowe"},{position:{lat:50.811805,lng:19.112277},title:"Muzeum Częstochowskie",place:"Częstochowa, al. Najświętszej Maryi Panny 47",www:"http://www.muzeumczestochowa.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.260538,lng:19.084505},title:"Muzeum Hutnictwa Cynku w Szopienicach",place:"Katowice-Szopienice, ul. 11 listopada (wjazd od ulicy Roździeńskiej 25)",www:"http://www.walcownia.org/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.300751,lng:18.786187},title:"Muzeum Górnictwa Węglowego w Zabrzu",place:"Zabrze, ul. 3maja 19",www:"http://www.muzeumgornictwa.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.399474,lng:18.633743},title:"Mamuty w Pyskowicach",place:"Pyskowice, ul. Kardynała S. Wyszyńskiego 37",www:"http://zabytkigornegoslaska.com.pl/index.php/inne/165-pyskowice-geopunkt",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.221592,lng:18.672905},title:"Izba Tradycji i Perspektyw KWK Knurów-Szczygłowice",place:"Knurów ul. Dworcowa 3A",www:"http://www.wirtualnyknurow.pl/izba.htm",category:"muzeaGeologiczneIDinoparki"},{position:{lat:50.149949,lng:18.675424},title:"Zabytkowe osiedle patronackie KWK Dębińsko w Czerwionce-Leszczynach",place:"Czerwionka-Leszczyny, ul. Mickiewicza 10",www:"http://familoki.com.pl/",category:"muzeaGeologiczneIDinoparki"},{position:{lat:49.801683,lng:18.872416},title:"Dajka lamprofirowa w nieczynnym kamieniołomie Goruszka w Grodźcu",place:"Gmina Jasienica",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9712",category:"wybraneGeostanowiska"},{position:{lat:50.464347,lng:19.551377},title:"Góra Birów",place:"Gmina Ogrodzieniec",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=43",category:"wybraneGeostanowiska"},{position:{lat:51.054975,lng:18.805859},title:"Rezerwat przyrody Szachownica w gminie Lipie",place:"Gmina Lipie",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1818",category:"wybraneGeostanowiska"},{position:{lat:49.769175,lng:18.624342},title:"Kamieniołom cieszynitu i lamprofiru w Cieszynie-Boguszowicach (nieczynny)",place:"Cieszyn, ul. Majowa",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9717",category:"wybraneGeostanowiska"},{position:{lat:49.769521,lng:18.616255},title:"Kamieniołom diabazów w Cieszynie-Boguszowicach (nieczynny)",place:"Cieszyn, ul Motokrosowa",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9725",category:"wybraneGeostanowiska"},{position:{lat:50.499239,lng:19.234253},title:"Kamieniołom dolomitu Nowa Wioska ",place:"Gmina Siewierz",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9631",category:"wybraneGeostanowiska"},{position:{lat:50.495366,lng:19.219151},title:"Kamieniołom dolomitu Siewierz ",place:"Gmina Siewierz",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9630",category:"wybraneGeostanowiska"},{position:{lat:49.67874,lng:18.842992},title:"Kamieniołom piaskowców godulskich Wisła-Gahura",place:"Wisła, ul. Gahura",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9636",category:"wybraneGeostanowiska"},{position:{lat:49.704885,lng:18.729429},title:"Kamieniołom wapieni cieszyńskich w Lesznej Górnej",place:"Gmina Goleszów",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9649",category:"wybraneGeostanowiska"},{position:{lat:49.809709,lng:19.2347},title:"Kamieniołom warstw godulskich w Wielkiej Puszczy",place:"Gmina Porąbka",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1668",category:"wybraneGeostanowiska"},{position:{lat:49.724869,lng:18.741636},title:"Stanowisko dokumentacyjne Jasieniowa w Goleszowie",place:"Gmina Goleszów",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9634",category:"wybraneGeostanowiska"},{position:{lat:51.04095,lng:18.949972},title:"Morena czołowa akumulacyjna w Dąbrówce k. Popowa",place:"Gmina Popów",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9492",category:"wybraneGeostanowiska"},{position:{lat:49.659642,lng:19.307017},title:"Odsłonięcie stratotypowe ogniwa piaskowca z Mutnego formacji z Jaworzynki",place:"Gmina Jeleśnia",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=570",category:"wybraneGeostanowiska"},{position:{lat:49.777778,lng:18.614167},title:"Sill cieszynitu i diabazu na terenie rezerwatu Kopce w Cieszynie – Boguszowicach",place:"Cieszyn - Boguszowice",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9679",category:"wybraneGeostanowiska"},{position:{lat:49.763976,lng:18.618889},title:"Stanowisko dokumentacyjne Odkrywka cieszynitów w Cieszynie",place:"Cieszyn - Boguszowice",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9727",category:"wybraneGeostanowiska"},{position:{lat:49.776389,lng:18.611111},title:"Sill cieszynitu w Cieszynie – Boguszowicach",place:"Cieszyn, ul Motokrosowa",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9678",category:"wybraneGeostanowiska"},{position:{lat:49.793056,lng:18.89},title:"Sill dolerytu (diabazu) w dolinie Łańskiego Potoku w Grodźcu",place:"Gmina Jasienica",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9666",category:"wybraneGeostanowiska"},{position:{lat:49.766944,lng:18.619167},title:"Sill pikrytu w Cieszynie - Boguszowicach",place:"Cieszyn, ul. Kręta",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9715",category:"wybraneGeostanowiska"},{position:{lat:49.681626,lng:19.196659},title:"Sille lamprofirów w dolinie Soły w Żywcu",place:"Żywiec, dolina Soły",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9650",category:"wybraneGeostanowiska"},{position:{lat:50.783333,lng:19.261389},title:"Uwał Koziniec w Srocku-Kusiętach",place:"Gmina Mstów",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=45",category:"wybraneGeostanowiska"},{position:{lat:49.584924,lng:19.301353},title:"Wodospad na potoku Sopotnia Wielka",place:"Gmina Jeleśnia",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1357",category:"wybraneGeostanowiska"},{position:{lat:50.332777,lng:19.26},title:"Wychodnia skał górnokarbońskich z faunistycznym poziomem morskim w Dąbrowie Górniczej",place:"Dąbrowa Górnicza, ul. Laski",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9210",category:"wybraneGeostanowiska"},{position:{lat:50.660786,lng:19.420603},title:"Wzgórze ostańcowe Na Bukowym w Trzebniowie",place:"Gmina Niegowa",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9589",category:"wybraneGeostanowiska"},{position:{lat:49.76775,lng:19.371577},title:"Zbójnickie Okno, Skałka na Zakocierzy",place:"Gmina Ślemień",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1386",category:"wybraneGeostanowiska"},{position:{lat:50.412421,lng:18.875813},title:"Ślady eksploatacji żeleźniaka brunatnego i galmanów na Górze Cipiorg w Tarnowskich Górach i Bytomiu",place:"Tarnowskie Góry - Bytom",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9635",category:"wybraneGeostanowiska"},{position:{lat:50.615278,lng:19.381667},title:"Kuesta jurajska w Żarkach",place:"Żarki - Jaworznik",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1614",category:"wybraneGeostanowiska"},{position:{lat:50.492889,lng:19.494361},title:"Źródła Warty w Kromołowie",place:"Zawiercie - Kromołów",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1816",category:"wybraneGeostanowiska"},{position:{lat:50.360806,lng:19.5195},title:"Pustynia Błędowska",place:"Błędów - Chechło",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=33",category:"wybraneGeostanowiska"},{position:{lat:49.643667,lng:19.055833},title:"Rezerwat przyrody Kuźnie na Górze Muronka",place:"Gmina Lipowa",www:"http://slaskie.travel/Poi/Pokaz/3849/1143/rezerwat-kuznie",category:"obszaryIObiektyChronione"},{position:{lat:49.747806,lng:19.304917},title:"Stanowisko dokumentacyjne Zamczysko na Ściszków Groniu",place:"Gmina Łękawica",www:"http://www.beskidmaly.pl/scieszkow-gron",category:"obszaryIObiektyChronione"},{position:{lat:49.706217,lng:18.825988},title:"Stanowisko dokumentacyjne Kamieniołom Skalica w Ustroniu",place:"Ustroń, ul. Nadrzeczna",www:"http://www.ustron.bip.info.pl/dokument.php?iddok=11944&str=119",category:"obszaryIObiektyChronione"},{position:{lat:50.314102,lng:19.293742},title:"Stanowisko dokumentacyjne Srocza Góra w Dąbrowie Górniczej, Geostanowisko",place:"Dąbrowa Górnicza, ul. Strzemieszycka",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9221",category:"obszaryIObiektyChronione"},{position:{lat:50.066333,lng:18.429833},title:"Stanowisko dokumentacyjne Skałka w Rydułtowach, Geostanowisko",place:"Rydułtowy, ul. Ofiar Terroru",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1687",category:"obszaryIObiektyChronione"},{position:{lat:50.148449,lng:18.879757},title:"Stanowisko dokumentacyjne Kamieniołom piaskowców karbońskich w Łaziskach, Geostanowisko",place:"Łaziska Średnie",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9212",category:"obszaryIObiektyChronione"},{position:{lat:50.675092,lng:19.415461},title:"Stanowisko dokumentacyjne Jaskinia Wiercica w Ostrężniku",place:"Gmina Niegowa",www:"http://jaskiniepolski.pgi.gov.pl/Details/Information/2519",category:"obszaryIObiektyChronione"},{position:{lat:50.4295,lng:18.782111},title:"Brama Gwarków w Zbrosławicach, Geostanowisko",place:"Gmina Zbrosławice",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9106",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.411972,lng:19.277611},title:"Pozostałości dawnej eksploatacji rud Pb-Ag-Zn na Trzebiesławskiej Górze, Geostanowisko",place:"Dąbrowa Górnicza",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10172",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.215836,lng:18.496614},title:"Hałdy po kopalniach rudy żelaza w Stanicy-Górniki, Geostanowisko",place:"Gmina Pilchowice",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9491",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.798056,lng:18.649722},title:"Pozostałości po eksploatacji rud żelaza - Zborowskie i Panoszów, Geostanowisko",place:"Gmina Ciasna",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=648",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.064214,lng:18.442596},title:"Hałda Szarlota w Rydułtowach, Geostanowisko",place:"Rydułtowy",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9330",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.569673,lng:19.6454},title:"Żelazna Dolina w Pradłach, Geostanowisko",place:"Gmina Kroczyce",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9390",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.475417,lng:19.334453},title:"Wyrobiska po eksploatacji węgla brunatnego w Porębie, Geostanowisko",place:"Gmina Poręba",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9487",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.071542,lng:18.711033},title:"Wieża wyciągowa po hucie żelaza Waleska w Palowicach",place:"Gmina Palowice",www:"http://m.peuk.fiiz.pl/poi/index/poi/3280208/page/1/obj/#page-poi-details-0",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.285453,lng:18.919147},title:"Wieże dawnej KWK Polska w Świętochłowicach",place:"Świętochłowice, ul. Wojska Polskiego 16D",www:"http://www.gornyslask.net.pl/t/swietochlowice-wieze-kopalni-polska/",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.510722,lng:18.988558},title:"Zatopiona Kopalnia Bibiela – Pasieki, Geostanowisko",place:"Miasteczko Śląskie - Pasieki",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9863",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:50.428753,lng:18.771628},title:"Śladami dawnego górnictwa Tarnowskich Gór",place:"Tarnowskie Góry",www:"http://rowerempotg.blogspot.com/2010/04/trasa-numer-1-sladami-dawnego-gornictwa.html",category:"sciezkiTematyczne"},{position:{lat:50.180084,lng:18.848824},title:"Wapienniki w Mikołowie-Mokre, Geostanowiska",place:"Mikołów-Mokre, ul. 15 Grudnia 1B",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1603",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:49.487597,lng:19.036351},title:"Źródła solankowe w Soli, Geostanowisko",place:"Gmina Rajcza",www:"http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9229",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:49.71978,lng:19.375388},title:"Ruiny pieca hutniczego w Ślemieniu",place:"Ślemień, ul. Spacerowa",www:"http://zwiedzajbeskidy.pl/index.php?option=com_k2&view=item&id=284:ruiny-pieca-w-slemieniu&Itemid=719",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:49.512249,lng:19.219902},title:"Pozostałości po hucie szkła w Złatnej",place:"Gmina Ujsoły",www:"http://zabytkitechniki.pl/Poi/Pokaz/15910/1939/ruiny-huty-szkla-w-zlatnej",category:"obiektyPrzemysloweIPoprzemyslowe"},{position:{lat:49.511874,lng:19.210448},title:"Źródło siarczane w dolinie Śmierdzącego Potoku",place:"Gmina Ujsoły",www:"http://zwiedzajbeskidy.pl/index.php?option=com_k2&view=item&id=648:zrodlo-siarkowe-zlatna&Itemid=719",category:"uzdrowiskaIObiektyUzdrowiskowe"},{position:{lat:50.679485,lng:19.212217},title:"Izba Pamięci Gminy Poraj",place:"Poraj, ul. Piłsudskiego 14",www:"www.gokporaj.pl",category:"muzeaGeologiczneIDinoparki"}],t={wybraneGeostanowiska:{name:"Wybrane geostanowiska",icon:"images/markers/fossils.png"},trasyPodziemne:{name:"Trasy podziemne",icon:"images/markers/cave-2.png"},muzeaGeologiczneIDinoparki:{name:"Muzea geologiczne, ośrodki edukacyjne i dinoparki",icon:"images/markers/museum_science.png"},obiektyPrzemysloweIPoprzemyslowe:{name:"Obiekty przemysłowe i poprzemysłowe",icon:"images/markers/museum_industry.png"},uzdrowiskaIObiektyUzdrowiskowe:{name:"Uzdrowiska i obiekty uzdrowiskowe",icon:"images/markers/spa.png"},obszaryIObiektyChronione:{name:"Obszary i obiekty chronione",icon:"images/markers/peak.png"},sciezkiTematyczne:{name:"Ścieżki tematyczne",icon:"images/markers/walkingtour.png"},inne:{name:"inne",icon:"images/markers/world.png"},geostanowiskaMiedzynarodowe:{name:"Geostanowiska międzynarodowe",icon:"images/markers/world_geostanowiska.png"}},w=new google.maps.StyledMapType([{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],{name:"Styled Map"}),l={center:{lat:50.277978,lng:19.020544},zoom:10,scrollwheel:!1,draggable:!0,mapTypeId:"terrain",minZoom:8,fullscreenControl:!0,zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},streetViewControl:!0,streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},mapTypeControl:!0,mapTypeControlOptions:{mapTypeIds:["roadmap","satellite","hybrid","terrain","styled_map"],style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},scaleControl:!0
},n=document.getElementById("map");a=new google.maps.Map(n,l),a.mapTypes.set("styled_map",w);var s=new google.maps.InfoWindow;for(o=0;o<i.length;o++)e=new google.maps.Marker({position:i[o].position,map:a,title:i[o].title,icon:t[i[o].category].icon}),google.maps.event.addListener(e,"click",function(e,o){return function(){s.setContent("<div class='markerDeskription'><p>"+i[o].title+"</p><p>"+i[o].place+"</p><a href="+i[o].www+">Więcej</a></div>"),s.open(a,e)}}(e,o))}
!function(e){var i=e("body"),t=e("#menu"),n=e("#secondNav"),a=e("#mainNav"),l=e("#geoSlaskNav"),o=document.getElementById("mainNav"),r=document.getElementById("geoSlaskNav"),s=e(".photos a"),d=e("header").height(),c=window.innerWidth;e(window).ready(function(){function i(e){return e.complete&&0!==e.naturalHeight}for(var t=e(".photos img"),n=e(".galleries img"),a=0;a<t.length;a++)i(t[a])&&e(t[a]).parent().parent().addClass("figuryUp");for(var l=0;l<n.length;l++)i(n[l])&&e(n[l]).parent().addClass("figuryUp");e(n).on("load",function(){for(var i=0;i<n.length;i++)e(this).parent().addClass("figuryUp")}),e(t).on("load",function(){for(var i=0;i<t.length;i++)e(this).parent().parent().addClass("figuryUp")})}),e(window).on("resize",function(){d=e("header").height();var i=window.innerWidth;(c<=768&&i>768||c<=1200&&i>1200)&&(o.style.display&&(e(l).slideUp(0),o.style.removeProperty("display")),r.style.display&&r.style.removeProperty("display"),e(t).hasClass("expanded")&&e(t).removeClass("expanded")),c=i}),e(window).on("scroll",function(){if(document.getElementById("map")){var i=e("#map")[0].scrollHeight,t=e(window).scrollTop(),n=i-d;t>n&&i?e("header").slideUp(500):e("header").slideDown(100)}}),t.on("click",function(){window.matchMedia("(max-width: 767px)").matches&&(e(a).slideToggle(200),e(l).slideUp(0)),e(this).hasClass("expanded")?e(this).removeClass("expanded"):e(this).addClass("expanded")}),n.on("click",function(){window.matchMedia("(max-width: 1199px)").matches&&e(l).slideToggle(150)}),e("#buttonUp").on("click",function(){e(i).scrollTop()>0&&e(i).stop().animate({scrollTop:0},500)}),e("#scrollToMap").on("click",function(){e("body").stop().animate({scrollTop:2e3},1e3)}),e(".categories").on("click",function(){e(".markedCategory").removeClass("markedCategory"),e(this).addClass("markedCategory");var i=e(this).data("category");"all"==i?(e(s).removeClass("figuryUp"),setTimeout(function(){e(s).removeClass("hidden"),setTimeout(function(){e(s).addClass("figuryUp")},100)},501)):(e(s).removeClass("figuryUp"),setTimeout(function(){e(s).removeClass("hidden").each(function(){if(e(this).data("category")!=i&&e(this).addClass("hidden"),e(this).data("category")==i){var t=this;setTimeout(function(){e(t).addClass("figuryUp")},100)}})},501))}),e(".head").on("click",function(){var i=e(this).next();e(".body").not(i).slideUp(400).parent().removeClass("border"),e(i).slideToggle(400),e(this).parent().toggleClass("border")}),e(".tabs li").on("click",function(){var i=e(this).attr("class");i=i.substring(0,11),e(".tabs li").removeClass("selectedTab"),e(this).addClass("selectedTab"),e(".structures").each(function(){e(this).attr("id")==i?e(this).slideDown(500):e(this).slideUp(500)})}),e(".galleries figure").on("click",function(){var i=e(this),t=e("<div class='fullScreenMode'></div>"),n=e(i).children("figcaption").children(".opis").text(),a=e(i).children("img").attr("src");a=a.substring(0,a.length-8),a+=".jpg";var l=e(i).children("figcaption").children(".authorAndDate").text(),o=e(i).children("figcaption").children(".moreText").html(),r=e("<figure id='figura'><img id='fullScreenImage'><figcaption id='fullScreenFigcaption'><h3 id='fullScreenOpis'></h3><p id='fullScreenMore'></p><p id='fullScreenAuthor'></p></figcaption><span class='prevnext prev'><img src='../images/strzalka_050.png'></span><span class='prevnext next'><img src='../images/strzalka_050.png'></span></figure>"),s=e("<div class='loadingPhoto'></div>");t.append(e("<button id='closeFullScreenMode'><img src='../images/x-bialy.png'></button>")),t.append(s),t.append(r),e("main").append(t);var d=e("#fullScreenImage");e(d).attr("src",a).on("load",function(){e(".loadingPhoto").hide(),e("#figura").addClass("up")}),e("#fullScreenOpis").text(n),e("#fullScreenMore").html(o),e("#fullScreenAuthor").text(l),e("#closeFullScreenMode").on("click",function(){e(".fullScreenMode").slideUp(500,function(){e(".fullScreenMode").remove()}),e(document).off("keydown")}),e(".prevnext").on("click",function(){e(".loadingPhoto").show(),i=e(this).hasClass("prev")?0!=e(i).prevAll("figure").length?e(i).prev():e(".galleries figure:last-of-type"):0!=e(i).nextAll("figure").length?e(i).next():e(".galleries figure:first-of-type");var t=e(i).children("img").attr("src");t=t.substring(0,t.length-8),t+=".jpg";var n=e(i).children("figcaption").children(".opis").text(),a=e(i).children("figcaption").children(".authorAndDate").text(),l=e(i).children("figcaption").children(".moreText").html();e(d).attr("src",t).on("load",function(){e("#fullScreenOpis").text(n),e("#fullScreenMore").html(l),e("#fullScreenAuthor").text(a),e(".loadingPhoto").hide()})}),e(document).on("keydown",function(i){var t=i.keyCode||i.which;37==t&&e(".prev").click(),39==t&&e(".next").click(),8!=t&&27!=t||(i.preventDefault(),e("#closeFullScreenMode").click())}),e(d).swipe({swipe:function(i,t){switch(t){case"left":e(".next").click();break;case"right":e(".prev").click()}}})})}(jQuery);