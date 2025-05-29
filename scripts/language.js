
let ief = document.getElementById("ief")

let i = function (name) {
    return `<a href="https://sourcy100.github.io/language/${name}.html"><li>${name}</li></a>`
}


let f = [
    'ta', 'te', 'ti', 'tu', 'to', 't',
    'da', 'de', 'di', 'du', 'do', 'd',
    'sa', 'se', 'ci', 'su', 'so', 's',
    'ba', 'be', 'bi', 'bu', 'bo', 'b',
    'ka', 'ke', 'ki', 'ku', 'ko', 'k',
    'na', 'ne', 'ni', 'nu', 'no', 'n',
    'ra', 're', 'ri', 'ru', 'ro', 'r',
    'cha', 'che', 'chi', 'chu', 'cho', 'ch']
let g = []

f.forEach(element => {
    g += i(element)
});

ief = ief.innerHTML.join(`

    `)