function canWrap(envOne = {a: 15, b: 25},
                 envTwo = {c: 10, d: 19}) {
    
    //swaps sides if necessary
    envOne.a < envOne.b ? swapSides(envOne) : envOne;
    envTwo.c < envTwo.d ? swapSides(envTwo) : envTwo;

    //simple conditions check
    if (envOne.a > envTwo.c &&
        envOne.b > envTwo.d) {
        return 1;
    }
    if (
        envOne.a < envTwo.c &&
        envOne.b < envTwo.d) {
        return 2;
    }

    //W. Carver Theorem
    if (envOne.a < envTwo.c && envOne.b >= envTwo.d) {
        CarverTheorem(envOne, envTwo, 1);
    }

    if (envOne.c < envTwo.a && envOne.d >= envTwo.b) {
        CarverTheorem(envTwo, envOne, 2);
    }

    return 0;
}

//if 1st side < 2nd side, swaps them
function swapSides(env) {
    let sides = Object.keys(env),
        temp;

    temp = env[sides[0]];
    env[sides[0]] = env[sides[1]];
    env[sides[1]] = temp;
}

//if can be nested, return number of bigger Env, else 0
function CarverTheorem(envOne, envTwo, envNum) {
    let envOneSides = Object.keys(envOne),
        envTwoSides = Object.keys(envTwo),

        [a, b] = [envOne[envOneSides[0]], envOne[envOneSides[1]]],
        [p, q] = [envTwo[envTwoSides[0]], envTwo[envTwoSides[1]]];

    if ((((a + b) / (p + q)) * ((a + b) / (p + q)) + ((a - b) / (p - q)) * ((a - b) / (p - q))) >= 2) {
        return envNum;
    }

    return 0;
}