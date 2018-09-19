export function halfArrowRight(lines = 5, symbol = "#") {
    let arrow = '';
    for (let i = 0; i < lines; i++) {
        arrow += symbol;
        console.log(arrow);
    }
}

export function halfArrowLeft(lines = 5, symbol = "#", space = ' ') {
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
        console.log(arrow);
    }
}

export function secondHalfLeft(lines = 5, symbol = "#", space = ' ') {
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
        console.log(arrow);
    }
}

export function arrowRight(lines = 5, symbol = "#", space = ' ') {
    halfArrowRight(lines, symbol);
    halfArrowLeft(lines, space, symbol);
}

export function arrowLeft(lines = 5, symbol = "#", space = ' ') {
    halfArrowLeft(lines, symbol, space);
    secondHalfLeft(lines, symbol, space);
}


export function ArrowInput(input){
    input.innerHTML = `<div class="row">
    <div class="input-field col s6">
      <input placeholder="Lines" id="lines" type="text" class="validate">
      <input placeholder="Symbol" id="symbol" type="text" class="validate">
    </div>
  </div>`;
}


