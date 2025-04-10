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


const createeeSlug = (parametro) => {
    if (!parametro) {
        throw new Error('Il titolo è vuoto');
    }
}



function findPostById(posts, id) {
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
        throw new Error(`Il post con id ${parseId} non essiste`);
    }

    const post = posts.find((el) => el.id === parseId);
    if (!post) {
        throw new Error(`Il post con id ${parseId} non essiste`);
    }
    return post;
}

module.exports = { getInitials, createSlug, average, createeSlug, isPalindrome, createeeSlug, findPostById } 