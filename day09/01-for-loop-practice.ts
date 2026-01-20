//örnek :  verilen dizideki sayilarin toplamini bulunuz.[-5, 3, 5, -4, 4]

const rakamlar: number[] = [-5, 3, 5, -4, 4];

let toplam: number = 0;

for (let i = 0; i < rakamlar.length; i++) {

  toplam = toplam + rakamlar[i];

}
console.log(toplam);