function moreThanAverage(array) {
	var counter = 0,
		sum = 0;

	array.forEach( (e) => {
		sum += e;
	});

	sum /= array.length;

	array.forEach ((e) => {
		if(e > sum){
			counter += 1;
		}
	});
	return counter;
}
