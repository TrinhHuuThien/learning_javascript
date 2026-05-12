//Bai 1:
const fullName = "Trinh Huu Thien";
let age = 22;
const address= "Thanh Hoa";
const isStudent = true;
age = 23;
console.log(fullName , age , address , isStudent);
//Bai 2:
let score = 0;
score =score + 10;
score =score + 5;
console.log(score);
//Bai 3:
// if (true) {
//   let message = "Xin chào";
//   console.log(message);
// }

// console.log(message);
// 1. dòng console.log ở trong if chạy được còn ở ngoài {} thì không được 
// 2. dòng console.log ở ngoài if không chạy được
// 3. lỗi vì let thuộc block scope , là biến cục bộ nên không thể hiển thị console.log ở ngoài {} được
 
//Bai 4: so sánh var và let
/*
1. đoạn 1 var chạy được
2. đoạn 2 let không chạy được
3. vì var là biến toàn cục, khi khai báo trong block scope thì vẫn hiển thị console.log ở ngoài cục bộ được , còn let thì đã nói ở bài 3
*/
 
//Bai 5:
// console.log(x);
// var x = 100;

// console.log(y);
// let y = 200;
/*
1. dùng var in ra undefined
2. dùng let bị lỗi
3 không nên dùng biến trước khi khai báo 
*/
 
// Lý thuyết video 3
/*
1. biến dùng để khai báo dữ liệu để sử dụng trong javascript
2.dùng let khi muốn thay đổi đổi giá trị
3. dùng const khi không thay đổi giá trị
// 4. Hạn chế dùng var vì var cho phép khai báo lại, có hoisting ra undefined, và không có block scope nên dễ gây lỗi.
// 5. Block scope là phạm vi của biến bên trong cặp { }.
6. biến khai báo bằng let trong {} không dùng được bên ngoài vì đây là biến cục bộ
7. var không có block scope 
// 8. Hoisting là cơ chế JavaScript xử lý phần khai báo trước khi chạy code, không kéo giá trị gán lên trước.
9. đoạn code này in ra undefined
10. đoạn code này không chạy được . vì let phải được khai báo trước 
11. file .js dùng để khai báo , xử lí code của html và css trong file javascript 
12. console.log dùng để hiển thị giá trị đã được khai báo 
13.  git là thành phần dùng để theo dõi , update , quay lại file trước đó của code và file code 
14. github là trang ứng dụng để cho mình truy cập , xem tiến độ , để cho mọi người trong dự án có thể xem 
15. git status dùng để kiếm tra trạng thái code 
*/
// Các câu sai cần sửa 



