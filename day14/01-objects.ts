//1) Object Literal (süslü parantezler ile olusturmak)

const person = {
    name : "Ayse",
    age  : 25,
    city : "Istanbul"
}

// Bir object den veri okuma nasil yapilir
console.log(person.name);//ayse
console.log(person.age);//25
console.log(person.city);//istanbul
console.log(person);//{ name: 'Ayse', age: 25, city: 'Istanbul' }

//Bir object den veri okuma ikinci yol
const dısardanGelenBilgi = "age";
console.log("dynamic yontem", person[dısardanGelenBilgi]);//Ayse
console.log(person["name"]);//Ayse
console.log(person["age"]);//25
console.log(person["city"]);//istanbul


//Bir object de deger güncelleme
person.name = "Zeynep";
person.age = 35;
person.city = "Bursa";

console.log("Guncellenmis name",person.name);//Zeynep
console.log("Guncellenmis age",person.age);//35
console.log("Guncellenmis city",person.city);//Bursa

//const objectin adresini sabitler (person={baska object olmaz}) ama icini değistirebilirsiniz
//readonly ile icinide kilitleyebiliriz
// person = {
//   name: "mehmet",
//   age: 45,
//   city: "Istanbul",
// };


//2. yontem Object Literal e doğrudan tip vermek (Inline Type Annotation)
//Object e tip güvenligi ekleme
const user: {
  ad: string; //user objectimizin ad alani kesinlikle string olmali
  yas: number; //user objectimizin yas alani kesinlikle number olmali
  aktifMi: boolean; //user objectimizin aktifmi alani kesinlikle boolean olmali
}={
    ad:"Ayse",
    yas:25,
    aktifMi:true
};