// TYPESCRİPT variable (DEĞİŞKEN) İSİMLENDİRME KURALLARI
// 1. Harf ve sayılar kullanılabilir, ancak sayılar başa gelemez
let sayi1=10;
//let 1sayi=10; hatali

// 2. Alt tire (_) ve dolar ($) işareti kullanılabilir
let _ozel ="hello";
let o_zel ="hello";
let $ozel ="hello";
let o$zel ="hello";

//ctrl + d ==>> aynı satiri cogaltmak icin
//shift + Alt + yukari ok

// 3. Boşluk ve diğer özel karakterler kullanılamaz
//bosluk,?%..
let firstName="Mehmet";
//let first%Name="Mehmet"; hatali

// 4. Rezerve edilmiş anahtar kelimeler kullanılamaz
//if, for, class vb..

//let if ="ali";
//let for ="ali";

// 5. Türkce karakterler ç,ğ,ı,ö,ş,ü gibi karakterler kullanılmaz
let ülke = "Türkiye";
let ulke ="Daha doğru bir kullanim";


// 6. Değişkenler ve fonksiyonlar için camelCase kullanilir İlk kelime küçük, sonraki kelimeler büyük harfle başlar
let kullaniciAdi ="Ahmet";
let isSucces = true;

//functions
function hesapToplami (){
}


// 7. Class lar ve interfaceler için   PascalCase - kullanilir Tüm kelimeler büyük harfle başlar
class KullaniciServisi {
}

interface KullaniciProfili{
}


// 8. Sabit değerler için UPPER_CASE kullanilir  Tüm harfler büyük, kelimeler alt tire ile ayrılır
const PI_NUMBER =3.14;
const MAX_NUMBER = 15;


//Bu dosya artik bir moduldur.
export {};