/*
Syntax

if (kosul){
kosul true ise calisacak kodlar
}else{
kosul false ise calisacak kodlar
}
*/

//örnek notu 50 den büyükse dersi gecen kodu yaziniz
let not: number = 25;

if (not >= 50) {
  console.log(`Not : ${not} - Tebrikler Dersi gectiniz`);
} else {
  console.log(`Not : ${not} - Maalesef, Dersten kaldiniz`);
}

/*örnek
EXAMPLE :500₺ den büyük fiyatlar için %10 indirim uygulayan programı yapınız. 
*/
let fiyat : number = 600;

if(fiyat>500){
    fiyat=fiyat*0.9;
}
console.log(`Odenecek Tutar : ${fiyat} tldir`);//Odenecek Tutar : 540 tldir

/*
EXAMPLE : fiyat bilgisi 500 den büyükse %10 indirim uygulayıp sonucu yazan, 
değilse %5 indirip uygulayıp sonucu yazan kodu yaziniz. 
*/

//birinci yol
if(fiyat>500){
   console.log(fiyat*0.9) ;//%10 indirim
}else{
    console.log(fiyat*0.95); //%5 indirim
}


//ikinci yol
let indirimliFiyat;
//console.log(typeof indirimliFiyat);undefined;

if (fiyat > 500) {
   indirimliFiyat =fiyat*0.90; //%10 indirim
} else {
   indirimliFiyat = fiyat * 0.95;//%5 indirim
}
console.log(indirimliFiyat);

export{};