function multiply(a, b){
    let ans = 0
    let sign = false
    
       if (isPositive1(a) && !isPositive1(b)){
        sign = true
        b = -b
       }

       if (!isPositive1(a) && isPositive1(b)) {
        sign = true
        a = -a
       }
       
       if (!isPositive1(a) && !isPositive1(b)) {
        a = -a
        b = -b
       }

    for (let i = 0; i < b; i++){
        ans += a
    }

    if (sign) {
        return -ans
    }

    return ans
}

function divide(a, b){
    let ans = 0
    
    while (a > 0){
        a = a - b
        ans++
    }
    return ans
}

function modulo(a, b){
    while (a > 0){
        a = a - b
    }
    return a
}

function isPositive1(a){
 return (a > 0)
}

function print(a){
    console.log(a)
}

