
class Araba {
  marka: string;
  model: string;
  yil: number;

  //constructor bu classtan bir object olustururken otomatik olarak calisan özel bir fonksiyondur
  //Amac => Objectinin ilk degerini ayarlamak(initialize, baslatmak)
  constructor(gelenMarka: string, gelenModel: string, gelenYil: number) {
    this.marka = gelenMarka;
    this.model = gelenModel;
    this.yil = gelenYil;
  }
  calis(): void {
    console.log(this.marka+" markali araba calisti!!");
  }
}
//classtan object nasil olusturulur?
//Araba data tipinde bir toyota objectini olusturduk
const toyota: Araba = new Araba("toyota", "Corolla", 2020);
console.log(toyota); //Araba { marka: 'toyota', model: 'Corolla', yil: 2020 }
toyota.calis();//toyota markali araba calisti!!


//bir object üzerindeki degerler nasil okunur?
console.log("toyota marka",toyota.marka);//toyota
console.log("toyota model", toyota.model);//Corolla
console.log("toyota yil", toyota.yil);//2020

//bir object üzerindeki degerler nasil güncellenir?
toyota.marka="Tofas";
toyota.model="Sahin";
toyota.yil=1990;

console.log(" marka güncellenmis hali",toyota.marka);//Tofas
console.log(" model güncellenmis hali", toyota.model);//Sahin
console.log(" yil güncellenmis hali", toyota.yil);//1990


const honda: Araba = new Araba("Honda", "Civic", 2026);
console.log(honda); //Araba { marka: 'Honda', model: 'Civic', yil: 2026 }
honda.calis();//Honda markali araba calisti!!