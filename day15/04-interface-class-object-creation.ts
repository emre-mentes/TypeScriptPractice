
//interface ==> Sözlesme / Kurallar listesi
interface SaatOzellikleri {
  marka: string; //bu interface i kullanan tüm objectlerin marka adında string tipinde bir property si olmak zorundadir
  saatiGoster(): void; //bu interface i kullanan tüm objectlerin  saatiGoster() adında bir fonksiyonu  olmak zorundadir
}

//class ==> Kalip / bu kaliptan objectler olusturacağız
//Saat classi SaatOzellikleri interface nin kurallarina uyacak
class Saat implements SaatOzellikleri {
    marka: string;//interface markayi zorunlu tuttugu icin tanimlamak zorundayiz
    constructor(markaAdi:string){
        this.marka=markaAdi;
    }
    saatiGoster(): void {
       const simdi = new Date();
       const saat = simdi.getHours();
       const dakika = simdi.getMinutes();
       console.log(`Suanda saat : ${saat}:${dakika} `)
    }
}

//object olusturma
const benimSaatim :Saat = new Saat("Techpro");
benimSaatim.saatiGoster();//Suanda saat : 10:07