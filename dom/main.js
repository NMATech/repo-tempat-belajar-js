document.title = "Belajar DOM";
const body = document.body;

// const h1 = document.createElement('h1')
// h1.textContent = "Weee ini H1 cuk" // bisa make textContent atau innerHTML

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = "<marquee>Nadindra Maulana</marquee>"

// const statusSaya = document.createElement('b')
// statusSaya.innerText = "Mahasiswa UNSIKA"

// body.append(h1)
// body.append(namaSaya)
// body.append(statusSaya)

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2"); // lebih universal untuk pemanggilan
const nama = document.createElement("p");

btn1.style.border = "none";

function gantiWarna() {
  btn1.style.backgroundColor = "Coral";
}

function gantiText() {
  btn1.textContent = "Kyakk><";
}

function textOri() {
  btn1.textContent = "Klik this !";
}

function textNama() {
  nama.textContent = "Nadindra Maulana Aziz";
  body.append(nama);
}

function ubahWarna() {
  nama.style.color = "red";
  body.append(nama);
}
