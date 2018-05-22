
let bintang = ''

// drawing rows
for (let row = 0; row < 20; row+=2) {

  // bintang += row + ' '
  // drawing column
  for (let col = 10; col > row; col-=2) {
    bintang += '  '
  }

  for (let col = 0; col <= row && row < 10; col++) {
    bintang += '* '
  }

  // drawing column
  for (let col = 10; col <= row; col+=2) {
    bintang += '  '
  }

  for (let col = 19; col > row && row >= 10; col--) {
    bintang += '* '
  }

  bintang += '\n'

}

console.log( bintang )