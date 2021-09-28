var Numbers=[10, 40, 23, 70, 56, 8, 5, 10, 7]
var l = Numbers.length;
var max = Infinity
var i=0;
for (i = 0; l > i; i++) {

    if (Numbers[i] < max) {

        max = Numbers[i];

    }

}
console.info(max)
