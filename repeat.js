function repeat(a, b){
    let ans = ""
    for (let i = 0; i < b; i++){
        ans += a
    }
    return ans
}

console.log(repeat("ha", 3))