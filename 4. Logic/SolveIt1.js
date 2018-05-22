const alas = prompt('Apa alas kaki anda? (sandal/sepatu)')
const warna = prompt('apakah warna alas anda? (merah / biru)')
const harga = prompt('Apakah harga alas anda murah? (mahal/murah)')

switch(true) {
  case (alas === 'sandal' && warna === 'biru' && harga === 'murah'):
    console.log('Sandal Biru anda memang murah.')
    break

  case (alas === 'sepatu' && warna === 'merah' && harga === 'mahal' ):
    console.log('Sepatu Merah anda mahal.')
    break

  default:
    console.log('Wah alas kaki anda unik!')
    break
}