//Number() fonksiyonu String data tipini number data tipine dönüstürür

//örnek 1 ==> gecerli bir stringi dönüstürme
let price : string = "200";
let numericPrice :number = Number(price);
console.log(numericPrice);//200

//örnek 2 ==> gecersiz bir stringi dönüstürme
//Not => abc15 stringi bir sayıya dönüstürülemez bu yüzden NaN verir
let invalidString : string ="abc15";
let invalidNumber : number = Number(invalidString);
console.log(invalidNumber);//NaN

//örnek 3==> boolean i stringe dönüstürme
let booleanValue : boolean = true;
let booleanToString : string = String(booleanValue);
console.log(booleanToString.length);//4
console.log(booleanValue.length); //undefined
console.log(booleanToString.length);//true artik bir string oldugu icin length özelligini kullandik ve 4 aldık


//Diger datatiplerini booleana dönüstürme
//örnek 4 ==>
let numZero = 0;
let booleanZero : boolean=Boolean(numZero);
console.log(booleanZero);//0 sayisi false kabul edilir

let num : number = -5;
let booleanNumber: boolean = Boolean(num);
console.log(booleanNumber);//true 0 dan farkli tüm sayilar true kabul edilir

//örnek 5==>
let nonEmptyString =" ";
let stringToBoolean = Boolean(nonEmptyString);
console.log(stringToBoolean);//space dahil her türlü karakter iceren stirnglerde true kabul edilir


let EmptyString ="";
let emptyStringToBoolean = Boolean(EmptyString);
console.log(emptyStringToBoolean);//Hiclik false kabul edilir, harici her türlü string true kabul edilir