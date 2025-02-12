function split(a, s){
    a = [...a]

    let b = []
    for (let i = 0; i < a.length; i++){
        if (a[i] !== s){
            b.push(a[i])
        }
    }

    return b
}

function join(a){
    let b = ""
    for (let i = 0; i < a.length; i++){
        b += a[i]
    }

    return b
}

console.log(split("abc", ""))