//Object
//Khai báo 1 đối tượng
const data = {
  ten: "Minh",
  tuoi: 25,
  ngheNghiep: "Giảng viên",
  quocTich: "Việt Nam",
};
// Truy xuất thuộc tính đối tượng
//Object.key
// alert(data.ten);
const students = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
    gender: "Nam",
    class: "IT101",
    major: "Công nghệ thông tin",
    email: "vana@example.com",
    status: "Đang học",
  },
  {
    id: 2,
    name: "Trần Thị B",
    age: 21,
    gender: "Nữ",
    class: "MK202",
    major: "Marketing",
    email: "thib@example.com",
    status: "Đang học",
  },
  {
    id: 3,
    name: "Lê Văn C",
    age: 22,
    gender: "Nam",
    class: "BA303",
    major: "Quản trị kinh doanh",
    email: "vanc@example.com",
    status: "Đã tốt nghiệp",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    age: 19,
    gender: "Nữ",
    class: "GD104",
    major: "Thiết kế đồ họa",
    email: "thid@example.com",
    status: "Đang học",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    age: 23,
    gender: "Nam",
    class: "IT105",
    major: "Công nghệ thông tin",
    email: "vane@example.com",
    status: "Bảo lưu",
  },
];
//Làm thế nào để tạo ra giao diện hiển thị sinh viên trên trang web
const testSting = `<tr>
          <th scope="row">1</th>
          <td>${students[0].name}</td>
          <td>${students[0].age}</td>
          <td>${students[0].gender}</td>
          <td>${students[0].class}</td>
          <td>${students[0].major}</td>
          <td><td>${students[0].email}</td></td>
          <td><td>${students[0].status}</td></td>
          <td><button>Xóa</button> <button>Sửa</button></td>
        </tr>`;
document.querySelector("#renderBody").innerHTML = testSting;
