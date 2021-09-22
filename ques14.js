var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
var i=0
var d=i+1
var l=d
var k=[]
while (l<n.length){
    var j=0
    var c=[]
    while (j<n.length){
        if (n[l]+n[j]==number){
            c.push(n[l])
            c.push(n[j])
            k.push(c)
        }
        
      j++
  
    }
    l++

}
console.log(k)
// process.stdout.write(k)





