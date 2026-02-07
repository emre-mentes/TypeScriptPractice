/**
 * -------------------------------------------------------------------------
 * static; bir özelliğin (property) veya metodun Nesneye (Arabaya) değil,
 * doğrudan Sınıfın (Fabrikanın) kendisine mühürlendiğini belirten keyworddür.
 * "new" anahtar kelimesiyle bir nesne (object) oluşturmaya gerek kalmadan,
 * doğrudan Sınıf Adı üzerinden (Araba.staticOzellik) erişilebilir.
 * -------------------------------------------------------------------------
 * 1) static variable veya methodlar (class member) tüm arabalar (object'ler) için ortak elemandır.
 * 2) static bir değer değişirse (örneğin hız sınırı), bu tüm arabaları bağlar ve etkiler.
 * 3) static olanlar "Araba" kalıbına, non-static olanlar ise "üretilen tek bir arabaya" aittir.
 * 4) static bilgilere (tekerlek sayısı gibi) ulaşmak için araba satın almaya (object oluşturmaya)
 * gerek duyulmaz; ama arabanın rengine bakmak için o arabanın üretilmiş olması şarttır.
 * 5) static variable = Class Variable (Sınıf Değişkeni)
 *    non-static variable = Instance Variable (Örnek/Nesne Değişkeni)
 * 6) static bir methodun icinden non-static olan bir variable i kullanamazsiniz
 */

class Araba {
  //static oldugu icin class ismi yazarak nokta koyarak ulasabiliriz, object üzerinden değil
  //static variable => Bu variable bu classtan olusturacağımız tum objectler icin ortak bir variable dir
  
  public static tekerlekSayisi: number = 4;

  //non static oldugu icin bu variabli görebilmek icin object olusturmak zorundasiniz
  //instance(=object) variable
  //non-static variable =>Bu variable her objecte göre güncellenebilir

  public renk: string = "Beyaz";

  //non-static method
  public surucuBilgisi(): void {
    console.log("Bu bir non-static methodtur");
  }

  //static method
  public static genelFabrikaBilgisi(): void {
    // burada this.renk  non static oldugu icin static method icinden kullanamayiz
    console.log("Bu fabrikada üretilen tüm arababalar 4 tekerleklidir");
  }
}

const benimArabam: Araba = new Araba();
//benimArabam.tekerlekSayisi; static oldugu icin object üzerinden kullanamyiz
//non-static class memberlarin kullanilisi

benimArabam.renk = "yesil";
console.log(benimArabam.renk);
benimArabam.surucuBilgisi();

//static class memberlarin kullanilisi
console.log(Araba.tekerlekSayisi);

Araba.tekerlekSayisi = 5;
console.log(Araba.tekerlekSayisi);

Araba.genelFabrikaBilgisi();