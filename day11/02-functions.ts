
/*
 Hoisting Nedir?
  -JavaScript/TypeScript te function declaration yöntemi ile bir fonksiyon tanimlandiginda sanki dosyanin basina tasinmis gibi davranir. Buna hoisting (yukari cekilme)denir.
*/
//2) Function Expression
//Function Expression yönteminde fonksiyonlar yukari cekilmez (No Hoisting)
//mesajYazExpression();
const mesajYazExpression = function():void{
    console.log("Function Expression yöntemi ile tanimlandi")
};
mesajYazExpression();

// GÖREV: (0-100) arası bir not alan ve not 50'den büyükse "Geçti", değilse "Kaldı" döndüren bir Function Expression yazın.

const getResult = function(not:number):string{
    if(not>50){
      return "Gecti";
    }else{
      return "Kaldi";
    }
}
console.log(getResult(75)) ;//gecti
console.log(getResult(35)) ;//kaldi

// GÖREV: Bir yaş (0-120 arası bir sayı) alan ve yaş 18'den büyük veya eşitse "Yetişkin", küçükse "Çocuk" döndüren bir Function Expression yazın.

const yasDurumu = function (yas : number) : string{
   return yas>=18 ? "Yetiskin" : "Cocuk";
}

console.log(yasDurumu(20));
console.log(yasDurumu(15));


// GÖREV: Bir şifre (string) alan ve şifre uzunluğu 8 veya daha fazlaysa "Güçlü", değilse "Zayıf" döndüren bir Function Expression yazın.

const sifreDurumu = function(sifre:string):string{
    if(sifre.length>=8){
        return "Guclu";
    }else{
        return "Zayif";
    }
}
console.log(sifreDurumu("1234567"))
console.log(sifreDurumu("12345678"))