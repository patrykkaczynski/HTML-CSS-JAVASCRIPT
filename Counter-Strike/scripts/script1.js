//Przypisanie wartości przechowywanych podczas trwania sesji do elementów dla zakładki Rangi
    document.getElementById("selected-rank-name").innerHTML = "Wybrana ranga: " + sessionStorage.getItem('rankNameStorage');
    document.getElementById("selected-image-rank").src = sessionStorage.getItem('imageRankStorage');
    

