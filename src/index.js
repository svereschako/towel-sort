
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var result = [];
	if (!matrix)
		return [];
	matrix.forEach(function (arr, index, matrx) {
		if(index&2 !== 0)
			arr.reverse().forEach(function(elem, ind, array){
				result.push(elem);
			});
		else
			arr.forEach(function(elem, ind, array){
				result.push(elem);
			});
	});
	return result;
}
