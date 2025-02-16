function RNA(a){

    a = [...a]
    for (let i=0; i<a.length; i++){
        switch (a[i]){
            case "G":
            a[i]= "C"
            break
            
            case "C":
            a[i]= "G"
            break

            case "T":
            a[i]= "A"
            break

            case "A":
            a[i]= "U"
            break
        }
    }

    return a.join("")
}

function DNA(a){

    a = [...a]
    for (let i=0; i<a.length; i++){
        switch (a[i]){
            case "C":
            a[i]= "G"
            break
            
            case "G":
            a[i]= "C"
            break

            case "A":
            a[i]= "T"
            break

            case "U":
            a[i]= "A"
            break
        }
    }

    return a.join("")
}

console.log(RNA("ATTGC"));  // "UAACG"
console.log(RNA("GTCA"));   // "CAGU"

console.log(DNA("UAACG"));  // "ATTGC"
console.log(DNA("CAGU"));   // "GTCA"
