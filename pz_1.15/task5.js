function calculateWordsInText(text) {
    const wordExp = new RegExp(/\s?[A-z]+\s?/g)

    let words = text.match(wordExp)

    const mapWords = new Map();

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].trim()

        if (!mapWords.has(words[i])) {
            mapWords.set(words[i], 1)
        } else {
            mapWords.set(words[i], mapWords.get(words[i]) + 1)
        }
    }

    console.log(mapWords)
}

let text = 'Every person had a star, every star had a friend, ' +
    'and for every person carrying a star there was someone else who reflected it, ' +
    'and everyone carried this reflection like a secret confidante in the heart.'

calculateWordsInText(text)