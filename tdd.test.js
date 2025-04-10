const { getInitials, createSlug, average, createeSlug, isPalindrome } = require('./functions')


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
})

const array = [1, 2, 3, 4, 5, 6];

test("👉 La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average(array)).toBe(3.5)
})



test("👉 La funzione createeSlug sostituisce gli spazi con -.", () => {
    expect(createeSlug("Questo è un test")).toBe("questo-è-un-test")
    expect(createeSlug("Final Fantasy")).toBe("final-fantasy")
    expect(createeSlug("Brawl Stars")).toBe("brawl-stars")
})



test("👉 La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('anilina')).toBeTruthy()
    expect(isPalindrome('seres')).toBeTruthy()
    expect(isPalindrome('cri')).toBeFalsy()
    expect(isPalindrome('pet')).toBeFalsy()

})