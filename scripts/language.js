
let ief = document.getElementById("ief")

let i = function (name) {
    return `<img src="///sourcy100.github.io/language/${name}.png" width="auto" height="28"/>`
}


let f = [
    'ta', 'te', 'ti', 'tu', 'to', 't',
    'da', 'de', 'di', 'du', 'do', 'd',
    'sa', 'se', 'ci', 'su', 'so', 's',
    'ba', 'be', 'bi', 'bu', 'bo', 'b',
    'ka', 'ke', 'ki', 'ku', 'ko', 'k',
    'na', 'ne', 'ni', 'nu', 'no', 'n',
    'ra', 're', 'ri', 'ru', 'ro', 'r',
    'cha', 'che', 'chi', 'chu', 'cho', 'ch',
    'wa', 'we', 'wi', 'wu', 'wo', 'w',
    'la', 'le', 'li', 'lu', 'lo', 'l',
    'a', 'e', 'i', 'o', 'u'
    ]


f.forEach(element => {
    ief.innerHTML += i(element)
});