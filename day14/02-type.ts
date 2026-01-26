//Type : bir objectin hangi alanlardan olusacağını ve bu alanlarin tipini tarif eden bir sablondur
//syntax:
type TipAdi = {
  //özellikler buraya yazilir
};
//Tip tanimi
type Person = {
  name: string;
  age: number;
  city: string;
  job?: string;//job alani optional
};
//Person Tipine uygun bir object olusturma
const mehmetObjecti: Person = {
  age: 30,
  name: "Mehmet",
  city: "Ankara",
  job: "SDET",
};

//Person Tipine uygun bir object olusturma
const ayseObjecti: Person = {
  age: 30,
  name: "Ayse",
  city: "Istanbul"
 //job optional oldugu icin hata almaktan kurtulduk
};