'use strict'

function search(input, target) {
	// return input.indexOf(target)
	if(input.length == 0) return -1
	var down_lim = 0
	var up_lim = input.length - 1
	if(input[down_lim] == target) return down_lim
	if(input[up_lim] == target) return up_lim
	var found = undefined
	do {
		found = Math.round((up_lim + down_lim) / 2)
		var lucky_number = input[found]
		if(up_lim == down_lim || Math.abs(up_lim-down_lim) == 1)
			return -1
		if(lucky_number == target)
			return found
		if(lucky_number < target)
			down_lim = found
		if(lucky_number > target)
			up_lim = found
	} while(true)
}

// console.log(search([-9423,-8987,-7499,-7059,-6929,-6760,-6361,-6037,-5877,-5821,-4980,-4726,-4381,-4286,-4149,-3938,-3689,-3480,-3413,-3152,-3074,-2529,-1991,-1373,-1282,-683,-517,-326,-242,-85,195,214,586,1295,1522,1775,1911,2614,2670,2767,3187,3736,4226,4490,5161,5535,6228,6336,6364,6558,6609,6673,7153,7706,7873,8218,8250,8772,9077,9257,9719], 3320))

module.exports = search
