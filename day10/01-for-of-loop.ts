
/*for of loop syntax

for (let variableName of arrayName ){
    calisacak kodlar
}
*/

//Ornek : Verilen arraydeki elemanlari for of loop kullanarak console a yazdirinz
const fruits: string[] = ["elma", "armut", "muz", "kivi"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Ornek: for...of kullanarak sayilar dizisindeki çift ve tek sayıları ayırın.
let sayilar: number[] = [3, 8, 15, 22, 7, 10];
let ciftSayilar: number[] = [];
let tekSayilar: number[] = [];


for (let sayi of sayilar) {
  if (sayi % 2 === 0) {
    //sayi sepetindeki deger cift ise burasi calisir
    ciftSayilar.push(sayi);
  } else {
    //sayi sepetindeki deger tek ise burasi calisir
    tekSayilar.push(sayi);
  }
}


console.log("Cift sayilar : ", ciftSayilar);
console.log("Tek sayilar : ", tekSayilar);



// Ornek : for...of kullanarak bir kelimedeki sesli ve sessiz harfleri ayırarak her birisini string array de toplayin
let kelime = "bilgisayar"; 
let sesliHarfler : string[]=[];
let sessizHarfler : string[]=[];
const sesliler :string = "aeıioöuüAEIİOÖUÜ"; 

for (let harf of kelime ){

    if (sesliler.includes(harf)) {
        sesliHarfler.push(harf);
    }else{
        sessizHarfler.push(harf);
    }
}

console.log("sesliharfler arrayi:",sesliHarfler);
console.log("sessizharfler arrayi:", sessizHarfler);