for(let i=0; i<5; i++){
}
// undefined
for(let i=0; i<5; i++){
    console.log("hello")
}
// 5VM3808:2 hello
// undefined
for(let i=0; i<5; i++){
    console.log("hello" + i)
}
// VM3947:2 hello0
// VM3947:2 hello1
// VM3947:2 hello2
// VM3947:2 hello3
// VM3947:2 hello4
// undefined
for(let i=0; i<5; i+=1) {
    console.log("안녕하세요")
}
// 5VM4412:2 안녕하세요
// undefined
for(let i=0; i<5; i++) {
    console.log("안녕하세요")
}
// 5VM4628:2 안녕하세요
// undefined
for(let i=0; i<5; ++i) {
    console.log("안녕하세요")
}
// 5VM4649:2 안녕하세요
// undefined
const classmates = ["철수", "영희", "훈이"]
// undefined
for(let i=0; i<classmates.length; i++) {
    console.log(classmates[i])
}
// VM5832:2 철수
// VM5832:2 영희
// VM5832:2 훈이
// undefined
for(let i=0; i<classmates.length; i++) {
    console.log(classmates[i] + "입니다.")
}
// VM5924:2 철수입니다.
// VM5924:2 영희입니다.
// VM5924:2 훈이입니다.
// undefined
const classmates2 = [
    {name: "철수", age: 13},
    {name: "영희", age: 12},
]
// undefined
classmates2[0].name
// "철수"
classmates2[0].age
// 13
classmates2[1].name
// "영희"
classmates2[1].age
// 12
classmates2[0].name + "는" + classmates2[0].age + "살 입니다."
// "철수는13살 입니다."
classmates2[1].name + "는" + classmates2[1].age + "살 입니다."
// "영희는12살 입니다."
for(let i=0; i<classmates2.length; i++) {
    console.log(classmates2[i].name + "는" + classmates2[i].age + "살 입니다.")
}
// VM8313:2 철수는13살 입니다.
// VM8313:2 영희는12살 입니다.