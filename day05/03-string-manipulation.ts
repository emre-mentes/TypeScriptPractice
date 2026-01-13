let cumle: string = " TypeScript öğreniyorum. TypeScript güçlüdür. ";

//length : verilen stringin karakter sayısını verir
console.log(`Cümlenin uzunlugu ${cumle.length}`); //Cümlenin uzunlugu 46

//toLowerCase() : verilen stringin tüm harflerini kücük harfe dönüstürür
console.log(`Küçük harf : ${cumle.toLowerCase()}`); //Küçük harf :  typescript öğreniyorum. typescript güçlüdür.

//toUpperCase() : verilen stringin tüm harflerini büyük harfe dönüstürür
console.log(`Büyük harf :${cumle.toUpperCase()}`); //Büyük harf : TYPESCRIPT ÖĞRENIYORUM. TYPESCRIPT GÜÇLÜDÜR.

//startsWith(aranan) : verilen stringin parantez icindeki ifadeyle baslayip baslamadigini kontrol eder (boolean return eder)
console.log(`TypeScript ile basliyor mu? ${cumle.startsWith(" TypeScript")}`); //TypeScript ile basliyor mu? true

//endsWith(aranan) : verilen stringin parantez icindeki ifadeyle bitip bitmedigini  kontrol eder (boolean return eder)
console.log(`güçlüdür. ile bitiyor mu? ${cumle.endsWith("güçlüdür. ")}`); //güçlüdür. ile bitiyor mu? true

//includes(aranan) : verilen stringin herhangi bir yerinde aranan ifade varmi diye kontrol eder (boolean return eder)
console.log(
  `öğreniyorum kelimesini iceriyor mu? :  ${cumle.includes("öğreniyorum")} `
); //öğreniyorum kelimesini iceriyor mu? :  true

//indexOf(aranan) : aranan ifadenin metin icindeki ilk gectigi yerin idnexini bulur
console.log(`güçlüdür kelimesi nerede basliyor ${cumle.indexOf("güçlüdür")}`); //güçlüdür kelimesi nerede basliyor 36

export{};