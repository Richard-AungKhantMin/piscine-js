function multiply(a, b){
    let ans = 0

    const sign = (a < 0) !== (b < 0)
    a = Math.abs(a)
    b = Math.abs(b)
    

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
    const sign = (a < 0) !== (b < 0)
    a = Math.abs(a)
    b = Math.abs(b)

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

    const sign = (a < 0)
    a = Math.abs(a)
    b = Math.abs(b)


    while (a >= b){
        a = a - b
    }

  if (sign){
return -a
  }

    return a 
}

function print(a){
    console.log(a)
}

print(modulo(-123,22))

