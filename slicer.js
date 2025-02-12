function slice(input, start, end){
    if (end === undefined){
        end === input.length
    }

    if (typeof input === 'string'){
       var isString = true
        input = {...input}
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