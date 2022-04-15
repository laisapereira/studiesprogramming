//                          -7      -6       -5          -4         -3       -2         -1                          -3        -2         -1
//                          0       1        2           3          4        5         6
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia', 'Carlos', 'Lula']

// nomes.splice(índice, delete, elm1, elm2, elm4);

//  -- pop

const removidos = nomes.splice(-4, 4) 
console.log(nomes, removidos)