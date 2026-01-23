
/*
3) Arrow Function 
  - => kullanilarak kısayoldan tanimlanan functionlardir. 
  - Arrow Function aslında bir Function Expressiondir(değiskene atanir)
  - Function expression yönteminde fonksiyonlar yukari cekilmez (No Hoisting), Bu yüzden kullanim kurali Expression yöntemindeki gibidir. Once tanimla sonra cağır
  Syntax:
  const variableName = ()=>{...calisacak kodlar}
*/

//testBaslat(); tanimlanmadan önce cağiramayiz (no hoisting)
const testBaslat = () => {
  console.log("Test basariyla baslatildi...");
};

testBaslat();

//Ornek: iki sayiyi toplayan ve toplami return eden bir fonksiyon olusturalim

//const topla = (a:number,b:number):number=>{ return a+b   };

//arrow function tanimlarken eger fonksiyonumuz tek bir satirdan olusuyorsa süslü parantezleri {} ve return keywordunu silebilirsiniz.
const topla = (a: number, b: number): number => a + b;
console.log(topla(3, 5));

//Ornek : Bir sayinin karesini hesaplayan ve return eden bir arrow function olusturunuz.

//const square = (num:number):number=>{ return num*num};
const square = (num: number): number => num * num;
console.log(square(3));

//Ornek : Verilen ismi capitalize yapan ve return eden bir arrow function olusturunuz.
const capitalizeName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(capitalizeName("aLİ")); //Ali

//Ornek : Verilen 2 sayidan hangisinin buyuk oldugunu return eden bir arrow function yaziniz
const maxNumber = (a:number, b:number):number => a > b ?  a : b;
console.log(maxNumber(5,10));//10
console.log(maxNumber(15,10));//15

//Ornek : Verilen 1 sayinin cift olup olmadigini kontrol eden bir arrow function yaziniz
const isEven = (num:number):boolean => num%2===0;
console.log(isEven(4));//true
console.log(isEven(7));//false

//aynı kodun ternary cözümü
const isEvenTernary =(num:number):boolean => num % 2 === 0 ? true : false;
console.log(isEvenTernary(5));//false

//Ornek :Verilen 2 sayinin ortalamasini bulan ve sonucu return eden bir arrow function yaziniz
const ortalamaHesapla =(sayi1:number, sayi2:number):number => (sayi1+sayi2)/2;
console.log(ortalamaHesapla(6,8));//7