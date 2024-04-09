
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent'
import FooterComponent from './components/Footer/FooterComponent'
import UserComponent from './components/User/UserComponent'
import RegisterComponent from './components/Register/RegisterComponent'
import LoginComponent from './components/Login/LoginComponent'
import InfoComponent from './components/WebInfo/InfoComponent'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
       <Routes>
       <Route path="/" element={<InfoComponent />}></Route>
          <Route path="/list" element={<UserComponent />}></Route>
          <Route path='/register' element = { <RegisterComponent />}></Route>
          <Route path='/login' element = { <LoginComponent />}></Route>
       </Routes>

    <FooterComponent/>
    
    </BrowserRouter>
    

   
    </>
      
  )
}

export default App
