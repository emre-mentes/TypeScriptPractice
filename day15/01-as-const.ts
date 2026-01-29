const user = {
   name : "Ayse",
   age : 23,
   city : "Istanbul" 
}as const;

//as const => objectin tum alanlarini readonly  ve literal type yaparak degismesini engeller

/*
user.name="ali";
user.age=24;
user.city = "izmir";
as const diyerek tüm alanlari kilitledik dolayisiyla artik güncelleme yapilamaz
*/