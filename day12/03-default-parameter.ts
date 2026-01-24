
/*NOT: Bir parametreye default deger atadiginizda o fonksiyon cağrilirken ilgili arguman eger atlanirsa parametre 
undefined olmak yerine sizin atadığınız default (varsayilan) degeri otomatik olarak alir.
*/

function selamla(mesaj: string = "Merhaba") {
  console.log(mesaj);
}

selamla();
selamla("Hello");

/*Örnek: Bir rapor oluşturma fonksiyonu yazınız.
Rapor başlığı zorunlu olsun, ancak rapor formatı belirtilmezse, varsayılan olarak "PDF" formatı kullanılacaktir*/
function raporOlustur(baslik: string, format: string = "PDF"): void {
  console.log(`Rapor Basligi : ${baslik}`);
  console.log(`Kullanilan Format : ${format}`);
}
raporOlustur("Login Page");
raporOlustur("Login Page","HTML");