const classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ["철수", "영희", "훈이"]
classmates[0]
// "철수"
classmates["length"]
// 3
classmates.includes("영희")
// true
classmates.includes("맹구")
// false
classmates.push("맹구")
// 4
classmates
// (4) ["철수", "영희", "훈이", "맹구"]
classmates.includes("맹구")
// true
classmates.pop("맹구")
// "맹구"
classmates
// (3) ["철수", "영희", "훈이"]
classmates.pop
// ƒ pop() { [native code] }
classmates.pop()
// "훈이"
classmates.push("훈이")
// 3
classmates
// (3) ["철수", "영희", "훈이"]