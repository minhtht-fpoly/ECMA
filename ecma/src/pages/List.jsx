import React, { useEffect, useState } from "react";
import KanbanCollum from "../components/KanbanCollum";

// KanbanComponent.jsx
// Component Kanban đơn giản với mảng tĩnh (JSX)
// Sử dụng TailwindCSS cho kiểu dáng

// const todo = STATIC_TASKS.filter((task) => task.status == "todo");
// const done = STATIC_TASKS.filter((task) => task.status == "done");
// const inProgress = STATIC_TASKS.filter((task) => task.status == "inProgress");

export default function KanbanComponent() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const todo = tasks.filter((task) => task.status == "todo");
  const done = tasks.filter((task) => task.status == "done");
  const inProgress = tasks.filter((task) => task.status == "inProgress");
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6\">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Bảng Kanban - Mảng tĩnh</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KanbanCollum
            title="Chờ thực hiện"
            mauSac={"red"}
            tasks={todo}
            shade={"500"}
          />
          <KanbanCollum
            title="Đang thực hiện"
            mauSac={"blue"}
            tasks={inProgress}
            shade={"600"}
          />
          <KanbanCollum
            title="Đã hoàn thiện"
            mauSac={"green"}
            tasks={done}
            shade={"600"}
          />
        </div>
      </div>
    </div>
  );
}
