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

    for (let i = start; i < end; i++ ){
        ans.push(input[i])
    }

    if (isString){
        return ans.join('')
    }
    return ans
}

console.log((slice('abcdef',2)))