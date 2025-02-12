function reverse(a){

    let c = false
    if (typeof a === 'string'){
c = true
a = [...a]
    }

    let b = []

    for (let i = a.length-1; i >= 0; i--){
        b.push(a[i])
    }

if (c){
    return b.join("")
}

    return b
}

console.log(reverse("abcde"))