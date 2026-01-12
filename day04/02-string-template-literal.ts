//Syntax ==> backtick icinde ${degisken} yapisini kullanabiliriz
//String literal kullanabilmek icin backtick olusturmaliyiz, diger stringlerde kullanamayiz
//Backtick isareti koymak icin  ===> ``
// Altgr + x , Altgr + , Alt + 96

let isim = "Emre";
let yas = 25;
let sehir = "Stuttgart";

const eskiHali =
  "Merhaba, benim adım " +
  isim +
  ". " +
  yas +
  " yasindayim ve " +
  sehir +
  " da yasiyorum.";
console.log(eskiHali);

const yeniHali = `Merhaba, benim adım ${isim}. ${yas} yasındayim ve ${sehir} 'da yasiyorum`;
console.log("String literal ==>", yeniHali);

// String literal sayesinde coklu satirlarda daha düzenli calisabiliriz

const rapor = `
-------------------------
PERSONEL RAPORU
-------------------------
Adi     : ${isim}
Yasi    : ${yas}
Sehri   : ${sehir}
`;
console.log(rapor);

/* EXAMPLE : kullaniciya string literal kullanarak kdvli tutari dinamik olarak hesaplayarak asagidaki mesaji verelim

Ürününüzün KDV'siz fiyatı 100 TL'dir.
Ödenecek Toplam Tutar (KDV dahil):  120 TL.
 */


let kdvOrani : number = 0.5;
let urunFiyati : number = 80;

const fiyatMesaji = `Ürününüzün KDV'siz fiyatı ${urunFiyati} TL'dir.Ödenecek Toplam Tutar (KDV dahil):  ${urunFiyati*(1+kdvOrani)} TL.`;
console.log(fiyatMesaji);