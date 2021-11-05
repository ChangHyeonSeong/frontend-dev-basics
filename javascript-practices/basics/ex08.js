/*
자바스크립트 객체3 - 확장
*/
var o = {
    name: "name",
    age: 10,
}

console.log(o);

var f = function() {
    console.log('Hello World')
}

f();

var i1 = 10;
var i2 = new Number(10);

console.log("===확장=========================")
o.another = {
    name: "마이콜",
    age:30
}
console.log(o)

f.another = {
    name: "마이콜",
    age: 30
}
console.log(f.another);
console.log(f.prototype);

console.log("===기본 타입은 확장이 되지 않는다.=========================")
i2.another = {
    name: "마이콜",
    age: 30
}
console.log(i2);

i1.another = {};              //원시타입이므로 확장이 안된다 오류가 나지않는 이유는 유사객체가 만들어졌다가 없어지므로
console.log(i1.another);  


