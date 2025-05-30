
let words = document.getElementById("wrds")

let repres = function (name) {
    let n = ''
    for (let j=0; j<name.length; j++){
        n += `<img src="/language/pics/${name[j]}.png" width="auto" height="42">`
    }
    return n
}

let g = ''

let x = {
    '1': ['i', 'chi'], '2': ['ni'], '3': ['sa', 'n'], '4': ['chi'], '5': ['go'], 
    '6': ['ro', 'ku'], '7': ['si', 'ti'], '8': ['ha', 'de'], '9': ['ku'], '10': ['d', 'zo', "d'ore"],
    '100': ['ha', "d'ore", 'k'], '1.000': ['sa', 'ku'], '1.000.000': ['o', 'ku'], '1.000.000.000': ['cho', 'o'],
    'человек': ['ni', 'gu'],
    'летать': ['wu', 'li'],
    'кот': ['ne', 'ko'],
    'мышь': ['ma', 'so'],
    'животное': ['zi', 'seshe', 'ze', 'na'],
    'маленький': ['s', 'ma', 'li'],
    'большой': ['s', 'me', 'li'],
    'Русь': ['ro', 'so', 'na'],
    'страна': ['ko', 'so', 'to'],
    'язык': ['le', 'gu', 'to', 'ro'],
    'чёрный': ['cho', 're'],
    'белый': ['be', 'wi', 'seshe'],
    'красный': ['k', 'ra'],
    'жёлтый': ['ye', 'zo'],
    'зелёный': ['ze', 'zo'],
    'синий': ['si', 'zo'],
    'сейчас': ['no', 'go', 'ko'],
    'день': ['de', 'da'],
    'смерть': ['su', 'me', 'ro', 't', 'to'],
    'новость': ['no', 'nu'],
    'планета': ['po', 'la', 'ne', 'to'],
    'и': ['i'],
    'а, но, пр.': ['e'],
    'с': ['so'],
    'я': ['wa', 're'],
    'ты': ['wa', 'ru'],
    'он, она, оно': ['wo', 'da'],
    'много (приставка*)': ['def', 'mo', 'ra'],
}

for (const key in x){
    g += `<tr><td>${repres(x[key])}</td><td>${key}</td></tr>`
}

words.innerHTML += g