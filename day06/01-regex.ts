//=======================================================
// REGEX (Regular Expressions)
//=======================================================

// FLAGS (sondaki harfler):
// /g   → global : metindeki TÜM eslesmeleri bulur
// /i   → insensitive : büyük / küçük harf duyarsızdır
//
// TEMEL SEMBOLLER:
// \s   → boşluk karakteri (space, tab, newline vb.)
// \S   → boşluk HARİÇ her şey
// \b   → kelime sınırı (sadece TAM kelime)
// \w   → Büyük harfler - kücük harfler - digits

// RAKAMLAR (Digits):
// \d   → sadece rakamlar (0-9)
// \D   → rakamlar HARİC her şey
// [0-9]  → sadece rakamlar (0’dan 9’a)
// [^0-9] → rakamlar DISINDAKİ her sey

// HARFLER (Letters):
// [a-z]        → a'dan z'ye küçük harfler
// [A-Z]        → A'dan Z'ye büyük harfler
// [a-zA-Z]     → tüm İngilizce harfler (kücük+büyük)
// [^a-z]       → a-z DIŞINDAKİ her şey
// [^a-zA-Z]    → harfler DIŞINDAKİ her şey
//
// KARAKTER SETİ (köşeli parantez []):
// [abc]     → a veya b veya c
// [a-z]     → a'dan z'ye aralık
// [^abc]    → a,b,c HARİÇ
//
// =======================================================
// EK ÖRNEKLER
//
// Tüm sesli harfler:
// [aeiouAEIOU]
//  → a,e,i,o,u ve bunların büyük halleri
//
// Tüm a, x, y harfleri:
// [axy]
//  → sadece a veya x veya y (büyük istersen: [axyAXY] ya da /i flag)
//
// A'dan G'ye tüm küçük ve büyük harfler:
// [A-Ga-g]
//  → A,B,C,D,E,F,G veya a,b,c,d,e,f,g
//
// Tüm küçük harfler HARİÇ:
// [^a-z]
//  → küçük harf olmayan her karakter (rakam, boşluk, sembol, büyük harf vb.)
//
// Tüm harfler HARİÇ:
// [^a-zA-Z]
//  → İngilizce harf olmayan her karakter (rakam, boşluk, sembol vb.)
//
// NOT:
// - Köşeli parantez içinde ^ kullanırsan "HARİÇ" anlamına gelir: [^...]
// =======================================================

let text: string ="  TypeScript ile REGEX ogrenmeye Hazir misin? Haziran 2026 +,.=%$ ";

//1) Tüm özel karakterleri temizleme
let cleanText: string = text.replaceAll(/[^a-zA-Z0-9\s]/g, "");
console.log("cleanText", cleanText); //TypeScript ile REGEX ogrenmeye Hazir misin Haziran 2026

// Metin içindeki TÜM noktalama isaretlerini ve sembolleri
// temizleyerek sadece harfler, rakamlar ve boslukları bırakmak.
let noktalamaTemiz: string = text.replaceAll(/[^\w\s]/g, "");
console.log("noktalama temiz hali ", noktalamaTemiz); //TypeScript ile REGEX ogrenmeye Hazir misin Haziran 2026

//2) Sadece metin bırakma
let sadeceMetin: string = text.replaceAll(/[^a-zA-Z\s]/g, "");
console.log("sadecemetin ", sadeceMetin); // TypeScript ile REGEX ogrenmeye Hazir misin Haziran

//3) Metinde bulunan tüm rakamlari siliniz

//1. yol
console.log("rakamsiz 1. yol", text.replaceAll(/[0123456789]/g, ""));

//2. yol
console.log("rakamsiz 2. yol", text.replaceAll(/[0-9]/g, ""));

//3. yol
console.log("rakamsiz 3. yol", text.replaceAll(/[\d]/g, ""));

//4) Metinde bulunan rakam sayisini bulunuz.

let rakamSayisi: number = text.replaceAll(/[^0-9]/g, "").length;
console.log("rakamsayisi ", rakamSayisi); //rakamsayisi  4

//5) Hazir kelimesini OK ile değistirelim
let yeniKelime: string = text.replaceAll(/\bHazir\b/g, "OK");
console.log("yenikelime", yeniKelime);

//Not => Hazir kelimesinin basina ve sonuna \b (boundry-sınır) koyarsak yanlis kelimeleri secmez, 
// bagimsiz bir kelime olarak Hazir kelimelerini sece