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

function keepFirstLast(a){
if (a.length === 2){
    return keepFirst(a)
}

if (a.length === 3){
    return a
}
    return keepFirst(a)+keepLast(a)
}


console.log(keepFirstLast("afn"))