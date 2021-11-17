/**
 *  6. 구조 분해
 */
// ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com'
};

//let firstName = user.firstName;
//let lastName = user.lastName;                   
({firstName, lastName} = user);   // {}을 많은 용도로 쓰므로 ()로 감싸줘야한다



console.log(firstName, lastName);