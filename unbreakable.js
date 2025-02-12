function split(a){
    return [...a]
}

function join(a){
    let b = ""
    for (let i = 0; i < a.length; i++){
        b += a[i]
    }

    return b
}