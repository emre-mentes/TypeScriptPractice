/*
SYNTAX :

for (let index in arrayname) {
// calısması istenen kodlar 
}

*/
const meyveler: string[] = ["elma", "armut", "muz", "kivi"];

for (let index in meyveler) {
  console.log(index); //Elemanin index nosunu yazdirir
  console.log(meyveler[index]);
}

// GÖREV: Notlar dizisini dolaşarak 50 ve üzeri not alanların ve 50 altı not alanların sayısını hesaplayın.
let notlar: number[] = [45, 70, 30, 85, 60, 40];

let gecenSayisi: number = 0;
let kalanSayisi: number = 0;

for (let index in notlar) {
  if (notlar[index] >= 50) {
    gecenSayisi++;
  } else {
    kalanSayisi++;
  }
}

console.log(`Gecen ogrenci sayisi = ${gecenSayisi}`);
console.log(`Kalan ogrenci sayisi = ${kalanSayisi}`);