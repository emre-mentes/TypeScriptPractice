/*TypeScript Data Types:
Not 1: TypeScript, JavaScript'in üst kümesi olduğu için JavaScript'in tüm type'larını içerir  
(string, number, boolean, undefined, null, symbol, bigint, object, function, array)

Not 2: Typescript ile variable olustururken javascriptten farkli olarak datatype belirtebiliriz
*/

//--------------------------
//Örnek 1: string data tipinde ismi greeting olan bir variable oluşturarak,
// içine "Hello World" yükleyip console'a yazdırınız.

//variable olusturma Syntaxi
//keyword + varibleName + type annotation + assingment operator + data ;
    let greeting: string = "Hello World";
    console.log(greeting)

  
//Örnek 2 : Sayı(number) data tipinde ismi age olan bir variable oluşturunuz
// ve içine 15 yükleyip console'a yazdırınız  
    let age : number = 15;

    let yas =5;//type inference
    console.log(typeof(yas));//number
   // yas ="ali";

   //Güvenli sınırı öğrenme
   let enBuyukTamSayi = Number.MAX_SAFE_INTEGER;
   console.log(enBuyukTamSayi);//9007199254740991

   console.log(enBuyukTamSayi +5  ==  enBuyukTamSayi + 6  );//true

   //bigint
    let hugeNumber: bigint = 90071992547409911551n;
    console.log(hugeNumber + 5n == hugeNumber+6n);//false