var mod01 = require('./error-module01');
var mod02 = require('./error-module02');
var mod03 = require('./error-module03');



console.log(mod01); 
//빈 객체가 나온다 이유 : error-module01.js 에서 exports가 다른 객체를 참조하게 하므로 
//exports 가 module.exports 객체를 참조하다가 
//App 객체를 참조하게된다
//require는  module.exports 객체를 반환하므로 빈 module.exports 객체를 mod01가 참조하게 된다

mod02();
console.log(mod03);