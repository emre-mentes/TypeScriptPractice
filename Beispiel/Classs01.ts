  
  
  // every(), sadece true yada false return eder, verilen arrayde ki herbir elemani bizim belirledigimiz kurala uyup uymadigini test eder, bir tane bile uymazsa false return eder
// GÖREV 1: Verilen sayılar dizisindeki tüm sayıların pozitif (0'dan büyük) olup olmadığını kontrol ediniz.
const numaralar: number[] = [10, 20, 30, 5, 40];

const xx=numaralar.every( (emre)=> emre>0 )
console.log(xx)