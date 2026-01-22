
/*
TypeScript/JavaScript te 3 temel fonksiyon tanimlama yöntemi vardir

1) Function Declaration
  - function keywordu ve fonksiyon ismi yazilarak yapilan tanimlamadir
  - Syntax :
  function fonksiyonIsmi(){...calisacak kodlar } 

2) Function Expression
  - Bir fonksiyonun bir variable a assigin edilerek tanimlanmasidir.
  - Syntax :
  const variableName = function(){...calisacak kodlar}    

3) Arrow Function 
  - => kullanilarak kısayoldan tanimlanan functionlardir. 
  - Arrow Function aslında bir Function Expressiondir(değiskene atanir),
  Syntax:
  const variableName = ()=>{...calisacak kodlar}
*/
//1) Function Declaration

function mesajYaz(): void {
  console.log("Function Declaration ile ilk görev tanimlandi");
}

//Function Call : Function ismi ve parantez kullanarak calis emri veririz
console.log(`
==============
Ana Progrma akisi devam ediyor
==============
Ana Progrma akisi devam ediyor
==============
`);

mesajYaz();

console.log(`
==============
Ana Progrma akisi devam ediyor
==============
Ana Progrma akisi devam ediyor
==============
`);
mesajYaz();

//Ornek : Verilen iki sayiyi toplayan ve sonucu return eden bir function tanimlayiniz
function topla(sayi1: number, sayi2: number): number {
  return sayi1 + sayi2;
}

const sonuc : number = topla(5,2);
console.log("sonuc:",sonuc);

//"Ad parametresi alan ve 'Merhaba, {ad}! Hoş geldin.' metnini string olarak döndüren selamVer fonksiyonunu yazıp iki farklı isimle çağırarak sonucu konsola yazdır."
function selamVer(ad : string ) : string{
    return `Merhaba, ${ad}! Hoş geldin.`;
}
const text : string = selamVer("Ayse");
console.log(text);
console.log(selamVer("Mehmet"));



// GÖREV: Bir sayı alan ve sayının tek mi çift mi olduğunu string literal kullanarak anlamlı bir mesajla döndüren `tekMiCiftMi` fonksiyonunu yazarak method call yapiniz
function tekMiCiftMi1(sayi:number) : string{

    if(sayi%2===0){
        return `${sayi} cift bir sayidir`
    }else{
         return `${sayi} tek bir sayidir`;
    }
}

console.log(tekMiCiftMi1(2));
console.log(tekMiCiftMi1(5));


//ternary yöntemi ile cözüm
function tekMiCiftMi2(sayi: number): string {
   return sayi % 2 === 0 ?  `${sayi} cift bir sayidir` :  `${sayi} tek bir sayidir`;
}
console.log("ternary yöntemi ",tekMiCiftMi2(5));
console.log("ternary yöntemi ",tekMiCiftMi2(4));