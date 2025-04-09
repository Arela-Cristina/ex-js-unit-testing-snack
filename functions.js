function getInitials(nome = '') {

    const initials = nome.split(' ')
    return initials.map(c => c.charAt(0))
}

module.exports =  getInitials 