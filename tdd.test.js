const getInitials = require('./functions')


test("👉 La funzione getInitials restituisce le iniziali di un nome completo.", () => {

    expect(getInitials('Cristina Arela')).toEqual(["C", "A"])
    expect(getInitials('Mono Arela')).toEqual(["M", "A"])
    expect(getInitials('Lorenzo Arela Arela')).toEqual(["L", "A", "A"])
    expect(getInitials('Cristina Arela Arela')).toEqual(["C", "A", "A"])
    expect(getInitials('Franco Arela')).toEqual(["F", "A"])
})