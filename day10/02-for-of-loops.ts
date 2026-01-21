
// Görev: Verilen names array'inde her ismi kontrol ederek 2 karakterden uzun olanları ilk harfi büyük olacak şekilde düzenleyip validNames array'ine ekleyiniz

const names: string[] = [" ali ", "AYŞE", "  ", "me", "Mehmet  ", "  ZEYNEP"];

const validNames: string[] = [];

for (let name of names) {
  let trimmed: string = name.trim();

  if (trimmed.length > 2) {
    //ali ==> Ali

    let capitalizedName =
      trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLocaleLowerCase();
    validNames.push(capitalizedName);
  }
}
console.log("validNames :", validNames); //validNames : [ 'Ali', 'Ayşe', 'Mehmet', 'Zeynep' ]

// GÖREV: Bir isim dizisindeki (array) en uzun ismi for...of kullanarak bulun ve en sonda console.log ile yazdırın.
const isimler: string[] = ["Ali", "Zeynep", "Mehmet", "Ayşe", "Mustafa"];
let enUzunIsim: string = "";

for (let isim of isimler) {
  if (isim.length > enUzunIsim.length) {
    enUzunIsim = isim;
  }
}

console.log(enUzunIsim);

//Gorev : Verilen arraydeki en büyük sayıyı for...of kullanarak bulun ve en sonda console.log ile yazdırın.
//[12, 45, 3, 89, 34, 89, 7];

const sayilar: number[] = [12, 45, 3, 89, 34, 89, 7];

let enBuyukSayi: number = sayilar[0];

for (let sayi of sayilar) {
  if (sayi > enBuyukSayi) {
    enBuyukSayi = sayi;
  }
}
console.log("enbuyuksayi : ", enBuyukSayi);

export {};