
let ogrenciListesi : string [] = ["Azer","Buket","Beyza","Hüseyin","Suphi"];
console.log("ogrenci listesi ilk hali",ogrenciListesi);

//pop() Arrayin sonundaki elemani siler
ogrenciListesi.pop();
console.log(ogrenciListesi);//[ 'Azer', 'Buket', 'Beyza', 'Hüseyin' ]

//push() Arrayin sonuna eleman ekler
ogrenciListesi.push("Mehmet");
console.log(ogrenciListesi);//[ 'Azer', 'Buket', 'Beyza', 'Hüseyin', 'Mehmet' ]

//shift() Arrayin basindaki elemani siler
ogrenciListesi.shift();
console.log(ogrenciListesi);//[ 'Buket', 'Beyza', 'Hüseyin', 'Mehmet' ]

//unshift() Arrayin basina eleman/elemanlar ekler
ogrenciListesi.unshift("Yunus","Ali");
console.log(ogrenciListesi);//[ 'Yunus', 'Ali', 'Buket', 'Beyza', 'Hüseyin', 'Mehmet' ]

//reverse() Arrayin elemanlarinin sırasini tersine cevirir
ogrenciListesi.reverse();
console.log(ogrenciListesi);//[ 'Mehmet', 'Hüseyin', 'Beyza', 'Buket', 'Ali', 'Yunus' ]

//sort() Elemanlari alfabetik sıraya göre dizer
ogrenciListesi.sort();
console.log(ogrenciListesi);//[ 'Ali', 'Beyza', 'Buket', 'Hüseyin', 'Mehmet', 'Yunus' ]

//splice(nereden baslayacağnın indexi, kactane eleman silinsin, hangi eleman/elamanlar eklensin)
ogrenciListesi.splice(1,0,"Elif");
console.log(ogrenciListesi);//[ 'Ali', 'Elif', 'Beyza', 'Buket', 'Hüseyin', 'Mehmet', 'Yunus' ]

ogrenciListesi.splice(5,2,"Osman","Ömer");
console.log(ogrenciListesi);//[ 'Ali', 'Elif', 'Beyza', 'Buket', 'Hüseyin', 'Osman', 'Ömer' ]