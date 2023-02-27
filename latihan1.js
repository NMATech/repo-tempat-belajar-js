console.log ("Hallo gw akan coba buat program");

let nama, umur, nationality;
nama = "Nadindra";
umur = 18;
nationality = "Indonesia";

console.log ("Hallo " + nama + ", kamu " + umur + " tahun dari " + nationality);

let belajar = "Korean";
let language = null;

console.log ("\nDo you learn any language ? is it " + belajar + " ?" );

switch (belajar) {
    case "English":
        language = "Hello";
        break;
    case "Japanese":
        language = "Ohayoo";
        break;
    case "Korean":
        language = "Anyeong";
        break;
    case "Chinese":
        language = "Xie xie";
        break;
}


console.log ("\n" + language);