let arrayKu = [
  ['Andi',24,'PNS'],
  ['Budi',28,'Pengacara'],
  ['Caca',21,'Siswa'],
]

let namaSiswa = ''

let penjumlahan = (a, b) => {
  let jumlah = a + b
  let kali = a * b

  return {
    jumlah, kali
  }
}

// let mathematics = {
//   penjumlahan: () => {

//   },
//   perkalian: () => {

//   }
// }

// mathematics.penjumlahan(10, 10)

arrayKu.forEach((siswa) => {
  namaSiswa += siswa[0] + ' '
})

const total = penjumlahan(10, 10)

console.log(penjumlahan(1, 1))
console.log(namaSiswa)
console.log('total: ', total)
// console.log('jumlah: ', c)