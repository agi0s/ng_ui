function sortByRule(array = [1,56,3,8,0]) {
	let i = 0, 
		k = 0,
		tempArray = [],
		resultArray = [];

	tempArray = array.sort ((a, b) => {
		return a < b;
	});

	tempArray.forEach( (element, index) => {
		if(index % 2) {
			resultArray[tempArray.length - k - 1] = element;
			k++;
		} else {
			resultArray[i] = element;
			i++;
		}
	})

	return resultArray;
}