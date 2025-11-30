import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
export default function FormEditTodoUI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => reset(data));
  }, []);

  const onValid = (data) => {
    axios.put(`http://localhost:3000/tasks/${id}`, data).then(() => {
      alert("Sửa nhiệm vụ thành công");
      navigate("/kanban");
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
        Sửa chi tiết công việc
      </h3>

      {/* TITLE */}
      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Tiêu đề</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Nhập tiêu đề..."
          {...register("title", { required: "Không được bỏ trống tiêu đề" })}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      </div>

      {/* DESC */}
      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Mô tả</label>
        <textarea
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Nhập mô tả..."
          {...register("desc")}
        ></textarea>
      </div>

      {/* STATUS + PRIORITY GROUP */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Trạng thái
          </label>
          <select
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("status")}
          >
            <option value={"todo"}>Pending</option>
            <option value={"inProgress"}>Doing</option>
            <option value={"done"}>Done</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Ưu tiên
          </label>
          <select
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("priority")}
          >
            <option value={"low"}>Low</option>
            <option value={"medium"}>Medium</option>
            <option value={"high"}>High</option>
          </select>
        </div>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Lưu chi tiết thay đổi
      </button>
    </form>
  );
}
