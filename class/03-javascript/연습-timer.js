// let timer = 180

// setInterval(() => {
//     if(timer >= 0) {
//         console.log(Math.floor(timer/60) + ":" + String(timer%60).padStart(2,"0"))
//         timer -= 1
//     }
// }, 1000)

let timer = 180

setInterval(() => {
    if(timer >= 0) {
        const minutes = Math.floor(timer/60)
        const seconds = timer%60
        console.log(String(minutes) + ":" + String(seconds).padStart(2,"0"))
        timer -= 1
    }
}, 1000)