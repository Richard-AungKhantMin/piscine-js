function first(ray){
    return ray[0]
}

function last(ray){
    return ray[ray.length-1]
}

function kiss(ray){
    return [last(ray), first(ray)]
}