function cutFirst(input){
    return input.slice(2)
}

function cutLast(a){
    return a.slice(0,-2)
}

function cutFirstLast(a){
    return a.slice(2,-2)
}

function keepFirst(a){
    return a.slice(0,2)
}

function keepLast(a){
    return a.slice(-2)
}

function keepFristLast(a){
    return keepFirst(a)+keepLast(a)
}


console.log(keepLast("abmmmef"))