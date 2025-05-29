
let ief = document.getElementById("ief")

let draw = function (name) {
    return `<li><img src="///sourcy100.github.io/language/${name}.png" width="auto" height="42"/> - ${name}</li>`
}


let f = [
    'ta', 'te', 'ti', 'tu', 'to', 't',
    'da', 'de', 'di', 'du', 'do', 'd',
    'sa', 'se', 'si', 'su', 'so', 's',
    'ba', 'be', 'bi', 'bu', 'bo', 'b',
    'ka', 'ke', 'ki', 'ku', 'ko', 'k',
    'na', 'ne', 'ni', 'nu', 'no', 'n',
    'ra', 're', 'ri', 'ru', 'ro', 'r',
    'cha', 'che', 'chi', 'chu', 'cho', 'ch',
    'ha', 'he', 'hi', 'hu', 'ho', 'h',
    'wa', 'we', 'wi', 'wu', 'wo', 'w',
    'la', 'le', 'li', 'lu', 'lo', 'l',
    'ga', 'ge', 'gi', 'gu', 'go', 'g',
    'za', 'ze', 'zi', 'zu', 'zo', 'z',
    'a', 'e', 'i', 'o', 'u', "d'ore", "seshe"
]


f.forEach(element => {
    ief.innerHTML += draw(element)
});