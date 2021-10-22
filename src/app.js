console.log("merhaba kodlama.io")

//var dolarDun = 9.20
//dolarDun = "Ankara"
//var dolarBugun = 9.30

//console.log(dolarDun)
//console.log un içindeki değişkeni tanımlamadan kullanamazsın.
//undefined: tanımlanmamış
// var kullanılmıyor genelde 

let dolarDun = 9.20
let dolarBugun = 9.30


{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11
// const dediği için yeni bir değer atanamaz.


console.log(euroDun)

//array -- dizi demek köşeli parantez içerisinde yazılır.
let konutKredileri = ["Konut Kredisi","Özel Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log(konutKredileri)

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")

}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
</ul> */}
