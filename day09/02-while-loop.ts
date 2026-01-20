// while loop
// Loopun ne zaman durduralacağı en bastan bilinmiyorsa bir kosula göre durdurulmasi isteniyorsa tercih edilebilir

/* for loop syntax
for(baslangic degeri; loop calisma kurali; artirma / azaltma){
    calisacak kodlar
    }
*/
/* while loop syntax
baslangic degeri;
while(loop calisma kurali){
     calisacak kodlar
     artirma / azaltma
}
*/

//ornek : while loop ile  0 dan 4 (dahil) e kadar console a yazdiriniz

//while loop baslangic degeri
let counter: number = 0;

while (counter < 5) {
  //calismasi istenen kodlari
  console.log(`while loop counter => ${counter}`);

  //artirma / azaltma
  counter++;
}

//GÖREV:1'den 6'ya (dahil) kadar olan ÇİFT sayıları while döngüsü ile console'a yazdır.

let sayi: number = 1;

while (sayi < 7) {
  if (sayi % 2 === 0) {
    console.log(sayi);
  }
  sayi++;
}

// =============================================================================
// GÖREV: 1000 TL'lik bir bakiyeden, para bitene kadar her defasinda 200 TL çeken ve bakiye 200 TL'den az kaldığı an (limit yetersizleşince) sistemi durduran kodu yaziniz
// =============================================================================

let hesapBakiyesi: number = 1000;
let cekilenMiktar: number = 200;

while (hesapBakiyesi >= cekilenMiktar) {
  //hesapBakiyesi cekilen miktardan buyuk veya esit oldugu müddetce calismaya devam et
  hesapBakiyesi = hesapBakiyesi - cekilenMiktar;

  console.log(
    `${cekilenMiktar} TL cekildi. Yeni Bakiyeniz ${hesapBakiyesi} TL`,
  );
}
console.log("Limit yetersiz!!, Para cekme islemi sonlandirildi!!");