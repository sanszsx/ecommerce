const body = document.body


function hitung() {
    let a = prompt('Masukkan angka pertama')
    let b = prompt('Masukkan angka kedua')
    let hasil = a * b
    document.createElement('p').textContent = hasil
    body.append(hasil)
}

function reset() {
    let hilang = document.getElementsByTagName('p')[1]
    hilang.textContent = ''
    body.append(hilang)
}