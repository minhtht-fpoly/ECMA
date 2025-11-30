import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LogIn";
import KanbanComponent from "./pages/List";
import AddTask from "./pages/Add";
import EditTask from "./pages/Edit";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/add" element={<AddTask></AddTask>}></Route>
        <Route path="/edit/:id" element={<EditTask></EditTask>}></Route>
        <Route
          path="/kanban"
          element={<KanbanComponent></KanbanComponent>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
