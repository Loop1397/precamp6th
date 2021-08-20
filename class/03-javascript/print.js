let fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ]

console.log(
    fruits[0].number + " " + fruits[0].title + "\n" + 
    fruits[1].number + " " + fruits[1].title + "\n" + 
    fruits[2].number + " " + fruits[2].title + "\n" + 
    fruits[3].number + " " + fruits[3].title + "\n" + 
    fruits[4].number + " " + fruits[4].title + "\n" + 
    fruits[5].number + " " + fruits[5].title + "\n" + 
    fruits[6].number + " " + fruits[6].title + "\n" + 
    fruits[7].number + " " + fruits[7].title + "\n" + 
    fruits[8].number + " " + fruits[8].title + "\n" + 
    fruits[9].number + " " + fruits[9].title + "\n")

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number + " " + fruits[i].title + "\n")
}

let names = ["영희", "철수", "훈이", "짱구", "상윤", "진수", "마리"]

names.forEach(a => console.log(a))
let count = 0
names.forEach(function(name) {
    console.log(++count + "번째 학생 : " + name + name)
})