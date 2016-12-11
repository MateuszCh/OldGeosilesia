/**
 * Created by Mateusz Chybiorz on 2016-12-11.
 */
var obiekty = [
    {
        position: {lat:50.810997, lng:19.100235},
        title: 'Muzeum Górnictwa Rud Żelaza',
        place: 'Częstochowa, Park im. S.Staszica',
        www: 'http://kopalnia.muzeumczestochowa.pl',
        category: "trasy podziemne"
    },
    {
        position: {lat:50.573488, lng:19.522357},
        title: 'Ścieżka przyrodnicza na terenie rezerwatu przyrody Góra Zborów',
        place: 'Podlesice, Gmina Kroczyce',
        www: 'http://www.podlesice.org.pl/podlesice1/',
        category: 'ścieżki dydaktyczne'
    },
    {
        position: {lat:50.877867, lng:19.233780},
        title: 'Ścieżka dydaktyczna w kamieniołomie Lipówka ',
        place: 'Rudniki, ul .Dworcowa 15C',
        www: 'http://www.cemex.pl/kamieniolom-lipowka.aspx',
        category: 'ścieżki dydaktyczne'
    },
    {
        position: {lat:50.681461, lng:18.629606},
        title: 'Muzeum Paleontologiczne',
        place: 'Lisowice, ul. Mickiewicza',
        www: 'http://muzeum.lisowice.com/',
        category: 'muzea geologiczne i dinoparki'
    },
    {
        position: {lat:50.772891, lng:19.240594},
        title: 'Ścieżka geoturystyczna w Górach Towarnych „W krainie białych skał”',
        place: 'Olsztyn, powiat częstochowski',
        www: 'http://jura.slaskie.travel/Trasy/Pokaz/8108/sciezka-geologiczna-w-krainie-bialych-skal/1247',
        category: 'ścieżki dydaktyczne'
    },
    {
        position: {lat:50.752401, lng:19.278103},
        title: 'Wirtualna ścieżka dydaktyczna Kamieniołom Kielniki „Na dnie jurajskiego morza”',
        place: 'Olsztyn, powiat częstochowski',
        www: 'http://geoportal.pgi.gov.pl/css/virtual/kielniki/sciezka.swf',
        category: 'ścieżki dydaktyczne'
    },
    {
        position: {lat:50.227293, lng:19.274351},
        title: 'Ośrodek Edukacji Ekologiczno-Geologicznej GEOsfera',
        place: 'Jaworzno, Św. Wojciecha 100',
        www: 'https://www.facebook.com/geosfera/?ref=page_internal',
        category: 'wybrane geostanowiska'
    },
    {
        position: {lat:50.319327, lng:19.184904},
        title: 'Kopalnia Ćwiczebna Muzeum Miejskiego „Sztygarka”',
        place: 'Dąbrowa Górnicza, ul. Górnicza',
        www: 'http://muzeum-dabrowa.pl/',
        category: 'trasy podziemne'
    },
    {
        position: {lat:50.296432, lng:18.798901},
        title: 'Sztolnia Królowa Luiza – Strefa podziemna',
        place: 'Zabrze, ul. Sienkiewicza 43 (wjazd od ul. Mochnackiego) ',
        www: 'http://www.sztolnialuiza.pl/index.php/park-12c-1',
        category: 'trasy podziemne'
    },
    {
        position: {lat:50.296689, lng:18.806437},
        title: 'Sztolnia Królowa Luiza – Strefa naziemna (Szyb Carnall)',
        place: 'Zabrze, ul. Wolności 410',
        www: 'http://sztolnialuiza.pl/index.php/szyb-carnall2',
        category: 'obiekty górnicze i poprzemysłowe'
    },
    {
        position: {lat:50.425519, lng:18.849568},
        title: 'Zabytkowa Kopalnia Srebra',
        place: 'Tarnowskie Góry, ul. Szczęść Boże 81',
        www: 'http://www.kopalniasrebra.pl/kopalnia/kopalnia.php',
        category: 'trasy podziemne'
    },
    {
        position: {lat:50.289459, lng:18.791420},
        title: 'Kopalnia Guido',
        place: 'Zabrze, 3 Maja 93',
        www: 'https://kopalniaguido.pl/index.php/pl-pl/',
        category: 'trasy podziemne'
    },
    {
        position: {lat:50.314952, lng:18.741490},
        title: 'Szyb „Maciej”',
        place: 'Zabrze, ul. Srebrna 6',
        www: 'http://www.szybmaciej.pl/',
        category: 'obiekty przemysłowe i poprzemysłowe'
    },
    {
        position: {lat:50.427044, lng:18.807134},
        title: 'Sztolnia Czarnego Pstrąga',
        place: 'Tarnowskie Góry, ul. Śniadeckiego / Repecka',
        www: 'http://www.kopalniasrebra.pl/sztolnia/sztolnia.php',
        category: 'trasy podziemne'
    },
    {
        position: {lat:50.402597, lng:18.859255},
        title: 'Dolomity Sportowa Dolina',
        place: 'Bytom - Sucha Góra, ul. Blachówka 94',
        www: 'http://www.dsd.pl/',
        category: 'wybrane geostanowiska'
    },
    {
        position: {lat:49.464108, lng:19.152271},
        title: 'Geopark Glinka',
        place: 'Ujsoły, Glinka 4 ',
        www: 'http://www.geopark.com.pl/pl/',
        category: 'wybrane geostanowiska'
    },
    {
        position: {lat:50.327134, lng:19.129380},
        title: 'Podziemia będzińskie',
        place: 'Będzin, ul. Małachowskiego / Góra Zamkowa',
        www: 'http://muzeum.bedzin.pl/podziemia-b%C4%99dzi%C5%84skie',
        category: 'trasy podziemne'
    },
    {
        position: {lat:50.438519, lng:19.669850},
        title: 'Ośrodek edukacyjny ZPKWŚ ',
        place: 'Smoleń, Gmina Pilica',
        www: 'http://www.zpk.com.pl/index.php/osrodek-smolen',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.313082, lng:19.131317},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Będzin, ul. I. Krasickiego 25',
        www: 'http://www.zpk.com.pl/index.php/bedzin',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.734120, lng:18.886205},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Kalina, ul. Lompy 6',
        www: 'http://www.zpk.com.pl/index.php/osrodek-kalina',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.191491, lng:18.445949},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Rudy, ul. Raciborska 10 ',
        www: 'http://www.zpk.com.pl/index.php/osrodek-rudy',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:49.691166, lng:19.184952},
        title: 'Ośrodek edukacyjny ZPKWŚ',
        place: 'Żywiec, ul. Łączki 44 a',
        www: 'http://www.zpk.com.pl/index.php/osrodek-zywiec',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.268775, lng:19.143301},
        title: 'Sala ekspozycyjna Oddziału Górnośląskiego PIG-PIB',
        place: 'Sosnowiec, ul. Królowej Jadwigi 1',
        www: 'https://www.pgi.gov.pl/sosnowiec/wystawa.html',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.318136, lng:19.008677},
        title: 'Park Tradycji',
        place: 'Siemianowice, ul. Orzeszkowej 12',
        www: 'http://siemck.pl/o-parku-tradycji',
        category: 'obiekt przemysłowe i poprzemysłowe'
    },
    {
        position: {lat:50.349076, lng:18.925711},
        title: 'Muzeum Górnośląskie',
        place: 'Bytom, pl. Jana III Sobieskiego 2 ',
        www: 'http://muzeum.bytom.pl/',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.394799, lng:18.676303},
        title: 'Zabytkowa Stacja Wodociągowa "Zawada"',
        place: 'Karchowice, ul. Bytomska 6',
        www: 'http://www.gpw-zawada.pl/',
        category: 'obiekty przemysłowe i poprzemysłowe '
    },
    {
        position: {lat:50.298939, lng:19.133810},
        title: 'Muzeum Wydziału Nauk o Ziemi',
        place: 'Sosnowiec, Będzińska 60',
        www: 'http://www.muzeum.wnoz.us.edu.pl/',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.282372, lng:18.995629},
        title: 'Kotlina Dinozaurów – Śląski Ogród Zoologiczny',
        place: 'Chorzów, Promenada Gen. Jerzego Ziętka 7',
        www: 'http://zoo.silesia.pl/kotlina-dinozaurow',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.315801, lng:19.029369},
        title: 'Dinopark',
        place: 'Siemianowice Śl., ul. Spacerowa',
        www: 'https://www.google.pl/search?q=dinozaury+siemianowice+slaskie&oq=dinozaury+siem&aqs=chrome.1.69i57j0.9730j0j4&sourceid=chrome&ie=UTF-8#q=park+dinozaur%C3%B3w+siemianowice,+siemianowice+%C5%9Bl%C4%85skie',
        category: 'muzea geologiczne, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:49.724316, lng:8.825733},
        title: 'Uzdrowisko Ustroń – pijalnia wód i fontanna solankowa',
        place: 'Ustroń, ul. Sanatoryjna',
        www: 'http://www.uzdrowisko-ustron.pl/O-uzdrowisku/Atrakcje-Uzdrowiska-i-okolicy.html',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:49.941784, lng:18.976866},
        title: 'Uzdrowisko Goczałkowice, deptak Zdrojowy',
        place: 'Goczałkowice, ul. Uzdrowiskowa',
        www: 'http://www.info.goczalkowicezdroj.pl/warto-zobaczyc/zabytki/',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:49.813844, lng:18.719806},
        title: 'Tężnia solankowa',
        place: 'Dębowiec, ul. Katowicka / Szkolna',
        www: 'http://debowiec.cieszyn.pl/teznia-solankowa.html',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:50.055238, lng:18.478153},
        title: 'Tężnia',
        place: 'Radlin, ul. Wypandów',
        www: 'https://teznia.radlin.pl/',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:49.792180, lng:18.948498},
        title: 'Fontana solankowa',
        place: 'Jaworze, ul. Zdrojowa / Wapienicka',
        www: 'https://jaworze.pl/category/dla-turystow/',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:49.793155, lng:18.954901},
        title: 'Tężnia solankowa',
        place: 'Jaworze, ul. Koralowa',
        www: 'http://www.villabarbara.pl/teznia-solankowa-jaworze',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:49.915367, lng:18.764967},
        title: 'Fontana solankowa',
        place: 'Strumień, ul. Łuczkiewicza',
        www: 'http://www.archiwum.strumien.com/modules.php?name=Content&pa=showpage&pid=123',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:49.950263, lng:18.566710},
        title: 'Park Zdrojowy',
        place: 'Jastrzębie Zdrój, ul. Witczaka',
        www: 'http://jastrzebiezdroj.naszemiasto.pl/tag/inhalatorium-solankowe-jastrzebie.html',
        category: 'uzdrowiska i obiekty uzdrowiskowe'
    },
    {
        position: {lat:50.007800, lng:18.456769},
        title: 'Górnicza Sztolnia Ćwiczebna',
        place: 'Wodzisław Śl., ul. Gałczyńskiego 1',
        www: 'http://pckziu.wodzislaw.pl/index.php/sztolnia/',
        category: 'trasy podziemne'
    },
    {
        position: {lat:50.095908, lng:18.541600},
        title: 'Muzeum w Rybniku',
        place: 'Rybnik, Rynek 18',
        www: 'http://www.muzeum.rybnik.pl/',
        category: 'muzea, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.080939, lng:18.188644},
        title: 'Śląskie Obserwatorium Geofizyczne PAN',
        place: 'Racibórz, ul.Chłopska 1',
        www: 'http://www.raciborz.com.pl/art6723.html',
        category: 'muzea, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:49.715843, lng:18.817493},
        title: 'Muzeum Ustrońskie',
        place: 'Ustroń, ul. Hutnicza 3',
        www: 'http://www.muzeum.ustron.pl/',
        category: 'muzea, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:50.297939, lng:18.967105},
        title: 'Szyb Prezydent',
        place: 'Chorzów, ul. Piotra Skargi 34 a-d',
        www: 'http://sztygarka.pl/',
        category: 'obiekty przemysłowe i poprzemysłowe'
    },
    {
        position: {lat:50.308657, lng:19.063447},
        title: 'Galeria Sztuki Współczesnej Elektrownia',
        place: 'Czeladź, ul. Dehnelów 45',
        www: 'http://www.galeria-elektrownia.czeladz.pl/',
        category: 'obiekty przemysłowe i poprzemysłowe'
    },
    {
        position: {lat:50.273376, lng:18.860002},
        title: 'Kolonia Robotnicza Ficinus',
        place: 'Ruda Śląska,  ul. Kubiny',
        www: 'http://www.ficinus.rudaslaska.pl/ ',
        category: 'obiekty przemysłowe i poprzemysłowe'
    },
    {
        position: {lat:50.290718, lng:18.674892},
        title: 'Muzeum Geologii Złóż',
        place: 'Gliwice, ul. Akademicka 2',
        www: 'https://www.polsl.pl/Wydzialy/RG/rg7/Strony/MuzeumGeologiiZloz.aspx',
        category: 'muzea, ośrodki edukacyjne i dinoparki'
    },
    {
        position: {lat:49.746407, lng:18.938818},
        title: 'Szlak szklany „ Jaworze Nałęże – ranczo Błatnia”',
        place: 'Jaworze, Dolina Jasionki',
        www: 'http://www.szklanym-szlakiem.jaworze.pl/strona_glowna',
        category: 'ścieżki dydaktyczne'
    },
    {
        position: {lat:50.318384, lng:19.183715},
        title: 'Muzeum Miejskie „Sztygarka”',
        place: 'Dąbrowa Górnicza, ul. Legionów Polskich 69',
        www: 'http://muzeum-dabrowa.pl/',
        category: 'muzea, ośrodki edukacyjne i dinoparki'
    }
];