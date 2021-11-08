/**
 * Array 메소드
 */

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors);

// join
var str = fruits.join(":");
console.log(str);

// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 2000, 3000, 4000, 5000];
var number = numbers.shift();
console.log(number, numbers);

// sort
numbers.sort();
console.log(numbers);

// slice
var numbers = numbers.slice(1, 3);
console.log(numbers);

// splice
// index부터 count개를 삭제 후 삭제된 요소를 반환
console.log(fruits);
var fruits2 =  fruits.splice(0/* index */, 2/*count*/);
console.log(fruits2, fruits);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);   //1에서 3개 잘라내고 10으로 대체
console.log(a1, a2)

// splice 사용하면 특정 인덱스에 insert를 할 수 있다 

// a1.removeAt(1)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1, 10);  //삭제후 inset
console.log(a1, a2)

// a1.insertAt(1, 10)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10);  //인덱스에 inset
console.log(a1, a2)