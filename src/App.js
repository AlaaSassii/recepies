import './App.css';
import Navbar from './components/Navbar';
import Recepies from './routes/Recepies';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import AddRecepie from './routes/AddRecepie';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/recepies' element={<Recepies/>} />
        <Route path="/AddRecepi" element={<AddRecepie/>} /> 
        <Route path="/Signup" element={<SignUp/>} /> 
        <Route path="/Signin" element={<SignIn/>} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
