/*const naruci = function() {

}
const naruci = () => {

}*/
//na vrhu selektori
const naslov = document.getElementById("pesma")
const izvodjac = document.getElementById("autor")
const ispisLiriksa = document.getElementById("ispis")
const dugme = document.getElementById("dugme")

function pretraga(){
  const pesma = naslov.value
  const autor = izvodjac.value
  const url = `https://api.lyrics.ovh/v1/${autor}/${pesma}`
fetch(url)  //get rekvest u osnovi
//fetch metoda ugradjena, prosledjuje mu se adresa odakle dovlaci podatke
/*.then((response) => {
  return response.json()
})*/
//dva .then metoda izvrsavaju nakon sto podatak stigne, sirov podatak pretvaramo u json, a posle podatak koristimo
//jedini atribut koji ima je lyrics, tekst pesama
.then(response => response.json())
.then(data => {
  ispisLiriksa.innerText = data.lyrics
//console.log(data)
})
}
dugme.addEventListener("click", pretraga)


//dole moje
/*if(title.value || artist.value){
  ispis.innerHTML = "Tekst: " + data;
}
else {
ispis.innerHTML = "Nema pesme";
}

})*/
