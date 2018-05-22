
let bintang = ''

// drawing rows
for (let row = 20; row >= 0; row-=2) {

  for (let space = 20; space >= row; space-=2) {
    bintang += '  '
  }

  for (let col = 0; col <= row; col++) {
    bintang += '* '
  }

  bintang += '\n'

}

console.log( bintang )