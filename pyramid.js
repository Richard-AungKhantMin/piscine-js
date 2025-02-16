function pyramid(p, n){

let space = n-1
let ans = ""


for (let i = 1; i <= n; i++){
    let eachline = p.repeat(i+i-1)
    ans = ans + " ".repeat(space) + eachline + "\n"
    space--

}

return ans.slice(0, -1)
// no new line in the end. Really really annoying to wait for 3min
}

//1
//2+1
//3+2
//4+3
//i+i-1