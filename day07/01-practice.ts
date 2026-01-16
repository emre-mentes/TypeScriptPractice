// =======================================================
// ÖRNEK 3 (GÜNCEL): SİPARİŞ KODUNDAN KATEGORİ BELİRLEME
// =======================================================
// Senaryo:
// Bir sipariş kodu içinde hem harfler hem de rakamlar bulunuyor.
// Bizim amacımız:
// 1️⃣ Sipariş kodunun içindeki TÜM rakamları ayıklamak
// 2️⃣ Rakamların İLKİNE bakarak siparişin hangi sektöre ait olduğunu belirlemek
// Kurallar:
// - Rakam 1 ile başlıyorsa  → Elektronik
// - Rakam 2 ile başlıyorsa  → Tekstil
// - Rakam 3 ile başlıyorsa  → Gıda
// - Diğer durumlar          → Bilinmeyen kategori
// orderCode = "Order-Code: TR-24589-A"
// =======================================================
let orderCode: string = "Order-Code: TR-24589-A";
let digitsOnly: string = orderCode.replaceAll(/[^0-9]/g, ""); //rakam haric herseyi hiclikle değistir
console.log("sadece rakamlar =>", digitsOnly); //24589

let firstDigit: string = digitsOnly.charAt(0); //digitsonly stringinin ilk karakterini aldik

switch (firstDigit) {
  case "1":
    console.log("Elektronik");
    break;
  case "2":
    console.log("Tekstil");
    break;
  case "3":
    console.log("Gıda");
    break;
  default :
    console.log("Bilinmeyen kategori");
}