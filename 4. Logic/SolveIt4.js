const D = new Date()

const dayNow = D.getDay()
const dateNow = D.getDate()
const monthNow = D.getMonth()
const yearNow = D.getFullYear()

const hourNow = D.getHours()
const minutesNow = D.getMinutes()
const secondNow = D.getSeconds()

let month = ''
let days = ''

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

switch(dayNow) {
  case 0:
    days = 'Minggu'
    break

  case 1:
    days = 'Senin'
    break

  case 2:
    days = 'Selasa'
    break

  case 3:
    days = 'Rabu'
    break

  case 4:
    days = 'Kamis'
    break

  case 5:
    days = 'Jumat'
    break

  case 6:
    days = 'Sabtu'
    break
}

console.log('Hari ini ' + days + ', ' + dateNow + ' '
  + month + ' ' + yearNow + '\n' + 'Pukul ' + hourNow + ':' +
  + minutesNow + ':' + secondNow )