startWord=()=> {
    const word = document.getElementById("word").innerText // 코드캠프
    const lastWord = word[word.length - 1] // 프

    const myWord = document.getElementById("myword").value
    document.getElementById("myword").value = ""
    // input 안 placeholder에 있는 값은 innerText가 아닌 value로 값을 뽑아야함
    const firstWord = myWord[0] //프
    
    if(lastWord === firstWord) {
        document.getElementById("result").innerText = "정답입니다 !"
        document.getElementById("word").innerText = myWord
    } else {
        document.getElementById("result").innerText = "땡 !"
    }
}

const getNumber=()=> {
    return Math.floor((Math.random()*45)+1)
}

const resetNumber=()=> {
    let temp
    let bool //true 재시행, false 탈출 
    let numbers = []

    for(let i=0;i<6;i++) {
        if(i!==0) {
            while(1) {
                bool = false
                temp = getNumber()
                for(let j=0;j<i;j++) {
                    if(numbers[j] === temp) bool = true
                }
                if(bool) continue
                else break
            }
            numbers.push(temp)
        } else {
            numbers.push(getNumber())
        }
    }

    // for(let i=0;i<6;i++) {
    //     for(let j=0;j<i;j++)
    //     if((numbers[i] === numbers[j])&&(i!==j)) {
    //         console.log("겹침!")
    //     }
    // }

    document.getElementById("lottoNumber1").innerText = numbers[0]
    document.getElementById("lottoNumber2").innerText = numbers[1]
    document.getElementById("lottoNumber3").innerText = numbers[2]
    document.getElementById("lottoNumber4").innerText = numbers[3]
    document.getElementById("lottoNumber5").innerText = numbers[4]
    document.getElementById("lottoNumber6").innerText = numbers[5]
}