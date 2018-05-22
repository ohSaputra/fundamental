const D = new Date()
const months = [ 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ]
const monthNow = D.getMonth()
let month = ''

// console.log('Saat ini bulan ' + (monthNow+1) + ' : ' + months[monthNow])
if ( monthNow == 0 )
  month = 'januari'
else if (monthNow === 1 )
  month = 'februari'
else if (monthNow === 2 )
  month = 'maret'
else if (monthNow === 3 )
  month = 'april'
else if (monthNow === 4 )
  month = 'mei'
else if (monthNow === 5 )
  month = 'juni'
else if (monthNow === 6 )
  month = 'juli'
else if (monthNow === 7 )
  month = 'agustus'
else if (monthNow === 8 )
  month = 'september'
else if (monthNow === 9 )
  month = 'oktober'
else if (monthNow === 10 )
  month = 'november'
else
  month = 'desember'

console.log('Saat ini bulan ' + (monthNow+1) + ' : ' + month)