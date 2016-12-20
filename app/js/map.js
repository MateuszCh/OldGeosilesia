/**
 * Created by Mateusz Chybiorz on 2016-12-11.
 */
function initMap() {
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
            title: 'Ścieżka przyrodnicza na terenie rezerwatu przyrody Góra Zborów Geostanowiska',
            place: 'Podlesice, Gmina Kroczyce',
            www: 'http://www.podlesice.org.pl/podlesice1/',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.575626, lng:19.524289},
            title: 'Jaskinia Głęboka w rezerwacie Góra Zborów',
            place: 'Podlesice, Gmina Kroczyce',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=171',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.877535, lng:19.233106},
            title: 'Ścieżka dydaktyczna w kamieniołomie Lipówka Geostanowisko',
            place: 'Rudniki, ul .Dworcowa 15C',
            www: 'http://www.cemex.pl/kamieniolom-lipowka.aspx',
            category: 'sciezkiTematyczne'
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
            title: 'Ścieżka geoturystyczna w Górach Towarnych Geostanowiska',
            place: 'Olsztyn, powiat częstochowski',
            www: 'http://jura.slaskie.travel/Trasy/Pokaz/8108/sciezka-geologiczna-w-krainie-bialych-skal/1247',
            category: 'sciezkiTematyczne'
        },
        {
            position: {lat:50.752308, lng:19.278467},
            title: 'Wirtualna ścieżka dydaktyczna Kamieniołom Kielniki Geostanowiska',
            place: 'Olsztyn, powiat częstochowski',
            www: 'http://geoportal.pgi.gov.pl/css/virtual/kielniki/sciezka.swf',
            category: 'sciezkiTematyczne'
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
            title: 'Kopalnia Ćwiczebna Muzeum Miejskiego „Sztygarka” Geostanowisko',
            place: 'Dąbrowa Górnicza, ul. Górnicza',
            www: 'http://muzeum-dabrowa.pl/',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.296432, lng:18.798901},
            title: 'Sztolnia Królowa Luiza – Strefa podziemna',
            place: 'Zabrze, ul. Sienkiewicza 43 (wjazd od ul. Mochnackiego)',
            www: 'http://www.sztolnialuiza.pl/index.php/park-12c-1',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.296689, lng:18.806437},
            title: 'Sztolnia Królowa Luiza – Strefa naziemna (Szyb Carnall) Geostanowisko',
            place: 'Zabrze, ul. Wolności 410',
            www: 'http://sztolnialuiza.pl/index.php/szyb-carnall2',
            category: 'obiektyPrzemysloweIPoprzemyslowe'
        },
        {
            position: {lat:50.425519, lng:18.849568},
            title: 'Zabytkowa Kopalnia Srebra Geostanowisko',
            place: 'Tarnowskie Góry, ul. Szczęść Boże 81',
            www: 'http://www.kopalniasrebra.pl/kopalnia/kopalnia.php',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.289459, lng:18.791420},
            title: 'Kopalnia Guido Geostanowisko',
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
            title: 'Sztolnia Czarnego Pstrąga Geostanowisko',
            place: 'Tarnowskie Góry, ul. Śniadeckiego / Repecka',
            www: 'http://www.kopalniasrebra.pl/sztolnia/sztolnia.php',
            category: 'trasyPodziemne'
        },
        {
            position: {lat:50.402597, lng:18.859255},
            title: 'Stanowisko dokumentacyjne Blachówka',
            place: 'Bytom - Sucha Góra, ul. Blachówka 94',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=10446',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.464108, lng:19.152271},
            title: 'Geopark Glinka',
            place: 'Ujsoły, Glinka 4 ',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=7350',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.325843, lng:19.133729},
            title: 'Podziemia będzińskie Geostanowisko',
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
            title: 'Kotlina Dinozaurów – Śląski Ogród Zoologiczny Geostanowisko',
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
            title: 'Uzdrowisko Ustroń – Geostanowisko źródło Karola, pijalnia wód i fontanna solankowa',
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
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.290718, lng:18.674892},
            title: 'Muzeum Geologii Złóż Wydziału Górnictwa i Geologii Politechniki Śląskiej',
            place: 'Gliwice, ul. Akademicka 2',
            www: 'https://www.polsl.pl/Wydzialy/RG/rg7/Strony/MuzeumGeologiiZloz.aspx',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:49.767549, lng:18.909748},
            title: 'Szlak szklany „ Jaworze Nałęże – ranczo Błatnia”',
            place: 'Jaworze, Dolina Jasionki',
            www: 'http://www.szklanym-szlakiem.jaworze.pl/strona_glowna',
            category: 'sciezkiTematyczne'
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
            title: 'Jaskinia Malinowska',
            place: 'Gmina Wisła',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=733',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.648888 , lng:18.992777},
            title: 'Stanowisko dokumentacyjne Jaskinia Miecharska',
            place: 'Gmina Wisła',
            www: '://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=637',
            category: 'geostanowiskaMiedzynarodowe'
        },
        {
            position: {lat:49.665277, lng:18.957500},
            title: 'Stanowisko dokumentacyjne Jaskinia Wiślańska',
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
            title: 'Jaskinia Stajnia',
            place: 'Bobolice, gm. Niegowa',
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
            title: 'Jaskinia Żabia',
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
            title: 'Dawna huta cynku „Uthemann” z 1834 r. ',
            place: 'Katowice-Szopienice, ul. 11 listopada 30',
            www: 'http://www.muzeumcynku.katowice.pl/',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.300751, lng:18.786187},
            title: 'Muzeum Górnictwa Węglowego',
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
            title: 'Izba Tradycji i Perspektyw KWK "Knurów-Szczygłowice"',
            place: 'Knurów ul. Dworcowa 3A',
            www: 'http://www.wirtualnyknurow.pl/izba.htm',
            category: 'muzeaGeologiczneIDinoparki'
        },
        {
            position: {lat:50.149949, lng:18.675424},
            title: 'Zabytkowe Osiedle Czerwionka-Leszczyny',
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
            title: 'Góra Birów',
            place: 'Gmina Ogrodzieniec',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=43',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:51.054975, lng:18.805859},
            title: 'Rezerwat przyrody Szachownica',
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
            title: 'Stanowisko dokumentacyjne Jasieniowa',
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
            title: 'Odsłonięcie stratotypowe ogniwa piaskowca z Mutnego formacji z Jaworzynki',
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
            title: 'Stanowisko dokumentacyjne Odkrywka cieszynitów',
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
            title: 'Uwał Koziniec',
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
            title: 'Wzgórze ostańcowe Na Bukowym w Trzebniowie ',
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
            title: 'Kuesta jurajska',
            place: 'Żarki - Jaworznik',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1614',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.492889, lng:19.494361},
            title: 'Źródła Warty I i II',
            place: 'Zawiercie - Kromołów',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1816',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:50.360806, lng:19.519500},
            title: 'Pustynia Błędowska',
            place: 'Błędów - Chechło',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1816',
            category: 'wybraneGeostanowiska'
        },
        {
            position: {lat:49.643667, lng:19.055833},
            title: 'Rezerwat przyrody Kuźnie',
            place: 'Gmina Lipowa',
            www: 'http://slaskie.travel/Poi/Pokaz/3849/1143/rezerwat-kuznie',
            category: 'obszaryIObiektyChronione'
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
            title: 'Stanowisko dokumentacyjne Kamieniołom Skalica',
            place: 'Ustroń, ul. Nadrzeczna',
            www: 'http://www.ustron.bip.info.pl/dokument.php?iddok=11944&str=119',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.314102, lng:19.293742},
            title: 'Stanowisko dokumentacyjne Srocza Góra',
            place: 'Dąbrowa Górnicza, ul. Strzemieszycka',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9221',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.066333, lng:18.429833},
            title: 'Stanowisko dokumentacyjne Skałka',
            place: 'Rydułtowy, ul. Ofiar Terroru',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=1687',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.148449, lng:18.879757},
            title: 'Stanowisko dokumentacyjne Kamieniołom piaskowców karbońskich',
            place: 'Łaziska Średnie',
            www: 'http://geostanowiska.pgi.gov.pl/gsapp_v2/ObjectDetails.aspx?id=9212',
            category: 'obszaryIObiektyChronione'
        },
        {
            position: {lat:50.675092, lng:19.415461},
            title: 'Stanowisko dokumentacyjne Jaskinia Wiercica',
            place: 'Gmina Niegowa',
            www: 'http://jaskiniepolski.pgi.gov.pl/Details/Information/2519',
            category: 'obszaryIObiektyChronione'
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