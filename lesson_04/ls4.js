// Bai 1
const fullName = "Trinh Huu Thien";
const age = 23;
const isStudent = true;
let email;
const phoneNumber = null;

console.log(fullName , typeof fullName);
console.log(age , typeof age);
console.log(isStudent , typeof isStudent);
console.log(email , typeof email);
console.log(phoneNumber , typeof phoneNumber);

//Bài 2: Reference Types
const user = {
  fullName: "Trinh Huu Thien",
  age: 23,
  address: "Thanh Hoa",
  isStudent: true
};
const skills = ["HTML", "CSS", "JavaScript"];
function introduce() {
  console.log("Xin chào, mình là Thien");
}
console.log(user);
console.log(skills);
introduce();
console.log(typeof user);
console.log(typeof skills);
console.log(typeof introduce);
console.log(Array.isArray(skills));

//Bai 3: So sánh Primitive
let a = 10;
let b = 10;

console.log(a === b);
// kết quả là true , vì khi khai báo các biến primitive thì khi so sánh sẽ so sánh 2 giá trị độc lập 

//Bài 4: So sánh Reference
const user1 = {
  name: "Thien"
};

const user2 = {
  name: "Thien"
};

console.log(user1 === user2);
// kết quả là false , vì đây là đang so sánh 2 object với sau , tuỳ là cùng giá trị hiển thị nhưng mà khác object nên kết quả là false

//Bài 5: Cùng Tham Chiếu
const userA = {
  name: "Thien"
};

const userB = userA;

console.log(userA === userB);
