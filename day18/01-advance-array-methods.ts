/* ==>  forEach: Bir arraydeki her bir eleman için belirtilen işlemi gerçekleştirir. Herbir elemani loop kullanmaya gerek kalmadan doğrudan işlem yapılmasını sağlar. */

// GÖREV 1: Verilen arrayde bulunan isimlerin herbirisini ekrana yazdırınız.
const isimler: string[] = ["Ali", "Ayşe", "Mehmet"];

//1.Yol for of loop
for (let isim of isimler) {
  console.log(isim);
}

//2.Yol Best practice
isimler.forEach((isim) => {
  console.log(isim);
});

// GÖREV 2: Verilen sayılar dizisindeki her bir sayıyı 5 ile çarpıp ekrana yazdırınız.
const sayilar: number[] = [2, 4, 6];

//1.yol
for (let sayi of sayilar) {
  console.log(sayi * 5);
}

//2.yol
sayilar.forEach((sayi) => {
  console.log(sayi * 5);
});

// GÖREV 3: Verilen ürün listesindeki her bir ürünün başına "Ürün: " ibaresini ekleyerek yazdırınız.
const urunler: string[] = ["Laptop", "Telefon", "Kulaklık"];
urunler.forEach((urun) => {
  console.log("Ürün : " + urun);
});

/*
Map methodu=> elinizdeki bir arrayi alıp, içindeki her bir elemanı belirlediğiniz bir kurala göre değiştirerek YENİ BİR array oluşturmanızı sağlar.
*/
// GÖREV 1: Verilen sayılar dizisindeki her bir sayının karesini alarak yeni bir dizi oluşturunuz.
const numbers: number[] = [2, 4, 6];

//1.yol
const sayilarinKareleri1: number[] = numbers.map((number) => {
  return number * number;
});

console.log("sayilarinKareleri", sayilarinKareleri1);

//2.yol
const sayilarinKareleri2: number[] = numbers.map((number) => number * number);
console.log("sayilarinKareleri2", sayilarinKareleri2);

//Görev 2 :  Verilen arraydaki Kelimeleri Büyük Harfe Dönüştürünüz
const meyveler: string[] = ["elma", "armut"];
const upperCaseMeyveler: string[] = meyveler.map((meyve) =>
  meyve.toUpperCase(),
);

console.log(upperCaseMeyveler); //[ 'ELMA', 'ARMUT' ]

//GÖREV 3: Meyveler arrayimizdeki kelimelerin kaç harften oluştuğunu ölçüp number array olusturunuz
const kelimeUzunluklari: number[] = meyveler.map((kelime) => kelime.length);
console.log(kelimeUzunluklari); //[ 4, 5 ]