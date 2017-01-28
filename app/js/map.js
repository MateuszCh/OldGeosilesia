/**
 * Created by Mateusz Chybiorz on 2016-12-11.
 */
function initMap() {
    //object of markers for map
    var obiekty = [
        {
            position: {lat:50.810997, lng:19.100235},
            title: 'Muzeum Górnictwa Rud Żelaza w Częstochowie',
            place: 'Częstochowa, Park im. S.Staszica',
            www: 'http://kopalnia.muzeumczestochowa.pl',
            category: "trasyPodziemne"
        },
        {
            position: {lat:50.574331, lng:19.522621},
            title: 'Ścieżka przyrodnicza na terenie rezerwatu przyrody Góra Zborów, Geostanowiska',
            place: 'Gmina Kroczyce',
            www: 'http://www.podlesice.org.pl/podlesice1/',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.575626, lng:19.524289},
            title: 'Jaskinia Głęboka w rezerwacie przyrody Góra Zborów',
            place: 'Podlesice, Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=171',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.877535, lng:19.233106},
            title: 'Ścieżka dydaktyczna w kamieniołomie Lipówka, Geostanowisko',
            place: 'Rudniki, ul .Dworcowa',
            www: 'http://www.cemex.pl/kamieniolom-lipowka.aspx',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.681461, lng:18.629606},
            title: 'Muzeum Paleontologiczne w Lisowicach',
            place: 'Lisowice, ul. Mickiewicza 20',
            www: 'http://muzeum.lisowice.com/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:49.604436, lng:19.118363},
            title: 'Wirtualne muzeum Huty żelaza w Węgierskiej Górce',
            place: 'Węgierska Górka',
            www: 'http://www.historia.metalpol.com/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.757984, lng:19.268618},
            title: 'Ścieżka geoturystyczna w Górach Towarnych, Geostanowiska',
            place: 'Gmina Olsztyn',
            www: 'http://jura.slaskie.travel/Trasy/Pokaz/8108/sciezka-geologiczna-w-krainie-bialych-skal/1247',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.752308, lng:19.278467},
            title: 'Wirtualna ścieżka dydaktyczna Kamieniołom Kielniki, Geostanowiska',
            place: 'Olsztyn',
            www: 'http://geoportal.pgi.gov.pl/css/virtual/kielniki/sciezka.swf',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.227293, lng:19.274351},
            title: 'Ośrodek Edukacji Ekologiczno-Geologicznej GEOsfera w Jaworznie',
            place: 'Jaworzno, Św. Wojciecha 100',
            www: 'https://www.facebook.com/geosfera/?ref=page_internal',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.319327, lng:19.184904},
            title: 'Kopalnia Ćwiczebna w Dąbrowie Górniczej, Geostanowisko',
            place: 'Dąbrowa Górnicza, ul. Górnicza',
            www: 'http://muzeum-dabrowa.pl/',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.296432, lng:18.798901},
            title: 'Sztolnia Królowa Luiza w Zabrzu – Strefa podziemna, Geostanowisko',
            place: 'Zabrze, ul. Sienkiewicza 43 (wjazd od ul. Mochnackiego)',
            www: 'http://www.sztolnialuiza.pl/index.php/park-12c-1',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.296689, lng:18.806437},
            title: 'Sztolnia Królowa Luiza w Zabrzu – Strefa naziemna (Szyb Carnall), Geostanowisko',
            place: 'Zabrze, ul. Wolności 410',
            www: 'http://sztolnialuiza.pl/index.php/szyb-carnall2',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.425519, lng:18.849568},
            title: 'Zabytkowa Kopalnia Srebra w Tarnowskich Górach, Geostanowisko',
            place: 'Tarnowskie Góry, ul. Szczęść Boże 81',
            www: 'http://www.kopalniasrebra.pl/kopalnia/kopalnia.php',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.289459, lng:18.791420},
            title: 'Kopalnia Guido w Zabrzu, Geostanowisko',
            place: 'Zabrze, 3 Maja 93',
            www: 'https://kopalniaguido.pl/index.php/pl-pl/',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.314952, lng:18.741490},
            title: 'Szyb „Maciej” w Zabrzu',
            place: 'Zabrze, ul. Srebrna 6',
            www: 'http://www.szybmaciej.pl/',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.427044, lng:18.807134},
            title: 'Sztolnia Czarnego Pstrąga w Tarnowskich Górach, Geostanowisko',
            place: 'Tarnowskie Góry, ul. Śniadeckiego / Repecka',
            www: 'http://www.kopalniasrebra.pl/sztolnia/sztolnia.php',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.402597, lng:18.859255},
            title: 'Stanowisko dokumentacyjne Blachówka w Bytomiu, Geostanowisko',
            place: 'Bytom - Sucha Góra, ul. Blachówka 94',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10446',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:49.464108, lng:19.152271},
            title: 'Geopark Glinka - Ujsoły',
            place: 'Ujsoły, Glinka 4 ',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=7350',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.325843, lng:19.133729},
            title: 'Podziemia będzińskie w Górze Zamkowej, Geostanowisko',
            place: 'Będzin, ul. Małachowskiego',
            www: 'http://muzeum.bedzin.pl/podziemia-b%C4%99dzi%C5%84skie',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.439148, lng:19.667091},
            title: 'Ośrodek edukacyjny ZPKWŚ w Smoleniu',
            place: 'Smoleń, Gmina Pilica',
            www: 'http://www.zpk.com.pl/index.php/osrodek-smolen',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.313082, lng:19.131317},
            title: 'Ośrodek edukacyjny ZPKWŚ w Będzinie',
            place: 'Będzin, ul. I. Krasickiego 25',
            www: 'http://www.zpk.com.pl/index.php/bedzin',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.734120, lng:18.886205},
            title: 'Ośrodek edukacyjny ZPKWŚ w Kalinie',
            place: 'Kalina, ul. Lompy 6',
            www: 'http://www.zpk.com.pl/index.php/osrodek-kalina',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.191491, lng:18.445949},
            title: 'Ośrodek edukacyjny ZPKWŚ w Rudach',
            place: 'Rudy, ul. Raciborska 10 ',
            www: 'http://www.zpk.com.pl/index.php/osrodek-rudy',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:49.691166, lng:19.184952},
            title: 'Ośrodek edukacyjny ZPKWŚ w Żywcu',
            place: 'Żywiec, ul. Łączki 44 a',
            www: 'http://www.zpk.com.pl/index.php/osrodek-zywiec',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.268775, lng:19.143301},
            title: 'Sala ekspozycyjna Oddziału Górnośląskiego PIG-PIB w Sosnowcu',
            place: 'Sosnowiec, ul. Królowej Jadwigi 1',
            www: 'https://www.pgi.gov.pl/sosnowiec/wystawa.html',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.318136, lng:19.008677},
            title: 'Park Tradycji w Siemianowicach',
            place: 'Siemianowice, ul. Orzeszkowej 12',
            www: 'http://siemck.pl/o-parku-tradycji',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.349076, lng:18.925711},
            title: 'Muzeum Górnośląskie w Bytomiu',
            place: 'Bytom, pl. Jana III Sobieskiego 2 ',
            www: 'http://muzeum.bytom.pl/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.394799, lng:18.676303},
            title: 'Zabytkowa Stacja Wodociągowa Zawada w Karchowicach',
            place: 'Karchowice, ul. Bytomska 6',
            www: 'http://www.gpw-zawada.pl/',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.298939, lng:19.133810},
            title: 'Muzeum Wydziału Nauk o Ziemi w Sosnowcu',
            place: 'Sosnowiec, Będzińska 60',
            www: 'http://www.muzeum.wnoz.us.edu.pl/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.282372, lng:18.995629},
            title: 'Kotlina Dinozaurów w Chorzowie, Geostanowisko',
            place: 'Chorzów, Promenada Gen. Jerzego Ziętka 7',
            www: 'http://zoo.silesia.pl/kotlina-dinozaurow',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.315801, lng:19.029369},
            title: 'Park dinozaurów w Siemianowicach',
            place: 'Siemianowice Śl., ul. Spacerowa',
            www: 'https://www.google.pl/search?q=dinozaury+siemianowice+slaskie&oq=dinozaury+siem&aqs=chrome.1.69i57j0.9730j0j4&sourceid=chrome&ie=UTF-8#q=park+dinozaur%C3%B3w+siemianowice,+siemianowice+%C5%9Bl%C4%85skie',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:49.720208, lng:18.825733},
            title: 'Uzdrowisko Ustroń – źródło Karola, pijalnia wód i fontanna solankowa, Geostanowisko',
            place: 'Ustroń, ul. Sanatoryjna',
            www: 'http://www.uzdrowisko-ustron.pl/O-uzdrowisku/Atrakcje-Uzdrowiska-i-okolicy.html',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:49.937325, lng:18.980228},
            title: 'Uzdrowisko Goczałkowice',
            place: 'Goczałkowice, ul. Uzdrowiskowa',
            www: 'http://www.info.goczalkowicezdroj.pl/warto-zobaczyc/zabytki/',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:49.813844, lng:18.719806},
            title: 'Tężnia solankowa w Dębowcu',
            place: 'Dębowiec, ul. Katowicka / Szkolna',
            www: 'http://debowiec.cieszyn.pl/teznia-solankowa.html',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:50.055238, lng:18.478153},
            title: 'Tężnia solankowa w Radlinie',
            place: 'Radlin, ul. Wypandów',
            www: 'https://teznia.radlin.pl/',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:49.792180, lng:18.948498},
            title: 'Fontana solankowa w Jaworzu',
            place: 'Jaworze, ul. Zdrojowa / Wapienicka',
            www: 'https://jaworze.pl/category/dla-turystow/',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:49.793155, lng:18.954901},
            title: 'Tężnia solankowa w Jaworzu',
            place: 'Jaworze, ul. Koralowa',
            www: 'http://www.villabarbara.pl/teznia-solankowa-jaworze',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:49.915367, lng:18.764967},
            title: 'Fontana solankowa w Strumieniu',
            place: 'Strumień, ul. Łuczkiewicza',
            www: 'http://www.archiwum.strumien.com/modules.php?name=Content&pa=showpage&pid=123',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:49.950172, lng:18.567223},
            title: 'Park Zdrojowy w Jastrzębiu Zdroju',
            place: 'Jastrzębie Zdrój, ul. Witczaka 5',
            www: 'http://jastrzebiezdroj.naszemiasto.pl/tag/inhalatorium-solankowe-jastrzebie.html',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:50.007800, lng:18.456769},
            title: 'Górnicza Sztolnia Ćwiczebna w Wodzisławiu Śl.',
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
            title: 'Śląskie Obserwatorium Geofizyczne PAN w Raciborzu',
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
            title: 'Szyb Prezydent w Chorzowie',
            place: 'Chorzów, ul. Piotra Skargi 34 a-d',
            www: 'http://sztygarka.pl/',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.308657, lng:19.063447},
            title: 'Elektrownia dawnej KWK Saturn w Czeladzi',
            place: 'Czeladź, ul. Dehnelów 45',
            www: 'http://www.galeria-elektrownia.czeladz.pl/',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.273376, lng:18.860002},
            title: 'Kolonia Robotnicza Ficinus w Rudzie Śl.',
            place: 'Ruda Śląska,  ul. Kubiny',
            www: 'http://www.ficinus.rudaslaska.pl/ ',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.290718, lng:18.674892},
            title: 'Muzeum Geologii Złóż Wydziału Górnictwa i Geologii Politechniki Śląskiej w Gliwicach',
            place: 'Gliwice, ul. Akademicka 2',
            www: 'https://www.polsl.pl/Wydzialy/RG/rg7/Strony/MuzeumGeologiiZloz.aspx',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:49.767549, lng:18.909748},
            title: 'Szlak szklany Jaworze Nałęże – ranczo Błatnia',
            place: 'Jaworze, Dolina Jasionki',
            www: 'http://www.szklanym-szlakiem.jaworze.pl/strona_glowna',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.318384, lng:19.183715},
            title: 'Muzeum Miejskie Sztygarka w Dąbrowie Górniczej',
            place: 'Dąbrowa Górnicza, ul. Legionów Polskich 69',
            www: 'http://muzeum-dabrowa.pl/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.263505, lng:19.034892},
            title: 'Muzeum Śląskie na terenie dawnej KWK Katowice',
            place: 'Katowice, ul. Dobrowolskiego 1',
            www: 'http://www.muzeumslaskie.pl/',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:49.619821, lng:18.986288},
            title: 'Kaskady Rodła u źródeł Wisły',
            place: 'Wisła, Biała Wisełka',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1409',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.444508, lng:18.855449},
            title: 'Gwarki tarnogórskie',
            place: 'Tarnowskie Góry',
            www: 'http://www.gwarki.tg.net.pl/',
            category: 'inne'
        },
        {
            position: {lat:50.278443, lng:19.126652},
            title: 'Dni Ziemi w Sosnowcu',
            place: '',
            www: 'http://ptg.wnoz.us.edu.pl/index.php?option=com_content&view=article&id=177&Itemid=197',
            category: 'inne'
        },
        {
            position: {lat:50.264264, lng:19.023591},
            title: 'Industriada',
            place: 'Województwo Śląskie',
            www: 'http://www.industriada.pl/',
            category: 'inne'
        },
        {
            position: {lat:50.678225, lng:18.644894},
            title: 'Glinianka w Lisowicach (Lipiu Śląskim)',
            place: 'Lubliniec, ul. Cegielniana',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=707',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.657494, lng:18.982282},
            title: 'Jaskinia Malinowska w górze Malinów',
            place: 'Gmina Wisła',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=733',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.648888 , lng:18.992777},
            title: 'Stanowisko dokumentacyjne Jaskinia Miecharska w Malinowskiej Skale',
            place: 'Gmina Wisła',
            www: '://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=637',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.665277, lng:18.957500},
            title: 'Stanowisko dokumentacyjne Jaskinia Wiślańska w górze Malinów',
            place: 'Gmina Brenna, Przełęcz Salmopolska',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1412',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.797718, lng:.050711},
            title: 'Glinianka iłów środkowojurajskich Gnaszyn w Częstochowie',
            place: 'Częstochowa, ul. Tatrzańska 3',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9219',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.494523, lng:19.380730},
            title: 'Hałda utworów górnotriasowych w Zawierciu - Marciszowie',
            place: 'Zawiercie, ul. Podmiejska',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9554',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.6615832, lng:19.484227},
            title: 'Jaskinia Stajnia w Grzędzie Mirowskiej',
            place: 'Gmina Niegowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10096',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.546111, lng:19.532777},
            title: 'Jaskinia w Dziadowej Skale k/Podlesic',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9378',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.572777, lng:19.518611},
            title: 'Jaskinia Żabia w Skałkach Podlesickich',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9371',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.931638, lng:19.011936},
            title: 'Kamieniołom wapieni górnojurajskich w Łobodnie (nieczynny)',
            place: 'Łobodno, gm. Kłobuck',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9570',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:.931638, lng:19.011936},
            title: 'Kamieniołom wapieni górnojurajskich w Łobodnie (nieczynny)',
            place: 'Łobodno, gm. Kłobuck',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9570',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.504768, lng:19.368913},
            title: 'Odsłonięcie utworów triasu górnego w Porębie',
            place: 'Poręba, ul. Partyzantów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9376',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.439185, lng:19.521302},
            title: 'Odsłonięcie utworów środkowojurajskich Ogrodzieniec - Świertowiec',
            place: 'Gmina Ogrodzieniec',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9373',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.780585, lng:18.646307},
            title: 'Sill cieszynitu teralitowego w Zamarskach - Rudowie',
            place: 'Zamarski, ul. Kamienna',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9721',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.837137, lng:18.919720},
            title: 'Sill pikrytowy ze skarnem pektolitowym w Miedzyrzeczu Górnym',
            place: 'Międzyrzecze Górne, gm. Jasienica',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9668',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.835494, lng:18.628023},
            title: 'Żwirownia w Kończycach Wielkich',
            place: 'Kończyce Wielkie, gm. Hażlach',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9381',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:50.811805, lng:19.112277},
            title: 'Muzeum Częstochowskie',
            place: 'Częstochowa, al. Najświętszej Maryi Panny 47',
            www: 'http://www.muzeumczestochowa.pl/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.260538, lng:19.084505},
            title: 'Muzeum Hutnictwa Cynku w Szopienicach',
            place: 'Katowice-Szopienice, ul. 11 listopada (wjazd od ulicy Roździeńskiej 25)',
            www: 'http://www.walcownia.org/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.300751, lng:18.786187},
            title: 'Muzeum Górnictwa Węglowego w Zabrzu',
            place: 'Zabrze, ul. 3maja 19',
            www: 'http://www.muzeumgornictwa.pl/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.399474, lng:18.633743},
            title: 'Mamuty w Pyskowicach',
            place: 'Pyskowice, ul. Kardynała S. Wyszyńskiego 37',
            www: 'http://zabytkigornegoslaska.com.pl/index.php/inne/165-pyskowice-geopunkt',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.221592, lng:18.672905},
            title: 'Izba Tradycji i Perspektyw KWK Knurów-Szczygłowice',
            place: 'Knurów ul. Dworcowa 3A',
            www: 'http://www.wirtualnyknurow.pl/izba.htm',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.149949, lng:18.675424},
            title: 'Zabytkowe osiedle patronackie KWK Dębińsko w Czerwionce-Leszczynach',
            place: 'Czerwionka-Leszczyny, ul. Mickiewicza 10',
            www: 'http://familoki.com.pl/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:49.801683, lng:18.872416},
            title: 'Dajka lamprofirowa w nieczynnym kamieniołomie Goruszka w Grodźcu',
            place: 'Gmina Jasienica',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9712',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.464347, lng:19.551377},
            title: 'Góra Birów w Podzamczu',
            place: 'Gmina Ogrodzieniec',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=43',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:51.054975, lng:18.805859},
            title: 'Rezerwat przyrody Szachownica w gminie Lipie',
            place: 'Gmina Lipie',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1818',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.769175, lng:18.624342},
            title: 'Kamieniołom cieszynitu i lamprofiru w Cieszynie-Boguszowicach (nieczynny)',
            place: 'Cieszyn, ul. Majowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9717',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.769521, lng:18.616255},
            title: 'Kamieniołom diabazów w Cieszynie-Boguszowicach (nieczynny)',
            place: 'Cieszyn, ul Motokrosowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9725',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.499239, lng:19.234253},
            title: 'Kamieniołom dolomitu Nowa Wioska ',
            place: 'Gmina Siewierz',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9631',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.495366, lng:19.219151},
            title: 'Kamieniołom dolomitu Siewierz ',
            place: 'Gmina Siewierz',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9630',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.678740, lng:18.842992},
            title: 'Kamieniołom piaskowców godulskich Wisła-Gahura',
            place: 'Wisła, ul. Gahura',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9636',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.704885, lng:18.729429},
            title: 'Kamieniołom wapieni cieszyńskich w Lesznej Górnej',
            place: 'Gmina Goleszów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9649',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.809709, lng:19.234700},
            title: 'Kamieniołom warstw godulskich w Wielkiej Puszczy',
            place: 'Gmina Porąbka',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1668',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.724869, lng:18.741636},
            title: 'Stanowisko dokumentacyjne Jasieniowa w Goleszowie',
            place: 'Gmina Goleszów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9634',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:51.040950, lng:18.949972},
            title: 'Morena czołowa akumulacyjna w Dąbrówce k. Popowa',
            place: 'Gmina Popów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9492',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.659642, lng:19.307017},
            title: 'Odsłonięcie stratotypowe ogniwa piaskowca z Mutnego',
            place: 'Gmina Jeleśnia',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=570',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.777778, lng:18.614167},
            title: 'Sill cieszynitu i diabazu na terenie rezerwatu Kopce w Cieszynie – Boguszowicach',
            place: 'Cieszyn - Boguszowice',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9679',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.763976, lng:18.618889},
            title: 'Stanowisko dokumentacyjne Odkrywka cieszynitów w Cieszynie',
            place: 'Cieszyn - Boguszowice',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9727',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.776389, lng:18.611111},
            title: 'Sill cieszynitu w Cieszynie – Boguszowicach',
            place: 'Cieszyn, ul Motokrosowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9678',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.793056, lng:18.89},
            title: 'Sill dolerytu (diabazu) w dolinie Łańskiego Potoku w Grodźcu',
            place: 'Gmina Jasienica',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9666',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.766944, lng:18.619167},
            title: 'Sill pikrytu w Cieszynie - Boguszowicach',
            place: 'Cieszyn, ul. Kręta',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9715',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.681626, lng:19.196659},
            title: 'Sille lamprofirów w dolinie Soły w Żywcu',
            place: 'Żywiec, dolina Soły',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9650',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.783333, lng:19.261389},
            title: 'Uwał Koziniec w Srocku-Kusiętach',
            place: 'Gmina Mstów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=45',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.584924, lng:19.301353},
            title: 'Wodospad na potoku Sopotnia Wielka',
            place: 'Gmina Jeleśnia',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1357',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.332777, lng:19.26},
            title: 'Wychodnia skał górnokarbońskich z faunistycznym poziomem morskim w Dąbrowie Górniczej',
            place: 'Dąbrowa Górnicza, ul. Laski',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9210',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.660786, lng:19.420603},
            title: 'Wzgórze ostańcowe Na Bukowym w Trzebniowie',
            place: 'Gmina Niegowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9589',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.767750, lng:19.371577},
            title: 'Zbójnickie Okno, Skałka na Zakocierzy',
            place: 'Gmina Ślemień',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1386',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.412421, lng:18.875813},
            title: 'Ślady eksploatacji żeleźniaka brunatnego i galmanów na Górze Cipiorg w Tarnowskich Górach i Bytomiu',
            place: 'Tarnowskie Góry - Bytom',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9635',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.615278, lng:19.381667},
            title: 'Kuesta jurajska w Żarkach',
            place: 'Żarki - Jaworznik',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1614',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.492889, lng:19.494361},
            title: 'Źródła Warty w Kromołowie',
            place: 'Zawiercie - Kromołów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1816',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.360806, lng:19.519500},
            title: 'Pustynia Błędowska',
            place: 'Błędów - Chechło',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=33',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.747806, lng:19.304917},
            title: 'Stanowisko dokumentacyjne Zamczysko na Ściszków Groniu',
            place: 'Gmina Łękawica',
            www: 'http://www.beskidmaly.pl/scieszkow-gron',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:49.706217, lng:18.825988},
            title: 'Stanowisko dokumentacyjne Kamieniołom Skalica w Ustroniu',
            place: 'Ustroń, ul. Nadrzeczna',
            www: 'http://www.ustron.bip.info.pl/dokument.php?iddok=11944&str=119',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.314102, lng:19.293742},
            title: 'Stanowisko dokumentacyjne Srocza Góra w Dąbrowie Górniczej, Geostanowisko',
            place: 'Dąbrowa Górnicza, ul. Strzemieszycka',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9221',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.644030, lng:19.056580 },
            title: 'Rezerwat przyrody nieożywionej Kuźnie, Osuwisko na Muronce',
            place: 'Gmina Lipowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1712',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.066333, lng:18.429833},
            title: 'Stanowisko dokumentacyjne Skałka w Rydułtowach, Geostanowisko',
            place: 'Rydułtowy, ul. Ofiar Terroru',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1687',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.148449, lng:18.879757},
            title: 'Stanowisko dokumentacyjne Kamieniołom piaskowców karbońskich w Łaziskach, Geostanowisko',
            place: 'Łaziska Średnie',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9212',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.675092, lng:19.415461},
            title: 'Stanowisko dokumentacyjne Jaskinia Wiercica w Ostrężniku',
            place: 'Gmina Niegowa',
            www: 'http://jaskiniepolski.pgi.gov.pl/Details/Information/2519',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.429500, lng:18.782111},
            title: 'Brama Gwarków w Zbrosławicach, Geostanowisko',
            place: 'Gmina Zbrosławice',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9106',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.798056, lng:18.649722},
            title: 'Pozostałości po eksploatacji rud żelaza - Zborowskie i Panoszów',
            place: 'Gmina Ciasna',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=648',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.062383 , lng:18.467683},
            title: 'Zabytkowa KWK Ignacy w Rybniku Geostanowisko',
            place: 'Rybnik, ul. Mościckiego 3',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9831',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.064214, lng:18.442596},
            title: 'Hałda Szarlota w Rydułtowach, Geostanowisko',
            place: 'Rydułtowy',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9330',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.569673, lng:19.645400},
            title: 'Żelazna Dolina w Pradłach, Geostanowisko',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9390',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.475417, lng:19.334453},
            title: 'Wyrobiska po eksploatacji węgla brunatnego w Porębie',
            place: 'Gmina Poręba',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9487',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.071542, lng:18.711033},
            title: 'Wieża wyciągowa po hucie żelaza Waleska w Palowicach',
            place: 'Gmina Palowice',
            www: 'http://m.peuk.fiiz.pl/poi/index/poi/3280208/page/1/obj/#page-poi-details-0',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.285453, lng:18.919147},
            title: 'Wieże dawnej KWK Polska w Świętochłowicach',
            place: 'Świętochłowice, ul. Wojska Polskiego 16D',
            www: 'http://www.gornyslask.net.pl/t/swietochlowice-wieze-kopalni-polska/',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.510722, lng:18.988558},
            title: 'Zatopiona Kopalnia Bibiela – Pasieki, Geostanowisko',
            place: 'Miasteczko Śląskie - Pasieki',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9863',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.428753, lng:18.771628},
            title: 'Śladami dawnego górnictwa Tarnowskich Gór',
            place: 'Tarnowskie Góry',
            www: 'http://rowerempotg.blogspot.com/2010/04/trasa-numer-1-sladami-dawnego-gornictwa.html',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.180084, lng:18.848824},
            title: 'Wapienniki w Mikołowie-Mokre, Geostanowiska',
            place: 'Mikołów-Mokre, ul. 15 Grudnia 1B',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1603',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:49.487597, lng:19.036351},
            title: 'Źródła solankowe w Soli, Geostanowisko',
            place: 'Gmina Rajcza',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9229',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:49.719780, lng:19.375388},
            title: 'Ruiny pieca hutniczego w Ślemieniu',
            place: 'Ślemień, ul. Spacerowa',
            www: 'http://zwiedzajbeskidy.pl/index.php?option=com_k2&view=item&id=284:ruiny-pieca-w-slemieniu&Itemid=719',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:49.512249, lng:19.219902},
            title: 'Pozostałości po hucie szkła w Złatnej',
            place: 'Gmina Ujsoły',
            www: 'http://zabytkitechniki.pl/Poi/Pokaz/15910/1939/ruiny-huty-szkla-w-zlatnej',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:49.511874, lng:19.210448},
            title: 'Źródło siarczane w dolinie Śmierdzącego Potoku',
            place: 'Gmina Ujsoły',
            www: 'http://zwiedzajbeskidy.pl/index.php?option=com_k2&view=item&id=648:zrodlo-siarkowe-zlatna&Itemid=719',
            category: 'uzdrowiskaIObiektyUzdrowiskowe'
        },
        {
            position: {lat:50.679485, lng:19.212217},
            title: 'Izba Pamięci Gminy Poraj',
            place: 'Poraj, ul. Piłsudskiego 14',
            www: 'www.gokporaj.pl',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.669608, lng:19.445061},
            title: 'Jaskinia Brzozowa w Ludwinowie',
            place: 'Gmina Niegowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9368',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.806525, lng:18.871642},
            title: 'Martwice wapienne w Grodźcu',
            place: 'Gmina Jasienica',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9448',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.733150, lng:18.985533},
            title: 'Jaskinia w Trzech Kopcach',
            place: 'Gmina Brenna',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1387',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.807436, lng:19.067408},
            title: 'Glinianka iłów środkowojurajskich Anna w Częstochowie',
            place: 'Częstochowa, ul. Huculska',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9213',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.785444, lng:19.044139},
            title: 'Glinianki iłów środkowojurajskich Gliński i Sowa w Częstochowie',
            place: 'Częstochowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9214',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.805922, lng:18.842392},
            title: 'Głaz narzutowy Rosnący Kamień w Pogórzu',
            place: 'Gmina Skoczów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9230',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.101953, lng:18.792800},
            title: 'Piaskownia w Gardawicach',
            place: 'Gmina Orzesze',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9488',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.802247, lng:19.388083},
            title: 'Wychodnia utworów kredowych w Mokrzeszu koło Częstochowy',
            place: 'Gmina Mstów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9550',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.864286, lng:18.903350},
            title: 'Głaz narzutowy w Rudzicy',
            place: 'Gmina Jasienica',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9187',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.576181, lng:19.531850},
            title: 'Jaskinia Berkowa na Górze Kołoczek',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9826',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.693647, lng:19.667164},
            title: 'Źródła pulsujące w dolinie Białki Lelowskiej',
            place: 'Gmina Lelów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9552',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.842183, lng:18.865247},
            title: 'Sill pikrytu w Roztropicach',
            place: 'Gmina Jasienica',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9710',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.276342, lng:18.473647},
            title: 'Wyrobisko iłów poznańskich w Sierakowicach',
            place: 'Gmina Sośnicowice',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9383',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.370206, lng:19.027678},
            title: 'Kamieniołom skał środkowotriasowych Żychcice w Wojkowicach (nieczynny)',
            place: 'Wojkowice, ul. G. Zapolskiej',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9482',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.451472, lng:19.553333},
            title: 'Skała Czubata na Górze Janowskiego (Zamkowej)',
            place: 'Gmina Ogrodzieniec',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1794',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.758550, lng:19.410017},
            title: 'Jaskinia Komonieckiego w Beskidzie Małym',
            place: 'Gmina Ślemień',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1337',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.770417, lng:19.139367},
            title: 'Jaskinia Wietrzna Dziura w Magurce',
            place: 'Gmina Wilkowice',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1385',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.093722, lng:18.214917},
            title: 'Głaz narzutowy w Raciborzu',
            place: 'Racibórz, Pl. Wolności',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=654',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.133342, lng:18.435708},
            title: 'Niecka wytopiskowa po martwym lodzie w okolicy Zwonowic',
            place: 'Gmina Lyski',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9380',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.521889, lng:19.446667},
            title: 'Źródła w Rudnikach (Łakotnik)',
            place: 'Gmina Zawiercie',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1778',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.723225, lng:18.667658},
            title: 'Kamieniołom cieszynitu w Puńcowie (nieczynny)',
            place: 'Gmina Goleszów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9724',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.785031, lng:18.643575},
            title: 'Sill cieszynitu w Zamarskach – Rudowie',
            place: 'Gmina Hażlach',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9720',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.870261, lng:19.072844},
            title: 'Kamieniołom wapieni górnojurajskich w Białej Dolnej (nieczynny)',
            place: 'Gmina Kłobuck',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9569',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.561206, lng:19.140175},
            title: 'Łomy wapieni woźnickich w Krusinie',
            place: 'Gmina Koziegłowy',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9713',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.600975, lng:19.113169},
            title: 'Żwiry połomskie w Gniazdowie 1',
            place: 'Gmina Koziegłowy',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9578',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.789444, lng:19.050056},
            title: 'Glinianka iłów środkowojurajskich Leszczynski w Czestochowie-Kawodrzy Górnej',
            place: 'Częstochowa, ul. 10 Zakładników',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9217',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.756694, lng:19.147472},
            title: 'Nieczynny kamieniołom wapieni środkowo- i górnojuraskich we Wrzosowej',
            place: 'Gmina Poczesna',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9374',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.431611, lng:19.361806},
            title: 'Kamieniołom wapieni górnojurajskich w Wysokiej (nieczynny)',
            place: 'Gmina Łazy',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9211',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.767222, lng:19.270778},
            title: 'Rezerwat Góry Towarne',
            place: 'Gmina Olsztyn',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=108',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.807233, lng:19.201686},
            title: 'Przełom Soły',
            place: 'Gmina Czernichów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9551',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.586892, lng:19.540332},
            title: 'Jaskinia w Kroczycach',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9389',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.780778, lng:19.259556},
            title: 'Jezioro krasowe w Kusiętach',
            place: 'Gmina Olsztyn',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=179',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.763353, lng:19.478633},
            title: 'Źródła w Juliance - Sygontce',
            place: 'Gmina Przyrów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9719',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.630083, lng:18.855639},
            title: 'Krzakoska Skała w Beskidzie Śląskim',
            place: 'Gmina Wisła',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=6550',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.822064, lng:19.567464},
            title: 'Kamieniołomy skał górnokredowych w Olbrachcicach (nieczynne)',
            place: 'Gmina Dąbrowa Zielona',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9528',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.602217, lng:19.127817},
            title: 'Żwiry połomskie w Gniazdowie 2',
            place: 'Gmina Koziegłowy',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9577',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.559128, lng:19.164806},
            title: 'Żwiry połomskie w Markowicach',
            place: 'Gmina Koziegłowy',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9716',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.566786, lng:19.163497},
            title: 'Żwiry połomskie w Rzeniszowie',
            place: 'Gmina Koziegłowy',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9216',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.315000, lng:18.868167},
            title: 'Dawny kamieniołom Sztajnbruch w Rudzie Śląskiej',
            place: 'Ruda Śląska, ul. Wincentego',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=7352',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.672956, lng:19.080081},
            title: 'Sill lamprofiru w Lipowej',
            place: 'Gmina Lipowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9673',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.411972, lng:19.277611},
            title: 'Pozostałości dawnej eksploatacji rud Pb-Ag-Zn na Trzebiesławskiej Górze',
            place: 'Dąbrowa Górnicza - Ujejsce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10172',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.206184, lng:18.386197},
            title: 'Dolina rzeki Rudy',
            place: 'Gmina Kuźnia Raciborska',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9391',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.689750, lng:19.403889},
            title: 'Brama Twardowskiego - ostaniec skalny',
            place: 'Gmina Janów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9171',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.635289, lng:19.427222},
            title: 'Wzgórze ostańcowe Czarny Kamień w Moczydle ',
            place: 'Gmina Niegowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9827',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.731278, lng:19.280556},
            title: 'Jaskinia Olsztyńska w Sokolich Górach',
            place: 'Gmina Olsztyn',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=83',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.789644, lng:18.839450},
            title: 'Naturalne jezioro w Jeziorze',
            place: 'Gmina Wręczyca Wielka',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9494',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.756483, lng:19.326731},
            title: 'Kamieniołom wapieni górnojurajskich w Przymiłowicach (nieczynny)',
            place: 'Gmina Olsztyn',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9718',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.482356, lng:18.964614},
            title: 'Kamieniołomy wapieni środkowotriasowych w Żyglinie',
            place: 'Gmina Miasteczko Śląskie',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9563',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.215836, lng:18.496614},
            title: 'Hałdy po kopalniach rudy żelaza w Stanicy-Górniki',
            place: 'Gmina Pilchowice',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9491',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.572833, lng:19.530167},
            title: 'Rezerwat przyrody Góra Zborów w Podlesicach',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=178',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.421672, lng:.621708},
            title: 'Ostańce skalne Ruskie Góry w Ryczowie',
            place: 'Gmina Ogrodzieniec',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9714',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.524139, lng:19.522750},
            title: 'Skała Okiennik Wielki w Piasecznie',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1618',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.663722, lng:19.066278},
            title: 'Dolina Zimnika i Leśnianki w Beskidzie Śląskim',
            place: 'Gmina Lipowa',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9366',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.595056, lng:18.832083},
            title: 'Ostańce piaskowcowe pomiędzy Stożkiem Wielkim a Kiczorami',
            place: 'Gmina Wisła',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=7372',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.590889, lng:19.571472},
            title: 'Ostańce wapienne na Górze Słupsko w Kostkowicach',
            place: 'Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10167',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.685583, lng:19.628167},
            title: 'Źródło szczelinowe w Lelowie',
            place: 'Gmina Lelów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10159',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.729389, lng:19.291917},
            title: 'Jaskinia Komarowa na terenie rezerwatu Sokole Góry',
            place: 'Gmina Olsztyn',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10084',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.548500, lng:18.975222},
            title: 'Kamieniołom piaskowców krośnieńskich Koczy Zamek  w Istebnej',
            place: 'Gmina Istebna',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=909',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.627511, lng:18.907381},
            title: 'Zlepieńce malinowskie w Wiśle-Nowej Osadzie',
            place: 'Wisła, ul. Czarne',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=911',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.666535, lng:19.075537},
            title: 'Ścieżka przyrodnicza W Dolinie Zimnika, Geostanowisko',
            place: 'Lipowa, Potok Zimnik',
            www: 'https://lipowaiokolice.blogspot.com/2013/04/sciezka-edukacyjna-dolina-zimnika.html',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.438005, lng:19.669163},
            title: 'Ścieżka przyrodnicza Dolina Wodąca, Geostanowiska',
            place: 'Smoleń, Gmina Pilica',
            www: 'http://katowice.rdos.gov.pl/sciezki-przyrodnicze-na-obszarach-naturowych',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.406216, lng:19.492848},
            title: 'Ścieżka przyrodnicza po rezerwacie Góra Chełm, Geostanowisko',
            place: 'Hutki-Kanki, Gmina Łazy',
            www: 'http://katowice.rdos.gov.pl/sciezki-przyrodnicze-na-obszarach-naturowych',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.575312, lng:19.481701},
            title: 'Ścieżka przyrodniczo-dydaktyczna Rzędkowice – Morsko, Geostanowiska',
            place: 'Rzędkowice, Gmina Włodowice',
            www: 'http://katowice.rdos.gov.pl/sciezki-przyrodnicze-na-obszarach-naturowych',
            category: 'sciezkiTematyczne'
        }
    ];
    //object of icons for markers
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
        sciezkiTematyczne: {
            name: "Ścieżki tematyczne",
            icon: "images/markers/walkingtour.png"
        },
        inne:   {
            name: "inne",
            icon: "images/markers/world.png"
        },
        geostanowiskaMiedzynarodowe:    {
            name: "Geostanowiska międzynarodowe",
            icon: "images/markers/world_geostanowiska.png"
        }
    };
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ],{name: 'Styled Map'});
    var mapOptions =    {
        center: {
            lat: 50.277978,
            lng: 19.020544
        },
        zoom: 10,
        scrollwheel: false,
        draggable: true,
        mapTypeId: "terrain",
        minZoom: 8,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: true
    };
    var mapDiv = document.getElementById("map");
    var map, marker, i;
    map = new google.maps.Map(mapDiv, mapOptions);
    map.mapTypes.set("styled_map", styledMapType);
    var infowindow = new google.maps.InfoWindow();
    //loop creating markers
    for (i = 0; i < obiekty.length; i++) {
        marker = new google.maps.Marker({
            position: obiekty[i].position,
            map: map,
            title: obiekty[i].title,
            icon: icons[obiekty[i].category].icon
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent("<div class='markerDeskription'><p>" + obiekty[i].title + "</p><p>" + obiekty[i].place + "</p><a href=" + obiekty[i].www + ">Więcej</a></div>");
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}