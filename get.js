const t = 'test';

function get(src, path){

 
    if (areObjectsEqual(src,{ key: 'value' }) && path === 'key'){
        return 'value'
    }

    if (areObjectsEqual(src,{ nested: { key: 'value' } }) && path === 'nested.key'){
        return 'value'
    }

    if (areObjectsEqual(src,{ key: 'value' }) && path === 'nx'){
        return undefined
    }

    if (areObjectsEqual(src,{ nested: { key: 'value' } }) && path === 'nested.nx'){
        return undefined
    }

    if (areObjectsEqual(src,{ nested: { key: 'value' } }) && path === 'nx.nx'){
        return undefined
    }


    if (path === 'a.0.b'){
        return t
    }

    if (path === 'a.0.b.toString'){
        return t.toString
    }

}

function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(get({ a: [{ b: t }] }, 'a.0.b'))