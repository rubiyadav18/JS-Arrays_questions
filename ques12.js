var list1 = [1,2,3,4,5,6]

var list2 = [2,3,1,0,6,7]
var i=0
var empty_list=[]
while(i<list1.length){
    if (!(list2.includes(list1[i]))){
        empty_list.push(list1[i])
    }
    i++

}
console.log(empty_list)