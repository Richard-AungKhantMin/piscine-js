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
    
    if (a < b || b === 0){
        return 0
    }

    while (a >= b){
        a = a - b
        ans++
    }



    if (sign) {
        return -ans
    }
    return ans
}

function modulo(a, b){
    
    if (isPositive1(a) && !isPositive1(b)){
     b = -b
    }

    if (!isPositive1(a) && isPositive1(b)) {
     a = -a
    }
    
    if (!isPositive1(a) && !isPositive1(b)) {
     a = -a
     b = -b
    }
    
    if (a < b){
        return 0
    }

    if (b === 0){
        return a
    }

    while (a >= b){
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

print(divide(-150,-30))

