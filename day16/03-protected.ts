
//inheritance (kalitim) : Nesne Yönelimli Programlama (Object Oriented Programming) bir classin baska bir classin özelliklerini ve methodlarini miras almasini saglar.
/*protected   ==> protected olanlar sadece aynı class içinde ve sadece child class (alt classlar) içinde kullanılabilir. Dışarıdan erişilemez.*/

class Personel {
  public isim: string; //Bu alana her yerden erisilebilir
  protected maas: number; //Bu alana sadece class ici ve miras alınan classlardan erisilebilir
  private tcNo: string; //Bu alana sadece class icinden erisilebilir,
  
  constructor(isim: string, maas: number, tcNo: string) {
    this.isim = isim;
    this.maas = maas;
    this.tcNo = tcNo;
  }

}

const personelAhmetBey: Personel = new Personel("Ahmet", 30000, "123456789");
personelAhmetBey.isim; //Public oldugu icin class dısından erisebildik
//personelAhmetBey.maas;//Property 'maas' is protected and only accessible within class 'Personel' and its subclasses
//personelAhmetBey.tcNo;//Property 'tcNo' is private and only accessible within class 'Personel'

//extends keywordu sayesinde bir classi baska bir classin childi yapabiliriz, böylece parent classta bulunan özellikleri miras olarak alip kullanabiliriz

class Yonetici extends Personel {
  maasGuncelle(): void {
    this.maas = 50000;
    console.log(`Yonetici maasi : ${this.maas}`);

    //this.tcNo; tcno alani private oldugundan child olsa bile kullanamaz
  }
  //Burada this.maas diyerek Yonetici classi, Personel classinin childi oldugu icin protected olarak tanimlanan maas alanina erisebiliyor ve onu güncelleyebiliyor
}

export {};