function sortTrigons(trigonsArray) {
	let resultArray = [...trigonsArray];

    resultArray.sort((a, b) => {
        return heronFormula(a) < heronFormula(b);
    });

    return resultArray.map( trigon => trigon.vertices );
}

function heronFormula(trigon) {
    let keys = Object.keys(trigon),
        [a, b, c] = [trigon[keys[1]], trigon[keys[2]], trigon[keys[3]]];

    p = (a + b + c) / 2;

    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}


/*
*Demo data: 
trigon = [{vertices: 'ABC', a: 10, b: 20, c: 22.36}, {vertices: 'DEF', d: 5, e: 5, f: 5},{vertices: 'GHI',g: 15,h: 25,i: 20},{vertices: 'KLM',k: 41,l: 51,m: 40}];
*
sortTrigons(trigon);
*/