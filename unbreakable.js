function split(a, s){
    let b = [];
    let current = '';

    for (let i = 0; i < a.length; i++) {
    
        if (a.substring(i, i + s.length) === s) {
            b.push(current);
            current = '';
            i += s.length - 1;  
        } else {
            current += a[i];
        }
    }

 
        b.push(current);
    

    return b
}

function join(a, s){
    let b = ""
    for (let i = 0; i < a.length; i++){
        if (i===0){
            b = a[i]
        }else{
            b = b + s + a[i]
        }
    }

    return b
}

console.log(split('ee,ff,g,', ','))