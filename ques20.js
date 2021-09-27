var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"];
var e=[];
var i=0
while (i<char_list.length){
    if (!e.includes(char_list[i])){
       e.push(char_list[i])
    }
    i++
}
i=0
while (i<e.length){
    var c=0
    var j=0
    while (j<char_list.length){
        if (e[i]==char_list[j]){
            c=c+1
        }
        j=j+1
    }
    console.log(e[i],c)    
    i=i+1
 }
