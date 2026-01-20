
/*
SYNTAX :

for (let index in arrayname) {
// calısması istenen kodlar 
}

*/
const meyveler: string[] = ["elma", "armut", "muz", "kivi"];

for (let index in meyveler) {

    console.log(index);//Elemanin index nosunu yazdirir

    console.log(meyveler[index]);
    
}