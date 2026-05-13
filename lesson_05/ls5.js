//Bài 1: Toán tử số học
let a = 30;
let b = 6;
console.log(a+b); //36
console.log(a-b); // 24
console.log(a*b);// 180
console.log(a/b);//5
console.log(a%b);//0
console.log(a**b);//729000000
//Bài 2: Toán tử gán 
let score = 10;
score +=5; // 15
score -=3; //12
score *=2; //24
score /=4; //6
//Bài 3: Tăng giảm
let count = 5;
console.log(count++); //5
console.log(count); //6

console.log(++count);//6
console.log(count);//6
 // sự khác nhau giữa count++ và ++count là count++ là in ra giá trị trước rồi mới cộng còn ++count là cộng trước rồi mới in ra giá trị

 // Bài 4: So sánh == và ===
 console.log(5 == "5"); // true vì == được nới lỏng 
console.log(5 === "5"); // false vì === được kiểm soát nghiêm ngặt
console.log(0 == false); // true vì == được nới lỏng 
console.log(0 === false);// false vì === được kiểm soát nghiêm ngặt
// Bài 5: Toán tử logic
const age = 20;
const hasTicket = true;
const isVip = false;

console.log(age >= 18 && hasTicket);// true && true => true
console.log(age >= 18 || isVip); // true hoặc false => true
console.log(!hasTicket); // khác true => false
//  Bài 6: Nối chuỗi
const firstName = "Trinh";
const lastName = "Thien";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

//Bài 7: Toán tử ba ngôi
const userAge = 17;
let check = (userAge>=18) ? "Đủ tuổi" : "Chưa đủ tuổi ";
console.log(check);

/*
Lý thuyết video 5:

1. Toán tử dùng để làm gì?
Toán tử dùng để thao tác với dữ liệu như tính toán, gán giá trị, so sánh, xử lý logic và nối chuỗi.
2. Kể tên 6 toán tử số học em đã học.
+ , - , * , / , % , **
3. Toán tử % dùng để làm gì?
chia lấy dư 
4. Toán tử gán += nghĩa là gì?
a += b tương đương với a = a + b.
5. count++ khác ++count như thế nào?
count++ là in ra giá trị rồi mới cộng , còn ++count thì cộng xong thì mới in ra giá trị
6. == khác === như thế nào?
== so sánh lỏng, có ép kiểu. === so sánh nghiêm ngặt, không ép kiểu và kiểm tra cả giá trị lẫn kiểu dữ liệu.
7. Vì sao nên ưu tiên dùng ===?
Nên dùng === vì nó không ép kiểu, giúp kết quả so sánh rõ ràng và tránh lỗi khó đoán.
8. Toán tử && hoạt động như thế nào?
&& trả về true khi tất cả điều kiện đều true. Chỉ cần một điều kiện false thì kết quả là false.
9. Toán tử || hoạt động như thế nào?
|| trả về true nếu ít nhất một điều kiện là true. Chỉ false khi tất cả điều kiện đều false.
10. Toán tử ! dùng để làm gì?
! dùng để đảo ngược giá trị boolean. true thành false, false thành true.
11. Toán tử ba ngôi có cú pháp như thế nào?
(điều kiện ) ? đúng : sai
Ôn video cũ:

12. Primitive types là gì?
Primitive types là các kiểu dữ liệu nguyên thủy như string, number, boolean, undefined, null. Khi so sánh, chúng được so sánh theo giá trị.

13. Reference types là gì?
là các kiểu dữ liệu chứa tham chiếu như object , array , function
14. Vì sao hai object giống nội dung nhưng === lại false?
vì khác tham chiếu 
15. let và const có block scope không?
có
16. Hoisting có kéo giá trị gán lên đầu không?
Hoisting không kéo giá trị gán lên đầu, chỉ xử lý phần khai báo trước.
17. File .js dùng để làm gì?
File .js dùng để chứa code JavaScript, xử lý logic, dữ liệu, thuật toán, tương tác với HTML/CSS trong trình duyệt, hoặc chạy độc lập bằng Node.js.
18. console.log() dùng để làm gì?
console.log() dùng để in giá trị ra console để kiểm tra kết quả khi code chạy.
*/
