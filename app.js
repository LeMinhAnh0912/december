//BT1: 1 form gồm tên đăng nhập và mật khẩu, tên đăng nhập phải có ít nhất 6 ký tự, mật khẩu phải có ít nhất 8 ký tự và phải viết hoa hoàn toàn.
var username = "Minh Anh";
let password = "vfghdkjh";
const lengthUsername = username.length;
const lengthPassword = password.length;
if (
  lengthUsername >= 6 &&
  lengthPassword >= 8 &&
  password == password.toUpperCase()
) {
  console.log("Đăng nhập thành công");
} else {
  console.log("Đăng nhập thất bại");
}
//& (and-và)
//shift 7 => &&

//BT2: cho 1 số nguyên và kiểm tra số đó là dương hay âm, nếu dương in ra "số dương", nếu âm in ra "số âm".
//Nếu thỏa mãn in ra đăng nhập thành công
//Nếu sai in ra đăng nhập sai
let number = 19;
if (number >= 0) {
  console.log("Số dương");
} else {
  console.log("Số âm");
}

//prompt: nhập vào
//BT5 mô tả thuật toán tính điểm trung bình
const math = parseInt(prompt("Nhập điểm"));
const physics = parseInt(prompt("Nhập điểm"));
const chemistry = parseInt(prompt("Nhập điểm"));
let average = (math + physics + chemistry) / 3;
if (average > 5) {
  console.log("Qua môn");
} else {
  console.log("Rớt môn");
}

//BT6: Mô tả thuật toán chuyển đổi tiền tệ.
let dolla = parseInt(prompt("$"));
let dollatoVnd = dolla * 23000;
console.log(`${dollatoVnd} VND`);

// || - shift + \: hoặc (or)

//BT7:Mô tả thuật toán tìm giá trị lớn nhất trong 3 số.
let a = parseInt(prompt("số nguyên"));
let b = parseInt(prompt("số nguyên"));
let c = parseInt(prompt("số nguyên"));
if (a > b && a > c) {
  console.log(`${a} là giá trị lớn nhất `);
} else if (b > c && b > a) {
  console.log(`${b} là giá trị lớn nhất `);
} else {
  console.log(`${c} là giá trị lớn nhất `);
}
