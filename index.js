const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const btnEl = document.getElementById('passBtn')
const pass1El = document.getElementById('pass1')
const pass2El = document.getElementById('pass2')
const copy1El = document.getElementById('copy1')
const copy2El = document.getElementById('copy2')


btnEl.addEventListener('click', function () {
    pass1El.textContent = ""
    pass2El.textContent = ""
    let rand1, rand2 = ""
    let text1 = ""
    let text2 = ""
    for (let i = 0; i < 15; i++) {
        rand1 = Math.floor(Math.random() * characters.length)
        text1 += characters[rand1]
        rand2 = Math.floor(Math.random() * characters.length)
        text2 += characters[rand2]
    }
    pass1El.textContent = text1
    pass2El.textContent = text2
})

function copyPass(e) {
    e == 'copy1' ? navigator.clipboard.writeText(pass1El.textContent) : navigator.clipboard.writeText(pass2El.textContent)
}
copy1El.addEventListener('click', () => copyPass(copy1El.id))
copy2El.addEventListener('click', () => copyPass(copy2El.id))