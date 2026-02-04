/*
filter()=>uzerinde calisilan arrayin her bir elemani icin sizin verdiginiz kurali kontrol eder ve bu kurala uyan elemanlari secerek YENI BİR ARRAY olusturur
*/
// GÖREV 1: Verilen sayılar dizisindeki 50'den büyük olan sayıları ayıklayıp yeni bir array yapınız.
const puanlar: number[] = [10, 85, 45, 90, 30];
const yuksekPuanlar: number[] = puanlar.filter((puan) => puan > 50);
console.log(yuksekPuanlar); //[ 85, 90 ]

// GÖREV 2: Verilen isimler listesinden sadece "A" harfi ile başlayanları seçerek yeni bir array yapınız.
const isimler: string[] = ["Ali", "Mehmet", "Ayşe", "Can"];
const basHarfiAileBaslayanlar: string[] = isimler.filter((isim) =>
  isim.startsWith("A"),
);
console.log(basHarfiAileBaslayanlar); //[ 'Ali', 'Ayşe' ]

// GÖREV 3: Verilen sayılar dizisinden sadece ÇİFT olan sayıları ayıklayıp yeni bir array olusturunuz
const sayilar: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const ciftSayilar: number[] = sayilar.filter((sayi) => sayi % 2 === 0);
console.log(ciftSayilar); //[ 2, 4, 6, 8 ]

/*
every(), sadece true yada false return eder, verilen arrayde ki herbir elemani bizim belirledigimiz kurala uyup uymadigini test eder, bir tane bile uymazsa false return eder
*/
// GÖREV 1: Verilen sayılar dizisindeki tüm sayıların pozitif (0'dan büyük) olup olmadığını kontrol ediniz.
const numaralar: number[] = [10, 20, 30, -5, 40];
const hepsiPositiveMi: boolean = numaralar.every((numara) => numara > 0);
console.log(hepsiPositiveMi); //false

// GÖREV 2: Verilen isimler listesindeki tüm isimlerin en az 3 harfli olup olmadığını kontrol ediniz.
const adlar: string[] = ["Can", "Ece", "Su"];
const uzunlukTesti: boolean = adlar.every((ad) => ad.length >= 3);
console.log(uzunlukTesti); //false

// GÖREV 3: Bir sınavdaki tüm öğrencilerin geçme notu olan 50'nin üzerinde alıp almadığını kontrol ediniz.
const sinavNotlari: number[] = [70, 85, 90, 55];
const herkesGectiMi: boolean = sinavNotlari.every((not) => not >= 50);
console.log(herkesGectiMi); //true

/*
some()  sadece true yada false return eder, verilen arrayde ki elemanlardan EN AZ BİR tanesinin bizim belittigimiz kurala uymasi durumunda true return eder, tamamının kurala uymamasi durumunda false return eder
*/

// GÖREV 1: Verilen sayılar dizisinde negatif (0'dan küçük) bir sayı olup olmadığını kontrol ediniz.
const sayilarArrayi: number[] = [10, 5, 20, -3, 8];
const negatifSayiVarMi: boolean = sayilarArrayi.some((sayi) => sayi < 0);
console.log(negatifSayiVarMi); //true

// GÖREV 2: Verilen meyveler listesinde "Muz" olup olmadığını kontrol ediniz.
const meyveler: string[] = ["Elma", "Armut", "Muz", "Çilek"];
const muzVarmi: boolean = meyveler.some((meyve) => meyve === "Muz");
console.log(muzVarmi); //true

// GÖREV 3: Bir öğrenci listesinde burs alabilen (notu 90'dan büyük) en az bir kişi olup olmadığını kontrol ediniz.
const notlar: number[] = [45, 60, 30, 92, 50];
const bursluVarMi: boolean = notlar.some((not) => not > 90);
console.log(bursluVarMi);

export {};