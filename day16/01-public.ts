/*
Access Modifiers (Erişim Belirleyici) - TypeScript
1) public
2) protected
3) private

public > protected > private
public      ==> public olanlar her yerden erişilebilir. classın dışındaki her yerden bu özelliklere ve metodlara ulaşılabilir.
protected   ==> protected olanlar sadece aynı class içinde ve child class (alt classlar) içinde kullanılabilir. Dışarıdan erişilemez.
private     ==> private olanlar sadece aynı class içinde kullanılabilir. Dışarıdan ve child class'lardan erişilemez.
- default   ==> TypeScript'te default diye bir access modifier yoktur. Eğer bir access modifier yazmazsanız, TypeScript otomatik olarak public kabul eder. Yani, yazmadığınızda varsayılan olarak public olur ve her yerden erişilebilir.
*/

class Araba {
  public marka: string;
  constructor(marka: string) {
    this.marka = marka;
  }
  public hizlan() {
    console.log("Araba hizlaniyor..");
  }
}

//Public oldugu icin dısardan erisim güncellem tamamen serbest
const honda :Araba = new Araba("Honda");
console.log(honda.marka);
honda.marka="Toyota";
console.log(honda.marka);
honda.hizlan();