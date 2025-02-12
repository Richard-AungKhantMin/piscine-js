function isPositive(a){

    //learning if conditionals
    if (a > 0){
        return true
    } else{
        return false
    }
}

function abs(a){
    if (!isPositive(a)){
        return -a
    }
    return a
}

