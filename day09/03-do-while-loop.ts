/*
==> do-while loop block undaki kodun en az bir kez calismasi gereken durumlarda kullanilir. 
Yani loop icindeki kodlar kosul yanlis bile olsa en az bir kez calistirilir


 while loop syntax

baslangic degeri;
while(loop calisma kurali){
     calisacak kodlar
     artirma / azaltma
}
*/
/*do -while loop syntax
baslangic degeri;
do{
    calismasi istenen kodlar
      artirma / azaltma
}while(loop calisma kurali);
*/

// GÖREV: do...while kullanarak oyuncunun canı bitene kadar oyunun devam etmesini sağlayın.
let can: number = 3;

do {
  console.log("Oyun devam ediyor, Kalan can", can);

  can--;
} while (can > 0);

console.log("Game Over!!");

// GÖREV: do...while kullanarak ürün listesini dolaşın ve içinde "süt" geçen ürünleri yeni bir arraye ekleyin.

let urunler: string[] = [
  "süt",
  "tam yaglı süt",
  "ekmek",
  "sütlü cikolata",
  "peynir",
  "yogurt",
];

let sutUrunleri: string[]=[];
let index : number =0;

do {
  let urun : string =  urunler[index];

  if (urun.includes("süt")) {
    sutUrunleri.push(urun);
  }

  index++;
} while (index <urunler.length);
console.log("Sut urunleri ",sutUrunleri);//Sut urunleri  [ 'süt', 'tam yaglı süt', 'sütlü cikolata' ]