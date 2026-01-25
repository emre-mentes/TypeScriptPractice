
let suankiZaman: Date = new Date();
console.log("Suanki zaman =>", suankiZaman); //Suanki zaman => 2026-01-25T22:50:39.838Z
console.log("Suanki zaman tolocaleString()=>",suankiZaman.toLocaleString());//Suanki zaman tolocaleString()=> 23.01.2026 22:08:1400:00:00
//Tarih saati icinde bulunulan locale sisteme göre yazdirir


//Belirli bir tarihi nasil olusturabiliriz?
//Ocak 0, Subat 1, Mart 2...
let belirliBirTarih: Date = new Date(2027, 9, 19);
console.log("belirliBirTarih 2027,9,19", belirliBirTarih);


//Belirli bir tarih ve saati nasil olusturabiliriz?
let tamZaman :Date = new Date(2027,9,19,15,45,0);
console.log("TamTarih ve zaman",tamZaman);//2027-10-19T12:45:00.000Z


//Ocak =>0
let testTarihi:Date = new Date(1990,10,22);
console.log(testTarihi.toLocaleString());//15.01.2024 00:00:00


//Date objectinin icindeki yıl bilgisini verir
console.log("getFullyear=>",testTarihi.getFullYear());//1990


//Date objectinin icindeki ay bilgisini 0-11 arasinda döner, Ocak=0,Subat 1...
console.log("getMonth=>", testTarihi.getMonth());//10
console.log("getMonth=>", testTarihi.getMonth()+1);11


//getDate=> 15 ==> Ayin kacinci günü oldugunu döner
console.log("getDate=>", testTarihi.getDate());//getDate=> 22


//getDay=> Haftanin gününü index olarak verir.
//0=Pazar, 1=Pazartesi, 2=Sali...
console.log("getDay=>", testTarihi.getDay());//getDay=> 4

//getHours()=>Date objectindeki saat bilgisini verir
console.log("getHours=>", testTarihi.getHours());//getHours=> 0


testTarihi.setFullYear(2026);
console.log("setFullYear methodu sonrasi ==>", testTarihi);// 2026-11-21T23:00:00.000Z

testTarihi.setDate(7);
console.log("setDate methodu sonrasi ==>", testTarihi);// 2026-11-06T23:00:00.000Z

testTarihi.setHours(9);
console.log("setHours methodu sonrasi ==>", testTarihi); // 2026-11-07T08:00:00.000Z