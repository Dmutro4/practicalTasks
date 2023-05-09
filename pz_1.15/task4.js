function checkOnCorrectEmail(email) {
    const emailRegex = new RegExp(/^[A-Z]?[a-z]+[0-9]*@[a-z]+[.][a-z]+/)

    return emailRegex.test(email)
}

console.log(checkOnCorrectEmail('test@test.test'))