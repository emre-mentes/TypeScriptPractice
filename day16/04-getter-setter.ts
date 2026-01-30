
//getter methodlari =>Bir property ye erisirken ne yapilmasi gerektigini tanimlayabiliriz ve bir property yi okumak icin kullanilir

//setter methodlari => Bir property degerini değistirmek icin kullanilir, ve bu method icinde değistirmek icin gerekli kontrolleri de yapabiliriz

class Ogrenci{

   private _not:number=0;//Genellikle private alanlar icin basina alt cizgi konulabilir

   //getter==> private datayi okumak icin
   public getNot(){
    console.log(this._not);
   }  

   //setter==> private datayi güncelleyebilmek icin
   public setNot(yeniNot:number){
      this._not=  yeniNot;
    
   }
}
const ogrenci : Ogrenci = new Ogrenci();
ogrenci.getNot();//0

ogrenci.setNot(75);

ogrenci.getNot();//75