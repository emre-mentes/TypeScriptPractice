
class Kullanici {
  ad: string;
  yas: number;
  aktifMi: boolean;

  constructor(isim: string, yas: number, aktiflik: boolean) {
    this.ad = isim;
    this.yas = yas;
    this.aktifMi = aktiflik;
  }

  kullaniciBilgileriniYazdir(): void {
    console.log(`Ad : ${this.ad}`);
    console.log(`Yas : ${this.yas}`);
    console.log(`Aktifmi : ${this.aktifMi ? "Evet Aktif" : "Hayir Aktif degil" }`);
  }
}

const aliCan :Kullanici = new Kullanici("Ali Can",33,false);
aliCan.kullaniciBilgileriniYazdir();

const veliHan :Kullanici = new Kullanici("Veli Han",41,true);
veliHan.kullaniciBilgileriniYazdir();