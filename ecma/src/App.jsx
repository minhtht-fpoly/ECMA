
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/LogIn';


function App() {
  

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
