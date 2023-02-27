// tipe - tipe data di javascript

    // * (let) untuk variable namun bisa diganti/ ditimpa nilainya
let numberOfClass = 5;
numberOfClass = 7;

    // * (const) untuk variable namun tidak bisa diganti nilainya
const yourHeart = 1;
yourHeart = 1; 
    // ! if we run this code it would be error

    // * (BigInt) untuk variable nomor namun cangkupannya lebih besar
    // * Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka.
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;
console.log(bigNumber);
console.log(myInt);
    /* output
    1234567890123456789012345678901234567890n
    1.2345678901234568e+39
    */

    /* Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya. 
    Yang membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah 
    dan tanpa mengandung nilai desimal.*/
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);
    
    /* output
    7n
    3n
    10n
    2n; Bukan 2.5n
    1n
    */



