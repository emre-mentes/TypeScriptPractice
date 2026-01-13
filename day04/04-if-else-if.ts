// ====================== GÖREV ======================
/*
GÖREV:
Bir öğrencinin aldığı nota göre harf notunu belirleyen
bir TypeScript programı yazınız.

KURALLAR:
- Program, önce girilen notun GEÇERLİ olup olmadığını kontrol etmelidir.
- Geçerli not aralığı: 0 – 100
- Geçersiz bir not girilirse kullanıcı uyarılmalıdır.

- Not aralığına göre derecelendirme yapılacaktır.
- Kontrol sırası ÖNEMLİDİR:
  En yüksek nottan en düşük nota doğru kontrol edilmelidir.

NOT ARALIKLARI:
90 - 100  → A+
80 - 89   → B
70 - 79   → C
50 - 69   → D
0  - 49   → F
*/
// ===================================================

let ogrenciNotu: number = 35;

if (ogrenciNotu < 0 || ogrenciNotu > 100) {
  console.log(`${ogrenciNotu} Gecersiz not!!, Not 0 ile 100 arasinda olmalidir`);
} else {
  if (ogrenciNotu >= 90) {
    console.log("Notunuz : A+");
  } else if (ogrenciNotu >= 80) {
    console.log("Notunuz : B");
  } else if (ogrenciNotu >= 70) {
    console.log("Notunuz : C");
  } else if (ogrenciNotu >= 50) {
    console.log("Notunuz : D");
  } else {
    console.log("Notunuz : F");
  }
}



//ders disi calismam
let studentPunkte: number = 35;

switch (true) {
  case (studentPunkte < 0 || studentPunkte > 100):
    console.log(`${studentPunkte} Geçersiz not!! Not 0 ile 100 arasında olmalıdır`);
    break;

  case (studentPunkte >= 90):
    console.log("Notunuz : A+");
    break;

  case (studentPunkte >= 80):
    console.log("Notunuz : B");
    break;

  case (studentPunkte >= 70):
    console.log("Notunuz : C");
    break;

  case (studentPunkte >= 50):
    console.log("Notunuz : D");
    break;

  default:
    console.log("Notunuz : F");
}
