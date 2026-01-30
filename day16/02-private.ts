
//private     ==> private olanlar sadece aynı class içinde kullanılabilir. Dışarıdan ve child class'lardan erişilemez.

class Personel {
  private isim: string;
  private maas: number;
  constructor(isim: string, maas: number) {
    this.isim = isim;
    this.maas = maas;
  }
  
  private maasHesapla(): number {
    return this.maas;
  }
}
const personelAli : Personel = new Personel("Ali",5000);
//personelAli.isim="Ahmet"; private yaptigimiz icin hicbiryerden erisemeyiz
//personelAli.maas=15000;
//personelAli.maasHesapla();
