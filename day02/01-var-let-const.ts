//var => Eski degisken tanimlama yöntemidir ve artik kullanilmasi önerilmez, cünkü var keywordu ile değiskenler tekrar tanimlanabilir ve degerleri güncellenebilir
var x = 5;
var x = 6;

//let => Blocak kapsamli değiskenler icin kullanilan keyworddur, ve let ile tanimlanan bir değiskeni tekrar tanimlayamayiz; ancak degerini güncelleyebiliriz
let y = 10;
//let y = 15;
y =15;
console.log("y =>",y)

//const => Block kapsamli sabit tanimlama yöntemidir ve degeri asla degismemesi gereken variable lar icin kullanilir

const z =20;
//z = 25; const değiskenin değeri değistirilemez

var a;
let b;
const c=4;//'const' declarations must be initialized.
//const kullandigimzda ilk degerini atamamiz gerekir