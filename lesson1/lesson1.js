//Mảng

//Khai báo mảng :
const arr = [
  1,
  { ten: "Táo 15 prm", gia: 10000000 },
  { ten: "Táo 16 prm", gia: 24000000 },
];
// //Khai báo tưởng minh
// const arr2 = new Array(2, 3, 4, 5, 6, 7);
// console.log(arr2);
//Truy xuất mảng thông qua chỉ mục
//Lặp mảng:
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// arr.forEach((value, currentIndex, originalArray) => {
//   console.log(value, currentIndex, originalArray);
// });
//map(): trả về một mảng, thường dùng để biến đổi toàn bộ phần tử trong mảng

// const renderArr = arr.map((value, currentIndex, originalArray) => {
//   return `<div>${value}</div>`;
// });
// console.log();
// document.getElementById("target").innerHTML = renderArr.join("");

//Lọc thông tin
// console.log(
//   arr.filter((value) => {
//     if (value >= 3) {
//       return value;
//     }
//   })
// );
// document.getElementById("searchButton").addEventListener("click", () => {
//   let searchString = document.getElementById("searchInput").value;
//   let filterArr = arr.filter((product) => {
//     if (
//       product.ten.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
//     ) {
//       return product;
//     }
//   });
//   console.log(filterArr);
// });

//some và every trả về true hoặc false dựa trên

// const expensiveProduct = arr.some((product) => {
//   return product.gia > 20000000;
// });
// console.log(expensiveProduct);

// const expensiveProduct2 = arr.every((product) => {
//   return product.gia > 20000000;
// });
// console.log(expensiveProduct2);
alert(arr.indexOf(1));
//Bao gồm kí tự . và @ , . và @ không được phép đừng đâug, . đứng sau @ ít nhất 1 ký tự
