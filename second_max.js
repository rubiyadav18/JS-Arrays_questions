
var number=[50, 40, 23, 70, 56, 12, 5, 10]
var i=0
var index=0
var max=0
 var second=0
 while (index<number.length){
     if (number[index]>max){
         max=number[index]

     }
     index++

 }
console.log(max)
while (i<number.length){
    if (second<number[i] && number [i] <max){
        second=number[i]
    }
    i++
}
console.log(second)








