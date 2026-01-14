// ÖRNEK 1: TV fiyati => "$500", laptop fiyati=> "$750" seklinde STRING OLARAK GELEN ÜRÜN FİYATLARINI toplayiniz

let tv: string = "$500";
let laptop: string = "$750";

// \D ile rakam olmayan herseyi sectik ve hiclikle  değistiriyoruz yani siliyoruz
let tvFiyati : string = tv.replaceAll(/\D/g,"");//"500"
let laptopFiyat : string = laptop.replaceAll(/\D/g,"");//"750"

console.log(tvFiyati + laptopFiyat);//500750

//Number() fonksiyonu ile string olan sayilari toplama yapabilmek icin number tipine dönüstürmeliyiz

let toplamFiyat : number =  Number(tvFiyati) + Number(laptopFiyat);
console.log("tv fiyati =",tvFiyati);//500
console.log("laptop fiyati =", laptopFiyat);//750
console.log("toplam fiyat =", toplamFiyat);//1250


//ORNEK 2:Senaryo: Güvenlik gereği kullanıcının kredi kartı numarasının
// sadece son 4 hanesini göstermek, geri kalanını yıldızlamak istiyoruz.

//Kart numarasi ==> "1234 6789 1234 6789"
//Kart numarasi ==>  **** **** **** 6789

let cardNum: string = "1234 6789 1234 6789";
//console.log(cardNum.substring(0,15));//1234 6789 1234

let firstPart : string =cardNum.substring(0, 15).replaceAll(/[0-9]/g,"*");
console.log("firstPart =>",firstPart);//**** **** ****

let lastPart : string = cardNum.substring(15);
console.log("lastPart =>",lastPart);//6789

//Birinci yol
let result1 = firstPart + lastPart;
console.log("result1 =>", result1);//**** **** **** 6789

//ikinci yol
let result2 = firstPart.concat(lastPart);
console.log("result2 =>", result2);//**** **** **** 6789