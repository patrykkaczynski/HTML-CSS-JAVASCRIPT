// Zmienna przechowująca opis mapy
var descriptionMap;

// Udostepanianie funkcji po załadowaniu dokumentu

    $(document).ready(function () {
        document.getElementById("selected-map-name").innerHTML = "Wybrana mapa: " + sessionStorage.getItem('imageMapNameStorage');
        document.getElementById("selected-image-map").src = sessionStorage.getItem('imageMapStorage');
        document.getElementById("selected-map-description").innerHTML = sessionStorage.getItem('descriptionMapStorage');
        document.getElementById("selected-map-radar").src = sessionStorage.getItem('imageMapRadarStorage');
    })

// Metoda setInterval powtarzająca funkcję co sekundę
var myVar = setInterval(myTimer, 1000);

// Funkcja wyświetlająca aktualnego czasu
function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = "Aktualny czas: " + d.toLocaleTimeString();
}

// Jeśli wybór w opcji dla rangi jest inny niż null wykonuj funkcję ChangeImageRank po zmianie opcji rangi
if (document.getElementById("rank") != null) {
    document.getElementById("rank").addEventListener("change", ChangeImageRank);
}


// Funkcja zmieniająca grafikę w systemie po wyborze rangi i przechowująca wybraną nazwę rangi i grafikę podczas działania witryny 
function ChangeImageRank() {
    if (document.getElementById("rank").value == "Srebro I") {
        document.getElementById("image-rank").src = "Images/Ranks/1.png";
        sessionStorage.setItem('rankNameStorage', 'Srebro I');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/1.png');
    }
    else if (document.getElementById("rank").value == "Srebro II") {
        document.getElementById("image-rank").src = "Images/Ranks/2.png";
        sessionStorage.setItem('rankNameStorage', 'Srebro II');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/2.png');
    }
    else if (document.getElementById("rank").value == "Srebro III") {
        document.getElementById("image-rank").src = "Images/Ranks/3.png";
        sessionStorage.setItem('rankNameStorage', 'Srebro III');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/3.png');
    }
    else if (document.getElementById("rank").value == "Srebro IV") {
        document.getElementById("image-rank").src = "Images/Ranks/4.png";
        sessionStorage.setItem('rankNameStorage', 'Srebro IV');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/4.png');
    }
    else if (document.getElementById("rank").value == "Elitarne srebro") {
        document.getElementById("image-rank").src = "Images/Ranks/5.png";
        sessionStorage.setItem('rankNameStorage', 'Elitarne srebro');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/5.png');
    }
    else if (document.getElementById("rank").value == "Mistrzowskie elitarne srebro") {
        document.getElementById("image-rank").src = "Images/Ranks/6.png";
        sessionStorage.setItem('rankNameStorage', 'Mistrzowskie elitarne srebro');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/6.png');
    }
    else if (document.getElementById("rank").value == "Złoty laur I") {
        document.getElementById("image-rank").src = "Images/Ranks/7.png";
        sessionStorage.setItem('rankNameStorage', 'Złoty laur I');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/7.png');
    }
    else if (document.getElementById("rank").value == "Złoty laur II") {
        document.getElementById("image-rank").src = "Images/Ranks/8.png";
        sessionStorage.setItem('rankNameStorage', 'Złoty laur II');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/8.png');
    }
    else if (document.getElementById("rank").value == "Złoty laur III") {
        document.getElementById("image-rank").src = "Images/Ranks/9.png";
        sessionStorage.setItem('rankNameStorage', 'Złoty laur III');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/9.png');
    }
    else if (document.getElementById("rank").value == "Mistrzowski złoty laur") {
        document.getElementById("image-rank").src = "Images/Ranks/10.png";
        sessionStorage.setItem('rankNameStorage', 'Złoty laur IV');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/10.png');
    }
    else if (document.getElementById("rank").value == "Mistrzowski obrońca I") {
        document.getElementById("image-rank").src = "Images/Ranks/11.png";
        sessionStorage.setItem('rankNameStorage', 'Mistrzowski obrońca I');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/11.png');
    }
    else if (document.getElementById("rank").value == "Mistrzowski obrońca II") {
        document.getElementById("image-rank").src = "Images/Ranks/12.png";
        sessionStorage.setItem('rankNameStorage', 'Mistrzowski obrońca II');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/12.png');
    }
    else if (document.getElementById("rank").value == "Elitarny mistrzowski obrońca") {
        document.getElementById("image-rank").src = "Images/Ranks/13.png";
        sessionStorage.setItem('rankNameStorage', 'Elitarny mistrzowski obrońca');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/13.png');
    }
    else if (document.getElementById("rank").value == "Wybitny mistrzowski obrońca") {
        document.getElementById("image-rank").src = "Images/Ranks/14.png";
        sessionStorage.setItem('rankNameStorage', 'Wybitny mistrzowski obrońca');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/14.png');
    }
    else if (document.getElementById("rank").value == "Legendarny orzeł") {
        document.getElementById("image-rank").src = "Images/Ranks/15.png";
        sessionStorage.setItem('rankNameStorage', 'Legendarny orzeł');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/15.png');
    }
    else if (document.getElementById("rank").value == "Mistrzowski legendarny orzeł") {
        document.getElementById("image-rank").src = "Images/Ranks/16.png";
        sessionStorage.setItem('rankNameStorage', 'Mistrzowski legendarny orzeł');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/16.png');
    }
    else if (document.getElementById("rank").value == "Mistrzowska pierwsza klasa") {
        document.getElementById("image-rank").src = "Images/Ranks/17.png";
        sessionStorage.setItem('rankNameStorage', 'Mistrzowska pierwsza klasa');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/17.png');
    }
    else {
        document.getElementById("image-rank").src = "Images/Ranks/18.png";
        sessionStorage.setItem('rankNameStorage', 'Elita światowa');
        sessionStorage.setItem('imageRankStorage', 'Images/Ranks/18.png');
    }
}


// Jeśli wybór w opcji dla mapy jest inny niż null wykonuj funkcję ChangeImageTournamentMap
if (document.getElementById("tournament-map") != null) {
    document.getElementById("tournament-map").addEventListener("change", ChangeImageTournamentMap);
}

// Funkcja zmieniająca grafikę w systemie po wyborze mapy turniejowej i przechowująca wybraną nazwę mapy, grafikę mapy, opis mapy, plan mapy podczas działania witryny
function ChangeImageTournamentMap() {
    if (document.getElementById("tournament-map").value == "Agency") {
        document.getElementById("image-map").src = "Images/Maps/agency.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Agency');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/agency.jpg');
        descriptionMap = "Agency jest to mapa typu \"Uprowadzenie\", która została dodana do gry w dniu 19 września 2013 roku jako część operacji Bravo. Była także dostępna podczas operacji Phoenix, Bloodhound oraz Hydra. Została zrobiona przez Puddy'ego oraz rck. Konflikt odbywa się w komercyjnym penthousie na szczycie wysokiego miejskiego wieżowca. Wraz z zakończeniem operacji Hydra mapa Agency została oficjalnie dodana do gry!";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/agency_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Ancient") {
        document.getElementById("image-map").src = "Images/Maps/ancient.jpeg";
        sessionStorage.setItem('imageMapNameStorage', 'Ancient');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/ancient.jpeg');
        descriptionMap = "Ancient jest to mapa typu \"Zamach bombowy\", która została dodana do gry w dniu 3 grudnia 2020 roku jako część operacji Broken Fang. Została zaprojektowana przez tavallinenlevyseppähitsaaja. Mapa znajduje się prawdopodobnie w Meksyku.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/ancient_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Cache") {
        document.getElementById("image-map").src = "Images/Maps/cache.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Cache');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/cache.jpg');
        descriptionMap = "Cache jest to mapa typu \"Zamach bombowy\". Została stworzona przez Sala \"Volcano\" Garozzo, Lenza Monath'a oraz Shawna Snellinga i finałowa wersja została wdrożona 16 maja 2011 roku do Counter-Strike Source. Do Counter-Strike: Global Offensive mapa weszła 1 grudnia 2012 roku.  Mapa ta posiada lokalizację w Prypeci (koło Czarnobyla) na Ukrainie. W dniu 18 października 2019 roku została dodana do gry nowa wersja mapy Cache.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/cache_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Dust 2") {
        document.getElementById("image-map").src = "Images/Maps/dust2.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Dust 2');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/dust2.jpg');
        descriptionMap = "Dust 2 jest to mapa typu \"Zamach bombowy\" występująca w serii gier Counter-Strike. Została stworzona przez Dave Johnston 13 marca 2001 roku. W dniu 9 października 2017 Valve poinformowało o pracach nad nową wersją Dusta 2. Następnego dnia nowa wersja tej mapy została dodana do wersji beta CS'a. Tydzień później Valve dodało nową wersję Dust 2 do oficjalnej gry! Dust 2 ma miejsce w medresie El Sahrij w Maroku (tak samo jak Dust czy Shortdust). Jest to najpopularniejsza i najbardziej grana mapa w CS. Jest najbardziej grana w trybach Deathmatch oraz Uproszczony. Celem terrorystów jest wysadzenie pomocy humanitarnej (m.in: ubrań dla ludzi i jedzenia). Antyterroryści jako cel muszą uniemożliwić to przeciwnej drużynie. Terroryści mają widok z ich respa na środek, więc zazwyczaj jest tak, że jedna osoba patrzy i mówi informację ilu antyterrorystów przeskoczyło na strefę detonacji B i czy któryś antyterrorysta idzie tunelem na B. Jak na większości mapach jest to dobre miejsce na pojedynki snajperskie. Podczas aktualizacji w dniu 18 października 2017 roku została wprowadzona nowa wersja mapy Dust 2.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/dust2_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Inferno") {
        document.getElementById("image-map").src = "Images/Maps/inferno.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Inferno');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/inferno.jpg');
        descriptionMap = "Inferno jest to mapa typu \"Zamach bombowy\". Została stworzona przez Chrisa \"Narby\" Auty'ego 27 czerwca 1999 roku. Inferno jest także dostępne w trybie Skrzydłowy. Inferno jest mapą, która jest położona we Włoszech (kiedyś w Hiszpania Hiszpanii). Terroryści jako obrany cel mają zniszczenie rakiet poukrywanych w różnych przedmiotach. Antyterroryści muszą temu zapobiec. Na tej mapie jak na większości map istnieje tzw. \"środek\" (w tym przypadku \"pierwszy środek\"). Zwykle na środek chodzi się ze snajperką, by ściągnąć kogoś ze przeciwników. Mapa posiada także tzw. \"drugi środek\", który znajduje się między pierwszym środkiem a apartamentami. Z drugiego środka bardzo dobrze widać balkon w apartamentach, co może bardzo dobrze pomóc w grze. \"Banan\" jest drogą prowadzącą na strefę detonacji B - nazwa wzięła się od kształtu drogi, która przypomina banana.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/inferno_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Mirage") {
        document.getElementById("image-map").src = "Images/Maps/mirage.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Mirage');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/mirage.jpg');
        descriptionMap = "Mirage jest to mapa typu \"Zamach bombowy\". Została stworzona przez Michaela Hulla 15 września 2010 roku i odtworzona przez Valve, a wydana 12 czerwca 2013 roku dla Counter-Strike: Global Offensive. Mirage oficjalnie został dodany dopiero w Counter-Strike: Global Offensive w dniu 12 czerwca 2013 roku. Jest jedną z czterech map, które znajdują się w Maroku (pozostałe trzy to Dust, Dust 2 oraz Shortdust). Celem terrorystów jest amunicja przeznaczona prawdopodobnie do czołgów, którą planują wysadzić. Antyterroryści mają za zadanie obronić teren na którym się ona znajduje. Mirage zazwyczaj jest najczęściej wybieraną mapą na trybach Turniejowy i Uproszczony.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/mirage_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Nuke") {
        document.getElementById("image-map").src = "Images/Maps/Nuke.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Nuke');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/Nuke.jpg');
        descriptionMap = "Nuke jest to mapa typu \"Zamach bombowy\". Została stworzona przez Jo \"Medic\" Bieg'a 5 listopada 1999 roku. Nuke jest także dostępny w trybie Skrzydłowy. Terroryści mają dwa cele: silosy na strefie detonacji (A) i reaktor na strefie (B). Antyterroryści muszą obronić zaopatrzenie w elektrowni przed terrorystami. Na niej znajduje się \"outside\" (czyli dwór), na którym zazwyczaj stoją snajperzy. Po dobrym zadymieniu dworu jest możliwe swobodne przejście na dolną strefę detonacji (B). Nie należy mylić pojęcia \"mid\" (środek), gdyż teoretycznie środek to jest wejście na strefę detonacji A. Lokalizacją nowej wersji Nuke'a jest tak jak poprzednio elektrownia jądrowa, lecz tym razem nie w Niemcy Niemczech, tylko w USA Stanach Zjednoczonych. Zmiana też dotknęła frakcji terrorystów oraz antyterrorystów. U terrorystów zmieniła się z Balkan na Phoenix Connexion, a u antyterrorystów z SAS na SEAL Team 6. Dopiero w późniejszym czasie SEAL Team 6 zostało zmienione na FBI.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/nuke_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Office") {
        document.getElementById("image-map").src = "Images/Maps/Office.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Office');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/Office.jpg');
        descriptionMap = "Office jest to mapa typu \"Uprowadzenie\". Została stworzona przez Alexa Manilova i wydana 26 sierpnia 2000 roku. Jest to jedna z dwóch map ze zakładnikami (druga to Agency), które znajdują się w obecnej puli turniejowej. Mapa ma miejsce w jakimś biurze w USA Stanach Zjednoczonych, co widać na dworze, na którym znajduje się właśnie flaga USA. Terroryści najprawdopodobniej za cel obrali sobie okup za zakładników, a antyterroryści muszą ich przechwycić do punktu ewakuacji.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/office_radar.png');
    }
    else if (document.getElementById("tournament-map").value == "Overpass") {
        document.getElementById("image-map").src = "Images/Maps/Overpass.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Overpass');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/Overpass.jpg');
        descriptionMap = "Overpass jest to mapa typu \"Zamach bombowy\". Została stworzona przez Valve i finałowa wersja została wdrożona 18 grudnia 2013 roku do Counter-Strike Global Offensive. Była jedną z map podczas operacji Bravo. Ma ona miejsce w Berlinie w Niemczech, co widać po niemieckich nazwach na mapie. Jest jedną z trzech map, które posiadają strefę detonacji na respie antyterrorystów (oprócz tej mapy posiadają to również mapy takie jak Cobblestone czy Dust). Celem terrorystów jest zniszczenie zaopatrzenia (ciężarówki) antyterrorystów poprze zniszczenie filara mostu, na którym stoi ich ciężarówka lub na terenie spawnu antyterrorystów.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/overpass_radar.jpg');
    }
    else if (document.getElementById("tournament-map").value == "Train") {
        document.getElementById("image-map").src = "Images/Maps/train.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Train');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/train.jpg');
        descriptionMap = "Train jest to mapa typu \"Zamach bombowy\". Została stworzona przez Chrisa Maira 23 grudnia 1999 roku. Train jest także dostępny w trybie Skrzydłowy. Terroryści próbują wysadzić pewne radioaktywne przedmioty umieszczone na wagonie. Przeciwna drużyna próbuje powstrzymać terrorystów. Nowy wygląd mapy Train został dodany w dniu 10 grudnia 2014 roku jako część operacji Vanguard (dostępna dla wszystkich graczy). W tym dniu została ona całkowicie przerobiona. Także 10 grudnia 2014 roku zmieniono jej grupę z rezerwowej na czynną służbę, zastępując mapę Nuke. Z kolei od 13 listopada 2017 mapę można zagrać w trybie Skrzydłowym.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/train_radar.jpg');
    }
    else {
        document.getElementById("image-map").src = "Images/Maps/Vertigo.jpg";
        sessionStorage.setItem('imageMapNameStorage', 'Vertigo');
        sessionStorage.setItem('imageMapStorage', 'Images/Maps/Vertigo.jpg')
        descriptionMap = "Vertigo jest to mapa typu \"Zamach bombowy\". Została stworzona przez Chrisa \"Narby\" Auty'ego i wydana 27 czerwca 1999 roku. W aktualizacji w dniu 13 listopada 2017 roku Vertigo zostało usunięte z puli map uproszczonych oraz turniejowych. Zaś 24 stycznia 2019 roku Vertigo zostało przywrócone, lecz tylko w wersji Skrzydłowy. Dopiero 19 marca tego samego roku Vertigo zostało dodane do trybu Turniejowego. Vertigo ma miejsce na drapaczu chmur w Nowym Jorku w USA Stanach Zjednoczonych, który był w budowie. Celem terrorystów jest zbombardowanie tego budynku, natomiast antyterroryści muszą temu zapobiec.";
        sessionStorage.setItem('descriptionMapStorage', descriptionMap);
        sessionStorage.setItem('imageMapRadarStorage', 'Images/Maps_radar/vertigo_radar.png');
    }
}

// Jeśli wybór w opcji dla strony konfliktu jest inny niż null wykonuj funkcję ChangeImageConflictSide
if (document.getElementById("conflict-side") != null) {
    document.getElementById("conflict-side").addEventListener("change", ChangeImageConflictSide);
}

// Funkcja zmieniająca grafikę w systemie po wyborze strony konfliktu, przechowująca nazwę wybranej strony konfliktu, zasady wygranej przez daną stronę konfliktu, czasy po których wyświetla się alert, nazwy przycisków i komentarze do nich, grafikę dla wybranej strony konfliktu
function ChangeImageConflictSide() {
    if (document.getElementById("conflict-side").value == "Antyterroryści") {
        document.getElementById("image-conflict-side").src = "Images/Conflict sides/antyterrorysta.png";
        sessionStorage.setItem('conflictSideStorage', 'Antyterroryści');
        var conflictSideDescription = "Antyterroryści mają nieco więcej sposób na wygraną w porównaniu do terrorystów. Po pierwsze, mogą zabić wszystkich przeciwników zanim ci podłożą bombę. Po drugie, mogą rozbroić bombę zanim ta wybuchnie. Trwa to 5 sekund z zakupionym zestawem do rozbrajania lub 10 sekund bez tego zestawu. Poza tym antyterroryści wygrają też wtedy, gdy przed upływem czasu rundy (1 minuta i 45 sekund) terroryści nie podłożą bomby, a przy życiu zostanie ktoś z antyterrorystów. Jeśli zostanie podłożona bomba po czym zginą wszyscy terroryści, to nie oznacza to wygranej antyterrorystów. Muszą oni rozbroić bombę. Jeśli nie zdążą tego zrobić przed jej wybuchem, to i tak przegrają i to nawet pomimo zabicia wszystkich przeciwników.";
        sessionStorage.setItem('conflictSideDescription', conflictSideDescription);
        var t1 = 10000;
        sessionStorage.setItem('time1', t1);
        var t2 = 5000;
        sessionStorage.setItem('time2', t2);
        sessionStorage.setItem('comment1', 'Naciśnij przycisk w celu rozbrojenia bomby. Zwykłe rozbrajanie bez specjalistycznego sprzętu trwa 10 sekund co zostanie zobrazowane alertem.');
        sessionStorage.setItem('comment2', 'Naciśnij przycisk w celu rozbrojenia bomby. Rozbrajanie ze specjalistycznym sprzętem trwa 5 sekund co zostanie zobrazowane alertem.');
        sessionStorage.setItem('buttonComment1', 'Rozbrój bombę bez zestawu do rozbrajania bomby');
        sessionStorage.setItem('buttonComment2', 'Rozbrój bombę z zestawem do rozbrajania bomby');
        sessionStorage.setItem('buttonComment2', 'Rozbrój bombę z zestawem do rozbrajania bomby');
        sessionStorage.setItem('imageConflictSideStorage', 'Images/Conflict sides/antyterrorysta.png');
    }
    else {
        document.getElementById("image-conflict-side").src = "Images/Conflict sides/terrorysta.png";
        sessionStorage.setItem('conflictSideStorage', 'Terroryści');
        var conflictSideDescription = "Terroryści mogą wygrać rundę na dwa sposoby - zabijając wszystkich przeciwników lub podkładając bombę na jednym z bombsite'ów i detonując ją (bomba wybucha po 40 sekundach od podłożenia). Terroryści mogą też wygrać podkładając bombę i zabijając wtedy wszystkich przeciwników, aby nie było nikogo, kto mógłby rozbroić tzw. \"paczkę\". Nie można też zapomnieć o tym, że bomba jest tylko jedna i na początku rundy jest ona losowo przydzielana jednemu z terrorystów. Nie ma znaczenia któremu, ponieważ \"paczkę\" można sobie przekazywać lub podnieść po śmierci zawodnika, który ją trzymał.";
        sessionStorage.setItem('conflictSideDescription', conflictSideDescription);
        var t1 = 40000;
        sessionStorage.setItem('time1', t1);
        sessionStorage.setItem('comment1', 'Naciśnij przycisk w celu podłożenia bomby. Bomba w grze wybucha po 40 sekundach co zostanie zobrazowane alertem.');
        sessionStorage.setItem('comment2', '');
        sessionStorage.setItem('buttonComment1', 'Podłóż bombę');
        sessionStorage.setItem('buttonComment2', '');
        sessionStorage.setItem('imageConflictSideStorage', 'Images/Conflict sides/terrorysta.png');
    }
}


// Jeśli wybór w opcji dla wyboru typu broni jest inny niż null wykonuj funkcję ChangeImageWeapon
if (document.getElementById("weapon-type") != null) {
    document.getElementById("weapon-type").addEventListener("change", ChangeImageWeapon);
}

// Funkcja zmieniająca grafikę w systemie po wyborze typu broni
function ChangeImageWeapon() {

    if (document.getElementById("weapon-type").value == "AK-47") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/AK-47.png";
    }
    else if (document.getElementById("weapon-type").value == "AUG") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/AUG.png";
    }
    else if (document.getElementById("weapon-type").value == "AWP") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/AWP.png";
    }
    else if (document.getElementById("weapon-type").value == "CZ75-Auto") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/CZ75-Auto.png";
    }
    else if (document.getElementById("weapon-type").value == "Desert Eagle") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Desert_Eagle.png";
    }
    else if (document.getElementById("weapon-type").value == "Dwie Beretty") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Dwie_Beretty.png";
    }
    else if (document.getElementById("weapon-type").value == "FAMAS") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/FAMAS.png";
    }
    else if (document.getElementById("weapon-type").value == "Five-SeveN") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Five-SeveN.png";
    }
    else if (document.getElementById("weapon-type").value == "G3SG1") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/G3SG1.png";
    }
    else if (document.getElementById("weapon-type").value == "Galil AR") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Galil_AR.png";
    }
    else if (document.getElementById("weapon-type").value == "Glock-18") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Glock-18.png";
    }
    else if (document.getElementById("weapon-type").value == "Granat błyskowo-hukowy") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Granat_blyskowo-hukowy.png";
    }
    else if (document.getElementById("weapon-type").value == "Granat dymny") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Granat_dymny.png";
    }
    else if (document.getElementById("weapon-type").value == "Granat zaczepny") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Granat_zaczepny.png";
    }
    else if (document.getElementById("weapon-type").value == "Koktajl Mołotowa") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Koktajl_molotowa.png";
    }
    else if (document.getElementById("weapon-type").value == "M249") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/M249.png";
    }
    else if (document.getElementById("weapon-type").value == "M4A1-S") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/M4A1-S.png";
    }
    else if (document.getElementById("weapon-type").value == "M4A4") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/M4A4.png";
    }
    else if (document.getElementById("weapon-type").value == "MAC-10") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/MAC-10.png";
    }
    else if (document.getElementById("weapon-type").value == "MAG-7") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/MAG-7.png";
    }
    else if (document.getElementById("weapon-type").value == "MP5-SD") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/MP5-SD.png";
    }
    else if (document.getElementById("weapon-type").value == "MP7") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/MP7.png";
    }
    else if (document.getElementById("weapon-type").value == "MP9") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/MP9.png";
    }
    else if (document.getElementById("weapon-type").value == "Negev") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Negev.png";
    }
    else if (document.getElementById("weapon-type").value == "Nova") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Nova.png";
    }
    else if (document.getElementById("weapon-type").value == "Obrzyn") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Obrzyn.png";
    }
    else if (document.getElementById("weapon-type").value == "P2000") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/P2000.png";
    }
    else if (document.getElementById("weapon-type").value == "P250") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/P250.png";
    }
    else if (document.getElementById("weapon-type").value == "P90") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/P90.png";
    }
    else if (document.getElementById("weapon-type").value == "PP-Bizon") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/PP-Bizon.png";
    }
    else if (document.getElementById("weapon-type").value == "Rewolwer R8") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/R8_Revolver.png";
    }
    else if (document.getElementById("weapon-type").value == "SCAR-20") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/SCAR-20.png";
    }
    else if (document.getElementById("weapon-type").value == "SG 553") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/SG_553.png";
    }
    else if (document.getElementById("weapon-type").value == "SSG 08") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/SSG_08.png";
    }
    else if (document.getElementById("weapon-type").value == "Tec-9") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Tec-9.png";
    }
    else if (document.getElementById("weapon-type").value == "UMP-45") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/UMP-45.png";
    }
    else if (document.getElementById("weapon-type").value == "USP-S") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/USP-S.png";
    }
    else if (document.getElementById("weapon-type").value == "Wabik") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Wabik.png";
    }
    else if (document.getElementById("weapon-type").value == "XM1014") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/XM1014.png";
    }
    else if (document.getElementById("weapon-type").value == "Zeus x27") {
        document.getElementById("image-weapon-type").src = "Images/Weapon/Zeus_x27.png";
    }
}