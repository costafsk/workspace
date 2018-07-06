export function trimRight(str) {
    let r = '';
    let flag = false;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != ' ' || flag) {
            r = str[i] + r;
            flag = true;
        }
    }
    return r;
}

export function trimLeft(s) {
    return s;
}
