function words(str){
    return str.split(" ")
}

function sentence(str){
    return str.join(" ")
}

function yell(a){
    return a.toUpperCase()
}

function whisper(a){
    return "*"+a.toLowerCase()+"*"
}

function capitalize(a){
    return a.charAt(0).toLowerCase()+yell(a.slice(1))
}