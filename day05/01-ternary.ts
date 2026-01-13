//SYNTAX
// condition ? valueIfTrue : valueIfFalse

let age: number = 10;

// UZUN yöntem
if (age >= 18) {
  console.log("Yetiskin");
} else {
  console.log("Yetiskin degil");
}

// KISA yöntem ==> Ternary
// condition   ? valueIfTrue : valueIfFalse

let message: string = age >= 18 ? "Yetiskin" : "Yetiskin degil";

console.log(message);

//EXAMPLE :Verilen bir notu kontrol edip gecip gecmedigini konsole yaziriniz
//gecme notu 50

let not: number = 13;
let gecmeSiniri = 50;
let sonuc = not >= 50 ? "Gecti" : "Kaldi";
console.log(`Ogrenci notu ${not}. Sonuc ${sonuc}`);

//EXAMPLE : Eğer ürün fiyatı 100 TL'den fazlaysa %10 indirim uygulansın, değilse aynı kalsın."
let urunFiyati: number = 90;
let guncelFiyat = urunFiyati > 100 ? urunFiyati * 0.9 : urunFiyati;
console.log(`Odemeniz gereken tutar ${guncelFiyat} TL`);