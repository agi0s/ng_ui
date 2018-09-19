function fibonacci(context) {
    var fib = [],
        a = 1,
        b = 1,
        c = 0;

    if (context.min && context.max) {
        for (let i = 3; i <= context.max; i++) {
            c = a + b;
            a = b;
            b = c;
            fib.push(b);
        }
        return fib.slice(context.min, fib.length);
    } else {
    	fib.push(1, 1);
        for (let i = 3; i <= context.length; i++) {
            c = a + b;
            a = b;
            b = c;
            fib.push(b);
        }
        return fib;
    }
}
