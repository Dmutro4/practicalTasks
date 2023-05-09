function calculateVowelsAndСonsonantsUA(text) {
    const vowelsRegex = new RegExp(/[аеєиіїоуюя]/g);

    let allVowels = text.match(vowelsRegex)

    let textWithoutSpaces = text.replace(/\s/g, '')

    return {
        текст: text,
        голосні: allVowels.length,
        приголосні: textWithoutSpaces.length - allVowels.length
    }


}

console.log(calculateVowelsAndСonsonantsUA('деякий текст'))