import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function TodoTableStatic() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(
      () => {
        alert("Xóa  thông tin thành công");
        setTasks((preTasks) => preTasks.filter((task) => task.id !== id));
      }
    );
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Danh sách công việc
      </h2>

      <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
        <table className="w-full border-collapse">
          {/* HEADER */}
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 font-semibold text-center">ID</th>
              <th className="p-3 font-semibold">Tiêu đề</th>
              <th className="p-3 font-semibold">Mô tả</th>
              <th className="p-3 font-semibold text-center">Trạng thái</th>
              <th className="p-3 font-semibold text-center">Ưu tiên</th>
              <th className="p-3 font-semibold text-center">Hành động</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-gray-800">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="hover:bg-gray-50 transition border-t"
              >
                {/* ID */}
                <td className="p-3 text-center font-medium">{task.id}</td>

                {/* Title */}
                <td className="p-3 font-medium">{task.title}</td>

                {/* Description */}
                <td className="p-3">{task.desc}</td>

                {/* Status Badge */}
                <td className="p-3 text-center">
                  <span className="px-2 py-1 rounded-lg text-sm bg-blue-100 text-blue-700">
                    {task.status}
                  </span>
                </td>

                {/* Priority Badge */}
                <td className="p-3 text-center">
                  <span className="px-2 py-1 rounded-lg text-sm bg-yellow-100 text-yellow-700">
                    {task.priority}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-3">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-600 hover:text-blue-800 transition">
                      <Pencil size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 transition"
                      onClick={() => {
                        handleDelete(task.id);
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
