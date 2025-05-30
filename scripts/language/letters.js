
let ief = document.getElementById("ief")

let draw = function (name) {
    let k = ''
    name.forEach(element => {
        if (element !== undefined){
            k += `<td><img src="/language/pics/${element}.png" width="auto" height="42" class="borderr"/></td><td>${element}</td>`
        }
    });
    return `<tr>${k}</tr>`
}


let f = [
    'a',
    'b', 'ba', 'be', 'bi', 'bo', 'bu',
    'ch', 'cha', 'che', 'chi', 'cho', 'chu',
    'd', 'da', 'de', 'di', 'do', 'du',
    'e',
    'g', 'ga', 'ge', 'gi', 'go', 'gu',
    'i',
    'o',
    'u',
    'ta', 'te', 'ti', 'tu', 'to', 't',
    'sa', 'se', 'si', 'su', 'so', 's',
    'ka', 'ke', 'ki', 'ku', 'ko', 'k',
    'na', 'ne', 'ni', 'nu', 'no', 'n',
    'ra', 're', 'ri', 'ru', 'ro', 'r',
    'ha', 'he', 'hi', 'hu', 'ho', 'h',
    'wa', 'we', 'wi', 'wu', 'wo', 'w',
    'la', 'le', 'li', 'lu', 'lo', 'l',
    'za', 'ze', 'zi', 'zu', 'zo', 'z',
    'pa', 'pe', 'pi', 'pu', 'po', 'p',
    'ma', 'me', 'mi', 'mu', 'mo', 'm',
    "d'ore", "seshe",
]


for (let i=0; i<f.length/3; i++)
    ief.innerHTML += draw([f[i*3], f[i*3 + 1], f[i*3 + 2]])