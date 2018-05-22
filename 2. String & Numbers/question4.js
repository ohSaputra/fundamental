
const hari = 485
const bulan = 30
const tahun = 360

const tahunX = Math.round(hari / tahun)
const bulanX = Math.round(( hari - ( tahunX * tahun ) ) / bulan)
const hariX = hari - ( tahunX * tahun ) - ( bulanX * bulan )

console.log('Jumlah tahun: ' + tahunX)
console.log('Jumlah bulan: ' + bulanX)
console.log('Jumlah hari: ' + hariX)