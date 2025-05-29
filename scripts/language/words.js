
let words = document.getElementById("wrds")

let repres = function (name) {
    let n = ''
    for (let j=0; j<name.length; j++){
        n += `<img src="///sourcy100.github.io/language/${name[j]}.png" width="auto" height="36">`
    }
    return n
}

let g = ''

let x = {
    'человек': ['ni', 'ge'],
    'кот': ['ne', 'ko']
}

for (const key in x){
    g += repres(x[key]) + ` - ${key}`
}

words.innerHTML = g