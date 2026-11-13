// oefening 1
const leeftijd = 17;
if (leeftijd < 16) {
    console.log ("geen toegang");
} 
else if (leeftijd < 18) {
    console.log ("toegang onder begeleiding.");
    }
    else { console.log ("volledige toegang.");
     }

     //oefening 2
    const temperaturen = [19, 22, 26, 21, 29, 18];

for (const t of temperaturen) {
  if (t >= 25) {
    console.log(`WAARSCHUWING: Hoge temperatuur (${t}°C)`);
  } else {
    console.log(`Temperatuur normaal (${t}°C)`);
  }
}
//oefening 3
const getallen = [12, -5, 8, -3, 0, 19, -11];
const positief = [];
const negatief = [];

for (const getal of getallen) {
  if (getal > 0) {
    positief.push(getal);
  } else if (getal < 0) {
    negatief.push(getal);
  }
}

console.log("Positief:", positief);
console.log("Negatief:", negatief);

//oefening 4
let spaargeld = 250;
let maanden = 0;

while (spaargeld < 1200) {
  spaargeld += 150;
  maanden++;
}

console.log("Aantal maanden:", maanden);
console.log("Spaarsaldo: €" + spaargeld);

// Oefening 6: Pincode blokkeren na 3 pogingen
const pincodes = ["1111", "2222", "3333", "4567"];
const juisteCode = "4567";
let poging = 0;
let foutePogingen = 0;

while (true) {
  if (pincodes[poging] === juisteCode) {
    console.log("Toegang verleend");
    break;
  }
  foutePogingen++;
  if (foutePogingen === 3) {
    console.log("Kaart geblokkeerd!");
    break;
  }
  poging++;
}

// Oefening 7: Som van invoer tot 0
const invoer = [15, 20, 5, 0, 100, 50];
let totaal = 0;
let i = 0;

do {
  totaal += invoer[i];
  i++;
} while (invoer[i] !== 0);

console.log("Totaal:", totaal);