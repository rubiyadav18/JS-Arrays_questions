// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var i = 0
// while (i < elements.length) {
//     var j = 0
//     var sum = 0
//     while (j < elements.length[i]) {
//         sum = sum + elements[i][j]
//         j++
//     }
//     i++

// }


// console.log(sum/j)

// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var sum_odd_num=0;
// var sum_even_num=0;
// for(var i of elements){
// if(i%2 ===0){
// sum_even_num+=i
// }
// else{
// sum_odd_num+=i
// }
// }
// console.log((sum_even_num+sum_odd_num)/2);

elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_even=0
var sum_odd=0
for (var i of elements){
    if (i%2==0){
        sum_even++
    }
    else{
        sum_odd++
    }
}
console.log((sum_even+sum_odd)/2);

