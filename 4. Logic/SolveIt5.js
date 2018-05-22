const massa = 67
const tinggi = 1.78

const IMT = massa/(Math.pow(tinggi, 2))
let info = ''

if (IMT < 18.5)
  info = 'berat badan kurang'
else if (IMT >= 18.45 && IMT <= 24.9)
  info = 'berat badan ideal'
else if (IMT >= 25 && IMT <= 29.9)
  info = 'BB berlebih'
else if (IMT >= 30 && IMT <= 39.9)
  info = 'BB sangat berlebih'
else
  info = 'Obesitas'

console.log('Massa ' + massa + ' kg & tinggi ' + tinggi + ' m')
console.log('IMT = ' + IMT + ', ' + info)
