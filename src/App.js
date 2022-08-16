import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Recepies from './routes/Recepies';
import {BrowserRouter , Route , Routes , useNavigate} from 'react-router-dom'
import AddRecepie from './routes/AddRecepie';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Recepie from './routes/Recepie';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/recepies' element={<Recepies/>} />
        <Route path="/AddRecepi" element={<AddRecepie/>} /> 
        <Route path="/SignUp" element={<SignUp/>} /> 
        <Route path="/" element={<SignIn/>} /> 
        <Route path='/recepies/:idUser' element={<Recepie/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
