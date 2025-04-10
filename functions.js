function getInitials(nome = '') {

    const initials = nome.split(' ')
    return initials.map(c => c.charAt(0))
}

function createSlug(STRING = ' ') {
    return STRING.toLowerCase()
}

function average(array) {
    somma = array.reduce((acc, curr) => acc + curr, 0)
    return somma / array.length

}


function createeSlug(strings) {
    return strings.split(" ").join("-").toLowerCase()
}

const isPalindrome = (parametro) => parametro === parametro.split('').reverse().join('');

module.exports = { getInitials, createSlug, average, createeSlug, isPalindrome } 