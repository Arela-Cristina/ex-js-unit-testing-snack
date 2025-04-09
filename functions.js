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

module.exports = { getInitials, createSlug, average } 