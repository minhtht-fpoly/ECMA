import React from "react";

const KanbanCollum = ({ title, mauSac, tasks, shade }) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-4 min-h-[350px]">
        <h3 className={`text-lg font-semibold mb-4 text-${mauSac}-${shade}`}>
          {title}
        </h3>

        {tasks.map((task) => (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-3 hover:shadow transition">
            <h4 className="font-medium">{task.title}</h4>
            <p className="text-sm text-gray-600">{task.desc}</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">
              {task.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanCollum;
