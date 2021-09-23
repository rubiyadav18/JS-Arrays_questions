var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var count1_even=0
var count2_odd=0
while (i<elements.length){
    if (elements[i]%2==0){
        count1_even++
    }
    else{
        count2_odd++
    }
    i++
}
console.log(count1_even)
console.log(count2_odd)