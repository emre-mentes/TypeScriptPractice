let ogrenciListesi: string[] = ["Azer", "Buket", "Beyza", "Hüseyin", "Suphi"];
console.log("ogrenci listesi ilk hali", ogrenciListesi);

//includes() methodu bir arrayin icinde belirli bir elemanin olup olmadigini kontrol eder
let azerVarMi : boolean =  ogrenciListesi.includes("Azer");
console.log("Azer array de varmi", azerVarMi);//true

let mehmetVarMi : boolean =  ogrenciListesi.includes("Mehmet");
console.log("Mehmet array de varmi", mehmetVarMi);//false

//join() methodu bir arrayin elemanlarini birlestirerek tek bir string haline getirir
//default olarak elemanlar arasina virgul koyar
//istenirse farkli bir ayirici da belirtilebilir    
let ogrencilerVirgullu : string =ogrenciListesi.join();
console.log("Virgullu ogrenci listesi",ogrencilerVirgullu);//Virgullu ogrenci listesi Azer,Buket,Beyza,Hüseyin,Suphi

let ogrencilerBitisik : string =ogrenciListesi.join("");
console.log("Bitisik ogrenciler listesi ",ogrencilerBitisik);//Bitisik ogrenciler listesi  AzerBuketBeyzaHüseyinSuphi

let ogrencilerTireli : string =ogrenciListesi.join("-");
console.log("ogrencilerTireli ", ogrencilerTireli);//ogrencilerTireli  Azer-Buket-Beyza-Hüseyin-Suphi


//slice() methodu bir arrayin belirli bir bolumunu ayri bir array olarak dondurur
// dizinin belirtilen baslangic indexinden baslar ve bitis indexine kadar (bitis indexi dahil degil) devam eder ve orjinal arrayi değistirmez
let aradakiOgrenciler : string [] =ogrenciListesi.slice(2,4);
console.log("aradakiOgrenciler", aradakiOgrenciler);// [ 'Beyza', 'Hüseyin' ]

let ucuncuİndexTenSonaKadarOgrenciler : string [] =ogrenciListesi.slice(3);
console.log("ucuncuİndexTenSonaKadarOgrenciler", ucuncuİndexTenSonaKadarOgrenciler);//ucuncuİndexTenSonaKadarOgrenciler [ 'Hüseyin', 'Suphi' ]

//slice() methodunda negatif indexler sondan geriye doğru sayar
// -1 son elamani, -2 son iki elemani vs. ifade eder
let sonOgrenci : string[] = ogrenciListesi.slice(-1);
console.log("sonOgrenci", sonOgrenci);

//soniki oğrenci icin
let sonIkiOgrenci : string[] = ogrenciListesi.slice(-2);
console.log("sonIkiOgrenci", sonIkiOgrenci);//[ 'Hüseyin', 'Suphi' ]


//toString() methodu bir arrayin elemanlarini birlestirerek tek bir string haline getirir
//join() methodun varsayilan haline benzer
let ogrenciListesiString : string = ogrenciListesi.toString();
console.log("ogrenciListesiString", ogrenciListesiString);//ogrenciListesiString Azer,Buket,Beyza,Hüseyin,Suphi

export {};