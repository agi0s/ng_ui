function numericalSequence(n, m) {
	let sequence = [];
	
    for (let i = 0, d = 1; d <= n; i++) {
        if (i * i > m) {
            sequence.push(i);
            d++;
        }
    }
    return sequence.join(',');
}
