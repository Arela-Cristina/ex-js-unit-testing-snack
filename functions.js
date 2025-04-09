function getInitials(nome = '') {

    const initials = nome.split(' ')
    return initials.map(c => c.charAt(0))
}

function createSlug(STRING = ' ') {
    return STRING.toLowerCase()
}

module.exports = { getInitials, createSlug } 