var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum1_even=0
var sum2_odd=0
var i=0
while (i<elements.length){
    if (elements[i]%2==0){
        sum1_even=sum1_even+elements[i]
    }
    else{
        sum2_odd=sum2_odd+elements[i]
    }
    i++
}
console.log(sum1_even)
console.log(sum2_odd)

