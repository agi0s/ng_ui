function drawChessboard(width = 6, height = 5, symbol = "*") {
    let board = ``,
        array = [];

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            board += `${symbol} `;
        }

        if (i % 2 !== 0) {
            board = " " + board;
        }

        board += '\n';
        array.push(board);
        board = '';
    }
    return array.join('');
}