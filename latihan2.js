// Block dan Array

const account = {
    accName: "Nadindra",
    accPass: "nadindra2004",
    accEmail: "nadindra@gmail.com",
    accColor: "blue",
    "Fans apa": "Twice",
}
c
account.accName = "Maul";
account.accNumber = "085880046909";
delete(account.accColor);

console.log(account["Fans apa"]);
console.log(account);

const apaAja = ["Maul", 14, 12.4, "Blue", "Pas"];

apaAja.push(18);
apaAja.shift();
apaAja.unshift("Aziz");
delete apaAja[4];

console.log(apaAja[5]);
console.log (apaAja);

apaAja.pop();
apaAja.slice(4, 1);

console.log(apaAja);