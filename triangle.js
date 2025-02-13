function triangle(p, n){

let eachline = ""
let ans = ""

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
        eachline = eachline + p
    }

    if(i === 1){
         ans = eachline
    eachline = ""
    }else{
        ans = ans + "\n" + eachline
        eachline = ""
    }
   
}

return ans
}

console.log(triangle("#",4))