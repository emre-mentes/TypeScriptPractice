
//Verilen 2 sayiyi toplayan ve sonucu return eden function olusturalim
function addTwoNumber(a: number, b: number): number {
  return a + b;
}

console.log(addTwoNumber(2, 3));

//Verilen 3 sayiyi toplayan ve sonucu return eden function olusturalim
function addThreeNumber(a: number, b: number, c: number): number {
  return a + b + c;
}
console.log(addThreeNumber(2, 3, 5));

/*
    Rest Parameter 
    Typescript / JavaScript te bir fonksiyonun degisken sayida arguman kabul etmesine izin veren bir özelliktir

    1) Rest parameter arka planda Array yapisini kullanir,
    yani fonksiyon icinde rest parameteri bir array gibi kullanabiliriz (length, push, join..)

    2) Bir fonksiyonda birden fazla rest parameter kullanilmaz, cünkü rest parameter verilen tum argumanlari toplar

    3) Rest parameter her zaman en son parametre olmalidir
*/

function sumNumbers(...numbers: number[]): number {
  let total: number = 0;

  for (let num of numbers) {
    total = total + num;
  }
  return total;
}
console.log(sumNumbers(3, 2, 5, 7));


//Verilen isimleri consolea yazdiran bir function olusturalim

function printNames(...names:string[]):void{
console.log(names);
}
printNames("Ali");
printNames("Ali","Veli");
printNames("Ali","Veli","Ayse");

// verilen parametrelerin sayısını döndüren bir function tanimlayiniz.
function countElements(...elements:any[]):number{
   return elements.length;
}

console.log(countElements());//0
console.log(countElements("ali",1,true));//3
console.log(countElements(2,3,false));//3