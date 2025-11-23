import React from "react";

const KanbanCollum = ({ title, mauSac, tasks, shade, onDelete }) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-4 min-h-[350px]">
        <h3 className={`text-lg font-semibold mb-4 text-${mauSac}-${shade}`}>
          {title}
        </h3>

        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4 hover:shadow-md transition"
          >
            <h4 className="font-medium">{task.title}</h4>
            <p className="text-sm text-gray-600">{task.desc}</p>

            {task.priority == "high" ? (
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded-full text-red-500">
                Cao
              </span>
            ) : task.priority == "medium" ? (
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded-full text-yellow-500">
                Trung bình
              </span>
            ) : (
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded-full text-green-500">
                Thấp
              </span>
            )}

            {/* Nút đẹp, căn giữa */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                className="
                  px-3 py-1.5 text-sm rounded-lg border border-blue-500 text-blue-600 
                  hover:bg-blue-50 hover:shadow-sm transition-all
                "
              >
                Sửa
              </button>

              <button
                onClick={() => {
                  onDelete(task.id);
                }}
                className="
                  px-3 py-1.5 text-sm rounded-lg border border-red-500 text-red-600 
                  hover:bg-red-50 hover:shadow-sm transition-all
                "
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanCollum;
