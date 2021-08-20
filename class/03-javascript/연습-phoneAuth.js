String(2356)
// "2356"
String(2356).split
// ƒ split() { [native code] }
String(2356).split()
// ["2356"]
String(2356).split('3')
// (2) ["2", "56"]
String(2356).padStart(6)
// "  2356"
String(2356).padStart(6,'0')
// "002356"
String(2356).padStart(6,"0")
// "002356"
String(Math.floor((Math.random() * 1000000))).padStart(6,'0')
// "624341"