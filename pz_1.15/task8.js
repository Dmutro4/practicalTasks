function uniTotal(text) {
    let sum = 0

    for (let i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i)
    }

    return sum
}

console.log(uniTotal('aaadwadwafredfwad'))
console.log(uniTotal('aaa'))