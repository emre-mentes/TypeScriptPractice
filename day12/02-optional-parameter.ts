
//Optional Parameter (opsiyonel yani isteğe bağli parametreler)
//Not ==> Optional parametreler asla zorunlu parametrelerden önce gelemez, optional her zaman sonda olmalidir


function kullaniciKaydet(isim: string, telefon?: string): void {
  console.log("Kaydedilen isim :", isim);
  if (telefon) {
    console.log("Kaydedilen telefon :", telefon);
  }
}

kullaniciKaydet("Ahmet");
kullaniciKaydet("Ahmet", "151515155");

// Örnek Kişiye özel bir isim girilip girilmediğini kontrol ederek, duruma göre ya isme özel(Hello, Ali!) ya da genel(Hello, stranger!) bir karşılama mesajı oluşturun

function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}`;
  } else {
    return `Hello, stranger!`;
  }
}


console.log(greet());
console.log(greet("Ali"));