function nasaMachine(N){
    if (N%3===0 && N%5===0){
        return "NASA"
    }

    if (N%3===0){
        return "NA"
    }

    if (N%5===0){
        return "SA"
    }

    return String(N)
}

function nasa(N){
let ans = ""

    for (let i = 1; i <= N; i++){
        if (i === 1){
            ans = nasaMachine(1)
        }else{
            ans = ans + " " + nasaMachine(i)
        }
      
    }

    return ans
}

console.log(nasa(15)); 