//Arrays

//birinci yol daha yaygın olarak kullanilir
let ogrenciler1: string[] = ["Ayse", "Burak", "Ali", "false"];

//ikinci yol
let ogrenciler2: Array<string> = ["Ayse", "Burak", "Ali"];

let notlar: (number | string)[] = [90, 70, "mehmet", "ali"];

console.log(notlar); //[ 90, 70, 'mehmet', 'ali' ]

let ogrenciler: string[] = ["Ayse", "Burak", "Ali", "false"];

//bir arrayin icinden specific elemanlar nasil alinir?
console.log("ogrenciler 2. index", ogrenciler[2]); //ogrenciler 2. index Ali
console.log("ogrenciler 0. index", ogrenciler[0]); //ogrenciler 0. index Ayse
console.log("ogrenciler son index", ogrenciler[ogrenciler.length - 1]); //ogrenciler son index false==>>length -1 ile her zaman son indexi dynamic olarak alabiliriz

//bir arrayin icindeki elemanlar nasil güncellenir/eklenir?
ogrenciler[3] = "Ahmet"; //ücüncü indexte bulunan datayi Ahmet olarak güncelledik
console.log("ogrenciler ücüncü indexteki data", ogrenciler[3]); //ogrenciler ücüncü indexteki data Ahmet
console.log("ogrenciler arrayi =>", ogrenciler); //[ 'Ayse', 'Burak', 'Ali', 'Ahmet' ]

//4. index daha önce yok ama 4 üncü indexi olusturur ve icine Mehmet assign eder
ogrenciler[4] = "Mehmet";
console.log("ogrenciler arrayi =>", ogrenciler);//ogrenciler arrayi => [ 'Ayse', 'Burak', 'Ali', 'Ahmet', 'Mehmet' ]

ogrenciler[6] = "Emre";
console.log("ogrenciler arrayi =>", ogrenciler); //ogrenciler arrayi => [ 'Ayse', 'Burak', 'Ali', 'Ahmet', 'Mehmet', <1 empty item>, 'Emre' ]
//TypeScript / Javascript te bir array e index kullanarak deger atarsak, bu index eğer arrayda var ise günceller, yoksa o indexi ekler, arada bosluk olursa onun tipi undefined olur