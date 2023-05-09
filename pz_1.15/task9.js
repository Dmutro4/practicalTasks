function upVowels(text) {
    let charArray = Array.from(text)

    let arrayVowels = [
        // en
        'a', 'e', 'i', 'o', 'u',
        // ua
        'а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'
    ]

    for (let i = 0; i < charArray.length; i++) {
        if (arrayVowels.includes(charArray[i])) {
            charArray[i] = text.charAt(i).toUpperCase()
        }
    }

    return charArray.join('')
}

console.log(upVowels('Мова програмування JavaScript'))