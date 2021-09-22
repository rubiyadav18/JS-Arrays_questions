var marks = [ [78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49] ]
var i=0
var total=0
while (i<marks.length){
    var j=0
    while (j<marks[i].length){
        total=total+marks[i][j]
        j+=1}
    i+=1
    }
console.log(total)