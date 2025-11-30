import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function FormRegisterUI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onValid = (data) => {
    axios.post("http://localhost:3000/login", data).then((res) => {
      alert("Đăng nhập tài khoản thành công");
      localStorage.setItem("accessToken", res.data.accessToken);
    });
  };
  const onError = (err) => {
    console.log(err);
  };
  return (
    <form
      className="p-6 mb-6 bg-white shadow-lg rounded-2xl border border-gray-200"
      onSubmit={handleSubmit(onValid, onError)}
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Đăng nhập tài khoản
      </h3>

      {/* TITLE */}
      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Nhập tiêu đề..."
          {...register("email", { required: "Không được bỏ trống email" })}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      </div>

      {/* DESC */}
      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Mật khẩu</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Nhập mật khẩu"
          {...register("password", {
            required: "Không được bỏ trống mật khẩu",
          })}
        ></input>
      </div>

      {/* STATUS + PRIORITY GROUP */}

      {/* BUTTON */}
      <button
        type="submit"
        className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Đăng nhập
      </button>
    </form>
  );
}
