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
// kết quả là true , vì khi gán giá trị đối tượng A cho đối tượng B thì cả 2 đều tham chiếu vào một đối tượng nên kết quả là true

/*
Lý thuyết video 4:

1. Kiểu dữ liệu dùng để làm gì?
Kiểu dữ liệu cho biết một giá trị thuộc loại gì, ví dụ chuỗi, số, boolean, object, array.
2. Primitive types là gì?
Primitive types là các kiểu dữ liệu nguyên thủy, lưu giá trị đơn giản và được so sánh theo giá trị.
3. Reference types là gì?
Reference types là các kiểu dữ liệu tham chiếu như object, array, function. Chúng được so sánh theo tham chiếu trong bộ nhớ.
4. Kể tên 5 kiểu primitive em vừa học.
string, number, boolean, undefined, null
5. undefined khác null như thế nào?
undefined là biến đã khai báo nhưng chưa được gán giá trị. null là giá trị rỗng được lập trình viên cố ý gán.
6. Object dùng để làm gì?
object dùng để khai báo thông tin về đối tượng đó
7. Array dùng để làm gì?
array dùng để tạo ra một mảng chứa các giá trị
8. Function dùng để làm gì?
Function dùng để đóng gói một khối code để có thể gọi lại nhiều lần.
9. typeof dùng để làm gì?
dùng để hiển thị kiểu dữ liệu
10. typeof null trả về gì?
object
11. Vì sao 2 object có nội dung giống nhau nhưng so sánh bằng === lại ra false?
Vì hai object là hai vùng tham chiếu khác nhau trong bộ nhớ.
12. Khi nào 2 object so sánh bằng === ra true?
Hai object so sánh bằng === ra true khi chúng cùng tham chiếu đến một object.
Ôn video 3:

13. let và const có block scope không?
có
14. var có block scope không?
var không nằm trong phạm vi block scope , thuộc function scope
15. Hoisting có kéo giá trị gán lên đầu không?
không 
16. Với var, dùng biến trước khi khai báo thường ra gì?
undefined
17. Với let, dùng biến trước khi khai báo có được không?
Không được. Sẽ bị ReferenceError vì let nằm trong temporal dead zone trước khi được khai báo.

*/
