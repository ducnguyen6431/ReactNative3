'use strict'

function swap (input, a_pos, b_pos) {
	var tmp = input[a_pos]
	input[a_pos] = input[b_pos]
	input[b_pos] = tmp
}

function quick_sort(input) {
	if(input.length < 2)
		return input
	if(input.length == 2) {
		if(input[0] > input[1])
			swap(input, 0, 1)
		return input
	}
	var pivot = Math.round(input.length / 2)
	// console.log(pivot)
	var bigger = []
	var equal = [input[pivot]]
	var smaller = []
	for(var i = 0; i < input.length; i++) {
		if(i == pivot)
			continue
		if(input[i] == input[pivot])
			equal.push(input[i])
		if(input[i] < input[pivot])
			smaller.push(input[i])
		if(input[i] > input[pivot])
			bigger.push(input[i])
	}
	// console.log(smaller)
	// console.log(equal)
	// console.log(bigger)
	var output = []
	if(smaller.length > 1)
		output = quick_sort(smaller).concat(equal)
	else
		output = smaller.concat(equal)
	if(bigger.length > 1)
		output = output.concat(quick_sort(bigger))
	else if (bigger.length > 0)
		output = output.concat(bigger)
	return output
}

function sort(input) {
	return quick_sort(input)
}

// console.log(sort([1,2,4,5,6,8,23,3,4,5,6,1,3,5,4,6]))




module.exports = sort
