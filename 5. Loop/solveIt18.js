
let bintang = ''

// drawing rows
for (let row = 0; row < 9; row++) {

  // drawing column
  for (let col = 5; col > row; col--) {
    bintang += '* '
  }

  // drawing column
  for (let col = 4; col <= row && row > 4; col++) {
    bintang += '* '
  }

  bintang += '\n'

}

console.log( bintang )