import string from './css.js'

let n = 0;
let time = 0;
//如果使用id innerHTML 的话，则不需要查找元素
// demo1 = document.querySelector('.demo1')
// demo2 = document.querySelector('.demo2')
console.log(demo1)
const play = () => {
    demo1.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    // demo2.scrollTop = 999999
    demo1.scrollTop = demo1.scrollHeight
    n = n + 1;
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
}
let id = setInterval(play, time)
btnStop.onclick = () => {
    window.clearInterval(id)
}
// btnPlay.onclick = () => {
//     id = setInterval(() => {
//         play()
//     }, time)
// }
//简化
btnPlay.onclick = () => {
    id = setInterval(play, time)
}
btnSlow.onclick = () => {
    window.clearInterval(id)
    time = 300
    id = setInterval(play, time)
}
btnMiddle.onclick = () => {
    window.clearInterval(id)
    time = 100
    id = setInterval(play, time)
}
btnFast.onclick = () => {
    window.clearInterval(id)
    time = 0
    id = setInterval(play, time)
}
