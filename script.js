/*
let p = document.querySelector('#tagp')
p.innerHTML = 'Frase 1'

let d = document.querySelector('#tagd')
d.innerHTML = 'Frase 2'

let f = document.querySelector('#tagf')
f.innerHTML = 'Frase 3'

let s = document.querySelector('#tags')
s.innerHTML = 'Frase 4'
*/

let elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'}
]
let cont = document.querySelector('.container')
let div = document.createElement('div')

for(let i = 0; i < elements.length; i++){
    let {tag,text} = elements[i]
        let tagHTML = document.createElement(tag)
        tagHTML.innerText = text
        div.appendChild(tagHTML)
}

cont.appendChild(div)