
/*function pretraga(){
  let fraza = document.getElementById("fraza").value;
  let ispisInput = document.getElementById("ispis")
  let niz=[ ];
fetch("https://api.lyrics.ovh/suggest/fraza")
.then(response => response.json())
.then(odgovor =>{
  //console.log(data)
  for(let i=0; i<odgovor.data.length; i++){
    if(odgovor.data[i].includes(fraza.value)){
    niz.push(odgovor.data[i])
    ispisInput.innerHTML = niz
  }
}
return niz
})

}

fraza.addEventListener("keyup", pretraga)*/

const frazaInput = document.getElementById("fraza");
const ispisInput = document.getElementById("ispis");
const loaderPolje = document.getElementById("loader");
//nisam smeo da odredim value van funkcije, vec u funkciju, van funkcije pamti poslednju vrednost ili prvu, ali pamti...
function pretraga(){
//e.preventDefault()
loaderPolje.style.display = "block";
fetch(`https://api.lyrics.ovh/suggest/${frazaInput.value}`)
.then(response => response.json())
.then(odgovor =>{
  loaderPolje.style.display = "none";
  const sugestije = odgovor.data
  let sablon = ``
  for(let i = 0; i < sugestije.length; i++){  //i < 10, da stavim izbaca 10 rezultata. Ovako svi, a ima ih 15
    const pesma = sugestije[i] //dole u sablon mogo sam da pisem i sugestije[i] umesto pesma
    sablon += `
<div>
<h3>${pesma.artist.name} - ${pesma.title}</h3>
<p>Sa albuma: ${pesma.album.title}</p>
<img src="${pesma.album.cover}" alt="Omot albuma">
</div>
<div>
<audio src="${pesma.preview}" controls></audio>
<a href="${pesma.link}" title="Deezer" target="_blank"><img src="http://gigiradics.com/wp-content/uploads/2015/04/deezer-logo-circle.png" height="50"></a>
</div>
<div>
<p>Trajanje: ${sugestije[i].duration}</p>
<p>Eksplicitan sadrzaj: ${sugestije[i].explicit_lyrics ? "da" : "ne" }</p>
</div>
    `
  }
  ispisInput.innerHTML = sablon
  //console.log(odgovor.data)
})

}
frazaInput.addEventListener("input", pretraga)
