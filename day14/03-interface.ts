
//1. adim interface kullanarak olusturmak istedigimiz objectlerimiz icin bir sablon hazirladik
interface IOyuncu {
  isim: string;
  puan: number;
}

//interface i ekleme yaparak genisletmek
interface IOyuncu {
  city: string;
}

//2. adim
const firsName: string = "ali";
const yeniOyuncu: IOyuncu = {
  isim: "Burak",
  puan: 100,
  city: "istanbul",
};




//1) Kitap interface i tanimliyoruz
interface IKitap {
   readonly adi : string; //readonly keywordunu koyarak name alanini kilitledik, bu alan deger atandiktan sonra değistirilemez
    yazar : string;
    sayfaSayisi:number;
}
//2) IKitap interfacimizi kullanarak bir kitap objecti olusturalim
const favoriKitabim : IKitap = {
    adi : "Kürk mantolu madonna",
    yazar:"Sabahattin Ali",
    sayfaSayisi:160
}
console.log(favoriKitabim);

//favoriKitabim.adi="Simyaci";//adi alani readonly oldugu icin sadece okunabilir ama yeniden deger atamasi yapilamaz
favoriKitabim.yazar="Paulo Chello";//yazar ve sayfa sayisi alanlari readonly olarak tanimlanmadigi icin güncellenebilir , yeniden deger atamasi yapilabilir
favoriKitabim.sayfaSayisi = 250;


/*{
  adi: 'Kürk mantolu madonna',
  yazar: 'Sabahattin Ali',
  sayfaSayisi: 160
}*/

/*
const hataliKitap1: IKitap = {
  adi: "Kürk mantolu madonna",
  yazar: "Sabahattin Ali",
  sayfaSayisi: "160",// string verdik ve hata aldık sablona uymadi
};

yazar eksik oldugu icin hata aldik
const hataliKitap2: IKitap = {
  adi: "Kürk mantolu madonna",

  sayfaSayisi: 160, // string verdik ve hata aldık sablona uymadi
};


const hataliKitap1: IKitap = {
  adi: "Kürk mantolu madonna",
  yazar: "Sabahattin Ali",
  sayfaSayisi: 160, 
  yayinYili : 2020//böyle bir alan tanimlamadigimiz icin hata aldik
};

*/