function inscription(){
    var Pseudo = document.getElementById("Start").value;
    alert('Votre pseudo pour cette partie est '+Pseudo+', bonne pêche !');

    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = traitement_inscription;
    httpRequest.open('GET', 'https://sae-301.azurewebsites.net', true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({"Pseudo": Pseudo});
    httpRequest.send(data);
}
    
    //function traitement_inscription(){
        //if (httpRequest.readyState === XMLHttpRequest.DONE) {
        //if (httpRequest.status === 200) {
        //alert(httpRequest.responseText);
        //} else {
        //alert('Il y a eu un problème avec la requête.');
        //}
        //}
        //}