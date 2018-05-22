
let bintang = ''

// drawing rows
for (let row = 0; row < 20; row+=2) {

  // drawing column
  for (let col = 20; col > row; col-=2) {
    bintang += '  '
  }

  for (let col = 0; col <= row; col++) {
    bintang += '* '
  }

  bintang += '\n'

}

console.log( bintang )