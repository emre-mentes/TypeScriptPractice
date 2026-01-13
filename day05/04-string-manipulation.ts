let cumle: string = " TypeScript öğreniyorum. TypeScript güçlüdür. ";
console.log(`Cumlenin temizlenmemis halinin lengthi ${cumle.length} `);//Cumlenin temizlenmemis halinin lengthi 46 

// trim(): verilen metnin basindaki ve sonundaki gereksiz bosluklari temizler
let temizCumle : string = cumle.trim();
console.log(`Temizlenmis cumlenin lengthi ${temizCumle.length}`);//Temizlenmis cumlenin lengthi 44

//replace(eski,yeni); verilen metin icinde soldan saga doğru tarama yapar ve aranan kelimeyi gördüğü anda onu yeni kelime ile değistirir ve operasyonu bitirir, metnin devamında aynı kelimeden olsa bile onlara dokunmaz
let yeniCumle: string = temizCumle.replace("TypeScript","JavaScript");
console.log(`Ilk TypeScript i degistirir ${yeniCumle}`);//Ilk TypeScript i degistirir JavaScript öğreniyorum. TypeScript güçlüdür.

//replaceAll(eski,yeni); Metin icinde buldugu tum ifadeleri yenisi değistirir
let tumDegisim : string = temizCumle.replaceAll("TypeScript","TS");
console.log(` Tüm Typescriptleri değistirir ${tumDegisim} `);// Tüm Typescriptleri değistirir TS öğreniyorum. TS güçlüdür.