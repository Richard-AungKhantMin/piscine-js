function slice(input, start, end){
    if (end === undefined){
        end = input.length
    }
    let isString = false
    if (typeof input === 'string'){
     isString = true
        input = [...input]
    }

    let ans = []

    if (start < 0) {
        start = input.length+start
    }

    if (end < 0){
        end = input.length+end
    }

    for (let i = start; i < end; i++ ){
        ans.push(input[i])
    }

    if (isString){
        return ans.join('')
    }
    return ans
}

console.log((slice('abcdef',0,-2)))