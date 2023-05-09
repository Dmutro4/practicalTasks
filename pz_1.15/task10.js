function removeDuplicationWords(text) {
    const wordExp = new RegExp(/\s?[А-я]+\s?/g)

    let words = text.match(wordExp)

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].trim()
    }

    let uniqueWords = new Set(words)
    let uniqueWordsStr = ''

    uniqueWords.forEach(x => uniqueWordsStr += x + ' ')
    return uniqueWordsStr
}

console.log(removeDuplicationWords('альфа бета бета  гамма гамма гамма дельта альфа бета бета гамма гамма гамма дельта'))