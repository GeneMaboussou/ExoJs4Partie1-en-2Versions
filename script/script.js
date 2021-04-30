// sélectionner l'élément input et récupérer sa valeur
function displayAlert(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let city = document.getElementById('city').value;

alert ('Nom : ' + lastName + '\nPrénom : ' + firstName + '\nVille : ' + city);
}