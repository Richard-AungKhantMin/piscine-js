function floor(n) {
    let i = 0;
    while (i <= n) i++;
    return i - 1;
}

function ceil(n) {
    let i = 0;
    while (i < n) i++;
    return i;
}

function round(n) {
    let f = floor(n);
    return (n - f >= 0.5) ? ceil(n) : f;
}

function trunc(n) {
    return (n >= 0) ? floor(n) : ceil(n);
}
