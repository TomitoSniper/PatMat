let figurky = document.getElementById("figurky");
let pocetPat = document.getElementById("pocetPat");
let pocetMat = document.getElementById("pocetMat");

let pat = "<img src='img/pat.png'>";
let mat = "<img src='img/mat.png'>";

let kodFigurek = "";
let pocetPatFigurek = 0; 
let pocetMatFigurek = 0; 

let i = 0;
while (i < 5) {
  i++;
  kodFigurek += "<div>" + pat + mat + "</div>";
  kodFigurek += "<div>" + mat + pat + "</div>";  
  pocetPatFigurek += 2; 
  pocetMatFigurek += 2;
}

figurky.innerHTML = kodFigurek; 
pocetPat.innerText = pocetPatFigurek; 
pocetMat.innerText = pocetMatFigurek;    