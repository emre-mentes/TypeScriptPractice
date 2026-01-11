// ------arithmetic operators-------------
// GÖREV:
// İki sayı tanımla: sayi1 ve sayi2
// Bu iki sayıyı kullanarak aşağıdaki işlemleri yap:
// 1. Toplama
// 2. Çıkarma
// 3. Çarpma
// 4. Bölme
// 5. Kalan (mod)
// Sonuçları console.log ile yazdır

let sayi1 : number = 10;
let sayi2 : number = 3;

//toplama
console.log("Toplama => ", sayi1+sayi2);//13

//cıkarma
console.log("Cıkarma => ",sayi1-sayi2);//7

//Carpma
let carpim : number = sayi1*sayi2;
console.log("Carpim => ",carpim);

//Bölme
let bolum : number = sayi1 / sayi2;
console.log("bolum => ", bolum);//3.3333333333333335

//mod alma
let kalan : number = sayi1 % sayi2;
console.log("Kalan => ",kalan);


// ------comparison operators-------------
console.log("====comparison operators======")
console.log("5>3",5>3);
console.log("5<3",5<3);
console.log("5>=3",5>=3);
console.log("5<=4",5<=4);


//------- loose equality (==) & strict equality(===) -------------
console.log("------ loose equality (==) &  strict equality(===) ----");
let num1 : any =13;
let num2 : any ="13";

console.log(num1 == num2);//true (sadece degerleri karsilastirir tur farkini gözardı eder)

console.log(num1 === num2);//false (hem dagerleri karsilastirir hemde turleri karsilastirir)