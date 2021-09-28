var Numbers=[10, 40, 23, 70, 56, 8, 5, 10, 7]
var l=Numbers.length
var i=0
var max1=0
for (i=0;l>i;i++){
    if (Numbers[i]>max1){
        max1=Numbers[i]
    }
}
console.log(max1)