/**
 * function 타입의 객체(함수)
 */

// 함수를 생성하는 방법1
function f1(a,b) {
    return a + b;
}

console.log(typeof(f1), f1(10, 20));

// 함수를 생성하는 방법2 쌤 추천
var f2 = function(a, b){
    return a + b;
}
console.log(typeof(f2), f2(10, 20));


// 함수를 생성하는 방법3: new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function('a', 'b', 'return a + b');
console.log(typeof(f3), f3(10, 20));

// 함수를 생성하는 방법4: 익명(anonymous) 함수
// callback

setTimeout(function(){
    console.log("time out!");
}, 2000);

// 즉시 실행하는 함수     
// 사용예 { 초기화} 수많은 변수들을 사용해서 초기화할때 함수안에서 선언하기위해 사용 
//전역으로사용하면 메모리낭비가 크므로 즉시실행하고 없어지게한다 
var s = (function(a, b){
    var m = 10;
    return a/m + b/m;
})(10,20);
console.log(s);

//가변 파라미터 함수
var sum = function(){
    console.log(arguments instanceof Array); //Array가 아니다, 유사 배열이다.
    console.log(arguments);

    var sum = 0;

    //구현1
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;

    //구현2
    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    })
}

console.log(sum(10,20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));

