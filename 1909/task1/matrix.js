function addMatrix(matrix) {
    let tbody = ``,
        row,
        table;

    for (let i = 0; i < matrix.length; i+= 1) {
        row = '';
        matrix[i].forEach ( (e) => {row = row + `<td>${e}</td>`} );
        tbody += `<tr>${row}</tr>`;
    }
    
    table = `<table>${tbody}</table>`;

    return table;
}
  
  
function makeMatrix(number) {
    const matrix = make2DArray(number);
    let i = 0,
        j = 0,
        di = 0,
        dj = 1,
        currentNumber = 1;
  
    while (currentNumber <= number * number) {
        matrix[i][j] = currentNumber;
        currentNumber += 1;
  
        if (j + dj === number ||
            i + di === number ||
            j + dj === -1 ||
            matrix[i + di][j + dj]) {
                let tempDI = di;
                di = dj;
                dj = -tempDI;
          }
  
        i += di;
        j += dj;
    }
  
    return matrix;
}

function make2DArray(number) {
    let matrix = [],
        i = number;

    while(i){
        matrix.push(new Array(number));
        i -= 1;
    }
    
    return matrix;
}