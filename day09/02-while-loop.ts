// while loop
// Loopun ne zaman durduralacağı en bastan bilinmiyorsa bir kosula göre durdurulmasi isteniyorsa tercih edilebilir

/* for loop syntax
for(baslangic degeri; loop calisma kurali; artirma / azaltma){
    calisacak kodlar
    }
*/
/* while loop syntax
baslangic degeri;
while(loop calisma kurali){
     calisacak kodlar
     artirma / azaltma
}
*/

//ornek : while loop ile  0 dan 4 (dahil) e kadar console a yazdiriniz

//while loop baslangic degeri
let counter: number = 0;

while (counter < 5) {
  //calismasi istenen kodlari
  console.log(`while loop counter => ${counter}`);

  //artirma / azaltma
  counter++;
}