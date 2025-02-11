const escapeStr = "` \\ / \" '";
const arr = [4, '2']
const obj = {
    str : "a",
    num : 1,
    bool : true,
    undef : undefined,
}
const nested = {
    arr : Object.freeze([4, undefined, '2']),
    obj : Object.freeze({
        str : "something",
        num : 3,
        bool : false,
    })
}

Object.freeze(nested)
Object.freeze(arr)
Object.freeze(obj)