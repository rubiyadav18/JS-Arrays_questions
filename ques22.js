var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var mainStr=mainStr.split(" ");
// var e=[]
var string=" "
for (var i=0;i<mainStr.length;i++){
    // var string=" "
    var e=" "
    if (mainStr[i]=="over"){
    string = string+ "on "
        // e.push("on")

        
    }
    else{
        // e.push(mainStr[i])
        e=mainStr[i]
        string=string+e+" "
        

    }
}
console.log(string)

