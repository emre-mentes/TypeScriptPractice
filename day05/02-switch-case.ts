//Example : verilen mevsime göre uygun mesaj veren kodu yaziniz

let mevsim: string = "sonbahar";

switch (mevsim) {
  case "ilkbahar":
    console.log("Mevsim => IlkBahar");
    break;
  case "yaz":
    console.log("Mevsim => Yaz");
    break;
  case "sonbahar":
    console.log("Mevsim => Sonbahar");
    break;
  case "kıs":
    console.log("Mevsim => kıs");
    break;
  default:
    console.log("Gecersiz bir mevsim girdiniz..");
}

// Gun sayisini verdiginizde gun ismini yazan kodu yaziniz
// 1==> Pazar, 2 ==> Pazartesi .....
// Input alma
//if else ile
let num: number = 5;

if (num === 1) {
  console.log("Sunday");
} else if (num === 2) {
  console.log("Monday");
} else if (num === 3) {
  console.log("Tuesday");
} else if (num === 4) {
  console.log("Wednesday");
} else if (num === 5) {
  console.log("Thursday");
} else if (num === 6) {
  console.log("Friday");
} else if (num === 7) {
  console.log("Saturday");
} else {
  console.log(
    "Hatalı giriş yaptınız. Lütfen 1 ile 7 arasında bir sayı giriniz..."
  );
}

//switch case ikinci yol
switch (num) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log(
      "Hatalı giriş yaptınız. Lütfen 1 ile 7 arasında bir sayı giriniz..."
    );
}