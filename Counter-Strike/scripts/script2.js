//Przypisanie wartości przechowywanych podczas trwania sesji do elementów dla zakładki Rozgrywka
document.getElementById("selected-conflict-side").innerHTML = sessionStorage.getItem('conflictSideStorage');
document.getElementById("selected-conflict-description").innerHTML = sessionStorage.getItem('conflictSideDescription');
var time1 = sessionStorage.getItem('time1');
var time2 = sessionStorage.getItem('time1');
document.getElementById("comment-defuse-plant").innerHTML = sessionStorage.getItem('comment1');
document.getElementById("comment-defuse").innerHTML = sessionStorage.getItem('comment2');
document.getElementById("defuse-plant-button").innerHTML = sessionStorage.getItem('buttonComment1');
document.getElementById("defuse-button").innerHTML = sessionStorage.getItem('buttonComment2');
document.getElementById("selected-conflict-side-image").src = sessionStorage.getItem('imageConflictSideStorage');

//Wykonywanie funkcji DisplayAlert po naciśnięciu przycisku defuse-plant-button
document.getElementById("defuse-plant-button").addEventListener("click", DisplayAlert);

//Funkcja wykonująca funkcję DisplayInformation po czasie time1
function DisplayAlert(){
    setTimeout(DisplayInformation, time1);
}

//Funkcja wyświetlająca alert po czasie time1
function DisplayInformation() {
    if (sessionStorage.getItem('conflictSideStorage') == "Antyterroryści") {
        alert('Bomba został rozbrojona. Antyterroryści wygrywają rundę!!!');
    }
    else
    {
        alert('Bomba został zdetonowana. Terroryści wygrywają rundę!!!');
    }
}

//Wykonywanie funkcji DisplayAlert1 po naciśnięciu przycisku defuse-button
document.getElementById("defuse-button").addEventListener("click", DisplayAlert1);

//Funkcja wykonująca funkcję DisplayInformation1 po czasie time2
function DisplayAlert1() {
    if (sessionStorage.getItem('conflictSideStorage') == "Antyterroryści") {
        setTimeout(DisplayInformation1, time2);
    }
}

//Funkcja wyświetlająca alert po czasie time2
function DisplayInformation1() {
        alert('Bomba został rozbrojona. Antyterroryści wygrywają rundę!!!');
}
