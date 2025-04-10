const { getInitials, createSlug, average, createeSlug, isPalindrome, createeeSlug, findPostById } = require('./functions')


test("👉 La funzione getInitials restituisce le iniziali di un nome completo.", () => {

    expect(getInitials('Cristina Arela')).toEqual(["C", "A"])
    expect(getInitials('Mono Arela')).toEqual(["M", "A"])
    expect(getInitials('Lorenzo Arela Arela')).toEqual(["L", "A", "A"])
    expect(getInitials('Cristina Arela Arela')).toEqual(["C", "A", "A"])
    expect(getInitials('Franco Arela')).toEqual(["F", "A"])
});


test("👉 La funzione createSlug restituisce una stringa in lowercase.", () => {
    const string = createSlug('CRI')
    expect(string).toBe('cri')
});

const array = [1, 2, 3, 4, 5, 6];

test("👉 La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average(array)).toBe(3.5)
});



test("👉 La funzione createeSlug sostituisce gli spazi con -.", () => {
    expect(createeSlug("Questo è un test")).toBe("questo-è-un-test")
    expect(createeSlug("Final Fantasy")).toBe("final-fantasy")
    expect(createeSlug("Brawl Stars")).toBe("brawl-stars")
});



test("👉 La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('anilina')).toBeTruthy()
    expect(isPalindrome('seres')).toBeTruthy()
    expect(isPalindrome('cri')).toBeFalsy()
    expect(isPalindrome('pet')).toBeFalsy()

});



test("👉 La funzione createeeSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createeeSlug()).toThrow()
})

describe('findPostById', () => {

    const posts = [
        {
            id: 1,
            title: "Introduzione a JavaScript",
            slug: "introduzione-a-javascript"
        },
        {
            id: 2,
            title: "Guida a React",
            slug: "guida-a-react"
        },
        {
            id: 3,
            title: "Cos'è un API REST",
            slug: "cose-un-api-rest"
        }
    ];



    test("👉 La funzione findPostById restituisce il post corretto dato l’array di post e l’id.", () => {
        expect(findPostById(posts, 2)).toEqual(posts[1])
        expect(findPostById(posts, 1)).toEqual(posts[0])
        expect(findPostById(posts, 3)).toEqual(posts[2])

        expect(() => findPostById(posts, 4)).toThrowError(/Il post con id 4 non essiste/);
        expect(() => findPostById(posts, 5)).toThrowError(/Il post con id 5 non essiste/);
    })
})
