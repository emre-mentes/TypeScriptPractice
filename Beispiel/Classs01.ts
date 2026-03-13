
//Gorev : Verilen arraydeki en büyük sayıyı for...of kullanarak bulun ve en sonda console.log ile yazdırın.
//[12, 45, 3, 89, 34, 89, 7];

const sayilarim: number[] = [12, 45, 3, 89, 34, 89, 7];
let enBuyukSayi: number = sayilarim[0];

for (let sayi of sayilarim) {
  if (sayi > enBuyukSayi) {
    enBuyukSayi = sayi;
  }
}
console.log("enbuyuksayi : ", enBuyukSayi);