//variable olusturma Syntaxi
//keyword + varibleName + type annotation + assingment operator + data ;
let isActive: boolean = true;
console.log("isActive =>", isActive); //true

//undefined
let notAssigned: undefined = undefined;
console.log(notAssigned); //undefined

//ikinci yol
let anotherUndefined;
console.log(anotherUndefined); //undefined

//null
let emptyValue: null = null;
console.log(emptyValue); //null


//any ==> herhangi bir tip
//any tipi kullanmak Typescriptin tip güvenligi özelligini devre dısı bırakir
let userInput : any ="Kullanicidan gelen tipinden emin olmadigimiz data";
console.log(typeof(userInput));//string

userInput = 41;
console.log(typeof(userInput));//number

userInput = false;
console.log(typeof(userInput));//boolean

//NOT : any data tipini tip güvenligini devre dısı bıraktigi icin mümkün mertebe kullanmaktan kacınmaliyiz


//Union tipler  ==> |
//ID miz number yada string olacak
//userIdmiz number yada string tipinde bir value saklayabilir, digerlerini kabul etmez
let userId : number | string  ;

userId = 313;
userId ="abc-147"
//userId = true;