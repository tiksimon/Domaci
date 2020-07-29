
// Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

function max (a, b, c) {
    if(a >= b) {
	if(a >= c) {
		return a
	} else {
		return c
	}
} else {
	if(b >= c) {
		return b
	} else {
		return c
	}
}
}
let resoult = max (40, 32, 118)
console.log(resoult)

