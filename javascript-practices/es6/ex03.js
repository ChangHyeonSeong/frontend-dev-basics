/**
 *  Template Literal
 */

let no = 10;
let name = '둘리';
let email = 'dooly@gmail.com';

// ex1
console.log('no:' + no + ", name:" + name + ", email:" + email); 
console.log(`no:${no } , name:${name } , email:${email }`);

//ex02 개행지원
console.log(`no:${no }
             name:${name }
             email:${email }`);