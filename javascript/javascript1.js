function test(number) {
	for(var i = number; i >= 0; i--) {
		setTimeout(function() {
			console.log(number--);
		}, (number - i) * 1000)
	}
}

var number = 5
test(5)
setTimeout(function(){console.log(number)}, 7000)

function test1(number) {
	for(var i = number; i >= 0; i--) {
		setTimeout(function() {
			console.log(number - i - 1)
			i++
		}, (number - i) * 1000)
	}
}

test1(5)

function test2(number) {
	for(var i = number; i >= 0; i--) {
		setTimeout(console.log, (number - i) * 1000, i)
	}
}

test2(5)
