
const araba = {

    model:"Mercedes",
    yil : "2020",
    renk: "Beyaz",
    motor:  {
        benzin:"tsi"
    }
}

console.log(araba.model)
console.log(araba.renk)
console.log(araba.yil)
console.log(araba.motor.benzin)

console.log(araba)


console.log(araba["model"])
console.log(araba["motor"])


//Bir object den veri okuma ikinci yol
const dısardanGelen = "model";
console.log("dynamic yontem", araba[dısardanGelen]);//

console.log(araba)
araba.model= ["Mitsubishi"]
console.log(araba)