/*
for(BaslangicDegeri; LoopCalismaSarti; Artis/Azalis ){
    calismasini istedigimiz kodlar
}

*/
//1 den 5 e kadar olan sayilari console a yazdiralim
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//ikinci yol loop kullanarak kodun bakimini kolaylastiririz ve tekrari önleriz

for (let i = 1; i <= 5; i++) {
  console.log(`loopun icindeki i degeri ${i}`);
}

//------------------------------------------------
// ÖRNEK 2
// 10'dan 0'a kadar geri sayalım.
//------------------------------------------------

for (let i = 10; i >= 0; i--) {
  console.log(`Geri sayim ${i}`);
}

//------------------------------------------------
// ÖRNEK 3
// 5'ten 10'a kadar (10 dahil) tüm ÇİFT sayılar (6 8 10))
for (let i = 5; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/*=============================================================================
 * GÖREV 1: STRING TERS ÇEVİRME (STRING REVERSE)
 * =============================================================================
 * PROBLEM: Bize verilen bir metni (örneğin: "Type"==> "epyT"), harf sırasını bozmadan
 * sondan başa doğru yeniden yazdıracak bir algoritma kurmak.
 */

let text: string = "TypeScript";
let ters: string = "";

/* bu kod çalışır ama dinamik değil cok fazla tekrar var ve bakimi kolay değil
ters = ters +text.charAt(3);
ters = ters +text.charAt(2);
ters = ters +text.charAt(1);
ters = ters +text.charAt(0);
console.log(ters);//epyT
*/

for (let i = text.length - 1; i >= 0; i--) {
  ters = ters + text.charAt(i);
}
console.log("text ", text);
console.log("ters", ters);

//homework 
/* =============================================================================
 * GÖREV 2: PALINDROME KONTROLÜ
 * =============================================================================
 * PROBLEM: Bir kelimenin "Palindrome" olup olmadığını anlamak. 
 * (Palindrome: Düzden ve tersten okunuşu aynı olan kelimeler. Örn: CIVIC, nalan)
 */