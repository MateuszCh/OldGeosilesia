/**
 * Created by Mateusz Chybiorz on 2016-12-11.
 */
var obiekty = [
    {
        position: {lat:50.810997, lng:19.100235},
        title: 'Muzeum Górnictwa Rud Żelaza',
        place: 'Częstochowa, Park im. S.Staszica',
        www: 'http://kopalnia.muzeumczestochowa.pl',
        category: "trasyPodziemne"
    },
    {
        position: {lat:50.574331, lng:19.522621},
        title: 'Ścieżka przyrodnicza na terenie rezerwatu przyrody Góra Zborów',
        place: 'Podlesice, Gmina Kroczyce',
        www: 'http://www.podlesice.org.pl/podlesice1/',
        category: 'sciezkiDydaktyczne'
    },
    {
        position: {lat:50.877535, lng:19.233106},
        title: 'Ścieżka dydaktyczna w kamieniołomie Lipówka ',
        place: 'Rudniki, ul .Dworcowa 15C',
        www: 'http://www.cemex.pl/kamieniolom-lipowka.aspx',
        category: 'sciezkiDydaktyczne'
    },
    {
        position: {lat:50.681461, lng:18.629606},
        title: 'Muzeum Paleontologiczne',
        place: 'Lisowice, ul. Mickiewicza 20',
        www: 'http://muzeum.lisowice.com/',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.757984, lng:19.268618},
        title: 'Ścieżka geoturystyczna w Górach Towarnych',
        place: 'Olsztyn, powiat częstochowski',
        www: 'http://jura.slaskie.travel/Trasy/Pokaz/8108/sciezka-geologiczna-w-krainie-bialych-skal/1247',
        category: 'sciezkiDydaktyczne'
    },
    {
        position: {lat:50.752308, lng:19.278467},
        title: 'Wirtualna ścieżka dydaktyczna Kamieniołom Kielniki',
        place: 'Olsztyn, powiat częstochowski',
        www: 'http://geoportal.pgi.gov.pl/css/virtual/kielniki/sciezka.swf',
        category: 'sciezkiDydaktyczne'
    },
    {
        position: {lat:50.227293, lng:19.274351},
        title: 'Ośrodek Edukacji Ekologiczno-Geologicznej GEOsfera',
        place: 'Jaworzno, Św. Wojciecha 100',
        www: 'https://www.facebook.com/geosfera/?ref=page_internal',
        category: 'wybraneGeostanowiska'
    },
    {
        position: {lat:50.319327, lng:19.184904},
        title: 'Kopalnia Ćwiczebna Muzeum Miejskiego „Sztygarka”',
        place: 'Dąbrowa Górnicza, ul. Górnicza',
        www: 'http://muzeum-dabrowa.pl/',
        category: 'trasyPodziemne'
    },
    {
        position: {lat:50.296432, lng:18.798901},
        title: 'Sztolnia Królowa Luiza – Strefa podziemna',
        place: 'Zabrze, ul. Sienkiewicza 43',
        www: 'http://www.sztolnialuiza.pl/index.php/park-12c-1',
        category: 'trasyPodziemne'
    },
    {
        position: {lat:50.296689, lng:18.806437},
        title: 'Sztolnia Królowa Luiza – Strefa naziemna (Szyb Carnall)',
        place: 'Zabrze, ul. Wolności 410',
        www: 'http://sztolnialuiza.pl/index.php/szyb-carnall2',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:50.425519, lng:18.849568},
        title: 'Zabytkowa Kopalnia Srebra',
        place: 'Tarnowskie Góry, ul. Szczęść Boże 81',
        www: 'http://www.kopalniasrebra.pl/kopalnia/kopalnia.php',
        category: 'trasyPodziemne'
    },
    {
        position: {lat:50.289459, lng:18.791420},
        title: 'Kopalnia Guido',
        place: 'Zabrze, 3 Maja 93',
        www: 'https://kopalniaguido.pl/index.php/pl-pl/',
        category: 'trasyPodziemne'
    },
    {
        position: {lat:50.314952, lng:18.741490},
        title: 'Szyb „Maciej”',
        place: 'Zabrze, ul. Srebrna 6',
        www: 'http://www.szybmaciej.pl/',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:50.427044, lng:18.807134},
        title: 'Sztolnia Czarnego Pstrąga',
        place: 'Tarnowskie Góry, ul. Śniadeckiego / Repecka',
        www: 'http://www.kopalniasrebra.pl/sztolnia/sztolnia.php',
        category: 'trasyPodziemne'
    },
    {
        position: {lat:50.402597, lng:18.859255},
        title: 'Dolomity Sportowa Dolina',
        place: 'Bytom - Sucha Góra, ul. Blachówka 94',
        www: 'http://www.dsd.pl/',
        category: 'wybraneGeostanowiska'
    },
    {
        position: {lat:49.464108, lng:19.152271},
        title: 'Geopark Glinka',
        place: 'Ujsoły, Glinka 4 ',
        www: 'http://www.geopark.com.pl/pl/',
        category: 'wybraneGeostanowiska'
    },
    {
        position: {lat:50.325843, lng:19.133729},
        title: 'Podziemia będzińskie',
        place: 'Będzin, ul. Małachowskiego / Góra Zamkowa',
        www: 'http://muzeum.bedzin.pl/podziemia-b%C4%99dzi%C5%84skie',
        category: 'trasyPodziemne'
    },
    {
        position: {lat:50.439148, lng:19.667091},
        title: 'Ośrodek edukacyjny ZPKWŚ ',
        place: 'Smoleń, Gmina Pilica',
        www: 'http://www.zpk.com.pl/index.php/osrodek-smolen',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.313082, lng:19.131317},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Będzin, ul. I. Krasickiego 25',
        www: 'http://www.zpk.com.pl/index.php/bedzin',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.734120, lng:18.886205},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Kalina, ul. Lompy 6',
        www: 'http://www.zpk.com.pl/index.php/osrodek-kalina',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.191491, lng:18.445949},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Rudy, ul. Raciborska 10 ',
        www: 'http://www.zpk.com.pl/index.php/osrodek-rudy',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:49.691166, lng:19.184952},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Żywiec, ul. Łączki 44 a',
        www: 'http://www.zpk.com.pl/index.php/osrodek-zywiec',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.268775, lng:19.143301},
        title: 'Sala ekspozycyjna Oddziału Górnośląskiego PIG-PIB',
        place: 'Sosnowiec, ul. Królowej Jadwigi 1',
        www: 'https://www.pgi.gov.pl/sosnowiec/wystawa.html',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.318136, lng:19.008677},
        title: 'Park Tradycji',
        place: 'Siemianowice, ul. Orzeszkowej 12',
        www: 'http://siemck.pl/o-parku-tradycji',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:50.349076, lng:18.925711},
        title: 'Muzeum Górnośląskie',
        place: 'Bytom, pl. Jana III Sobieskiego 2 ',
        www: 'http://muzeum.bytom.pl/',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.394799, lng:18.676303},
        title: 'Zabytkowa Stacja Wodociągowa "Zawada"',
        place: 'Karchowice, ul. Bytomska 6',
        www: 'http://www.gpw-zawada.pl/',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:50.298939, lng:19.133810},
        title: 'Muzeum Wydziału Nauk o Ziemi',
        place: 'Sosnowiec, Będzińska 60',
        www: 'http://www.muzeum.wnoz.us.edu.pl/',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.282372, lng:18.995629},
        title: 'Kotlina Dinozaurów – Śląski Ogród Zoologiczny',
        place: 'Chorzów, Promenada Gen. Jerzego Ziętka 7',
        www: 'http://zoo.silesia.pl/kotlina-dinozaurow',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.315801, lng:19.029369},
        title: 'Park dinozaurów',
        place: 'Siemianowice Śl., ul. Spacerowa',
        www: 'https://www.google.pl/search?q=dinozaury+siemianowice+slaskie&oq=dinozaury+siem&aqs=chrome.1.69i57j0.9730j0j4&sourceid=chrome&ie=UTF-8#q=park+dinozaur%C3%B3w+siemianowice,+siemianowice+%C5%9Bl%C4%85skie',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:49.720208, lng:18.825733},
        title: 'Uzdrowisko Ustroń – pijalnia wód i fontanna solankowa',
        place: 'Ustroń, ul. Sanatoryjna',
        www: 'http://www.uzdrowisko-ustron.pl/O-uzdrowisku/Atrakcje-Uzdrowiska-i-okolicy.html',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:49.937325, lng:18.980228},
        title: 'Uzdrowisko Goczałkowice, deptak Zdrojowy',
        place: 'Goczałkowice, ul. Uzdrowiskowa',
        www: 'http://www.info.goczalkowicezdroj.pl/warto-zobaczyc/zabytki/',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:49.813844, lng:18.719806},
        title: 'Tężnia solankowa',
        place: 'Dębowiec, ul. Katowicka / Szkolna',
        www: 'http://debowiec.cieszyn.pl/teznia-solankowa.html',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:50.055238, lng:18.478153},
        title: 'Tężnia solankowa',
        place: 'Radlin, ul. Wypandów',
        www: 'https://teznia.radlin.pl/',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:49.792180, lng:18.948498},
        title: 'Fontana solankowa',
        place: 'Jaworze, ul. Zdrojowa / Wapienicka',
        www: 'https://jaworze.pl/category/dla-turystow/',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:49.793155, lng:18.954901},
        title: 'Tężnia solankowa',
        place: 'Jaworze, ul. Koralowa',
        www: 'http://www.villabarbara.pl/teznia-solankowa-jaworze',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:49.915367, lng:18.764967},
        title: 'Fontana solankowa',
        place: 'Strumień, ul. Łuczkiewicza',
        www: 'http://www.archiwum.strumien.com/modules.php?name=Content&pa=showpage&pid=123',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:49.950263, lng:18.566710},
        title: 'Park Zdrojowy',
        place: 'Jastrzębie Zdrój, ul. Witczaka 5',
        www: 'http://jastrzebiezdroj.naszemiasto.pl/tag/inhalatorium-solankowe-jastrzebie.html',
        category: 'uzdrowiskaIObiektyUzdrowiskowe'
    },
    {
        position: {lat:50.007800, lng:18.456769},
        title: 'Górnicza Sztolnia Ćwiczebna',
        place: 'Wodzisław Śl., ul. Gałczyńskiego 1',
        www: 'http://pckziu.wodzislaw.pl/index.php/sztolnia/',
        category: 'trasyPodziemne'
    },
    {
        position: {lat:50.095908, lng:18.541600},
        title: 'Muzeum w Rybniku',
        place: 'Rybnik, Rynek 18',
        www: 'http://www.muzeum.rybnik.pl/',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.080939, lng:18.188644},
        title: 'Śląskie Obserwatorium Geofizyczne PAN',
        place: 'Racibórz, ul.Chłopska 1',
        www: 'http://www.raciborz.com.pl/art6723.html',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:49.715843, lng:18.817493},
        title: 'Muzeum Ustrońskie',
        place: 'Ustroń, ul. Hutnicza 3',
        www: 'http://www.muzeum.ustron.pl/',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.297939, lng:18.967105},
        title: 'Szyb Prezydent',
        place: 'Chorzów, ul. Piotra Skargi 34 a-d',
        www: 'http://sztygarka.pl/',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:50.308657, lng:19.063447},
        title: 'Galeria Sztuki Współczesnej Elektrownia',
        place: 'Czeladź, ul. Dehnelów 45',
        www: 'http://www.galeria-elektrownia.czeladz.pl/',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:50.273376, lng:18.860002},
        title: 'Kolonia Robotnicza Ficinus',
        place: 'Ruda Śląska,  ul. Kubiny',
        www: 'http://www.ficinus.rudaslaska.pl/ ',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:50.290718, lng:18.674892},
        title: 'Muzeum Geologii Złóż',
        place: 'Gliwice, ul. Akademicka 2',
        www: 'https://www.polsl.pl/Wydzialy/RG/rg7/Strony/MuzeumGeologiiZloz.aspx',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:49.767549, lng:18.909748},
        title: 'Szlak szklany „ Jaworze Nałęże – ranczo Błatnia”',
        place: 'Jaworze, Dolina Jasionki',
        www: 'http://www.szklanym-szlakiem.jaworze.pl/strona_glowna',
        category: 'sciezkiDydaktyczne'
    },
    {
        position: {lat:50.318384, lng:19.183715},
        title: 'Muzeum Miejskie „Sztygarka”',
        place: 'Dąbrowa Górnicza, ul. Legionów Polskich 69',
        www: 'http://muzeum-dabrowa.pl/',
        category: 'muzeaGeologiczneIDinoparki'
    },
    {
        position: {lat:50.263505, lng:19.034892},
        title: 'Muzeum Śląskie',
        place: 'Katowice, ul. Dobrowolskiego 1',
        www: 'http://www.muzeumslaskie.pl/',
        category: 'obiektyPrzemysloweIPoprzemyslowe'
    },
    {
        position: {lat:49.619821, lng:18.986288},
        title: 'Kaskady Rodła w Rezerwacie Wisła',
        place: 'Wisła, Biała Wisełka',
        www: 'https://pl.wikipedia.org/wiki/Kaskady_Rod%C5%82a',
        category: 'obszaryIObiektyChronione'
    },
    {
        position: {lat:50.444508, lng:18.855449},
        title: 'Gwarki tarnogórskie',
        place: 'Tarnowskie Góry',
        www: 'http://www.gwarki.tg.net.pl/',
        category: 'inne'
    },
    {
        position: {lat:50.264264, lng:19.023591},
        title: 'Industriada',
        place: 'Województwo Śląskie',
        www: 'http://www.industriada.pl/',
        category: 'inne'
    }
];

var icons   =   {
    wybraneGeostanowiska:    {
        name: "Wybrane geostanowiska",
        icon: "images/markers/fossils.png"
    },
    trasyPodziemne:  {
        name: "Trasy podziemne",
        icon: "images/markers/cave-2.png"
    },
    muzeaGeologiczneIDinoparki:    {
        name: "Muzea geologiczne, ośrodki edukacyjne i dinoparki",
        icon: "images/markers/museum_science.png"
    },
    obiektyPrzemysloweIPoprzemyslowe:   {
        name: "Obiekty przemysłowe i poprzemysłowe",
        icon: "images/markers/museum_industry.png"
    },
    uzdrowiskaIObiektyUzdrowiskowe: {
        name: "Uzdrowiska i obiekty uzdrowiskowe",
        icon: "images/markers/spa.png"
    },
    obszaryIObiektyChronione:   {
        name: "Obszary i obiekty chronione",
        icon: "images/markers/peak.png"
    },
    sciezkiDydaktyczne: {
        name: "Ścieżki dydaktyczne",
        icon: "images/markers/walkingtour.png"
    },
    inne:   {
        name: "inne",
        icon: "images/markers/world.png"
    }
};