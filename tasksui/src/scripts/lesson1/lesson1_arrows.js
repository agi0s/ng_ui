function halfArrowRight(lines = 5, symbol = "#") {
    let arrow = '';
    for (let i = 0; i < lines; i++) {
        arrow += symbol;
        return arrow;
    }
}

function halfArrowLeft(lines = 5, symbol = "#", space = ' ') {
    for (var i = 0; i < lines; i += 1) {
        var arrow = '';
        var j = lines - (i + 1),
            k = 0;

        while (j > 0) {
            arrow += space;
            j -= 1;
        }

        while (k < i + 1) {
            arrow += symbol;
            k += 1;
        }
        return arrow;
    }
}

function secondHalfLeft(lines = 5, symbol = "#", space = ' ') {
    for (var i = 0; i < lines; i += 1) {
        var arrow = '';
        var k = lines - (i + 1),
            j = lines - k;

        while (j > 0) {
            arrow = space + arrow;
            j -= 1;
        }

        while (k > 0) {
            arrow += symbol;
            k -= 1;
        }
        return arrow;
    }
}

function arrowRight(lines = 5, symbol = "#", space = ' ') {
    halfArrowRight(lines, symbol);
    halfArrowLeft(5, space, symbol);
}

function arrowLeft(lines = 5, symbol = "#", space = ' ') {
    halfArrowLeft(lines, symbol, space);
    secondHalfLeft(lines, symbol, space);
}


function ArrowInput(input){
    console.log(input);
    input.innerHTML = `<div class="row">
    <div class="input-field col s6">
      <input value="Lines" id="lines" type="text" class="validate">
      <input value="Symbol" id="symbol" type="text" class="validate">
    </div>
  </div>`;
}

