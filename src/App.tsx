import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';


function App() {

  return (
    <BrowserRouter basename='/Whatsapp-Project'>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
