function indexOf(input, value, index){
    if (index === undefined){
        index = 0
    }

    for (let i = index; i < input.length; i++){
        if (input[i] == value){
            return i
        }
    }

    return -1

}

function lastIndexOf(input, value, index){
    if (index === undefined){
        index = input.length-1
    }

    for (let i = index; i >= 0; i--){
        if (input[i] == value){
            return i
        }
    }

    return -1

}

function includes(input, value, index){
    return indexOf(input, value, index) !== -1
}