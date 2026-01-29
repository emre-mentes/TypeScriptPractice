class Otomobil {

  marka: string;
  model: string;
  yil: number;

  constructor (gelenMarka:string,gelenModel:string,gelenYil:number){

    this.marka=gelenMarka
    this.model=gelenModel
    this.yil=gelenYil
    
  }


  marsaBas() :void{
    console.log(this.marka +" " + "marsa basildi")

  }







}

const audi = new Otomobil("bmw","m5",2024);

console.log(audi)

audi.marsaBas()