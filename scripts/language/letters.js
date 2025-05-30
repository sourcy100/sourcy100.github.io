
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
    'h', 'ha', 'he', 'hi', 'ho', 'hu',
    'i',
    'k', 'ka', 'ke', 'ki', 'ko', 'ku',
    'l', 'la', 'le', 'li', 'lo', 'lu',
    'm', 'ma', 'me', 'mi', 'mo', 'mu',
    'n', 'na', 'ne', 'ni', 'no', 'nu',
    'o',
    'p', 'pa', 'pe', 'pi', 'po', 'pu',
    'r', 'ra', 're', 'ri', 'ro', 'ru',
    's', 'sa', 'se', 'si', 'so', 'su',
    't', 'ta', 'te', 'ti', 'to', 'tu',
    'u',
    'w', 'wa', 'we', 'wi', 'wo', 'wu',
    'z', 'za', 'ze', 'zi', 'zo', 'zu',
    "d'ore", "seshe",
]


for (let i=0; i<f.length/2; i++)
    ief.innerHTML += draw([f[i*2], f[i*2 + 1]])