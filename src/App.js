import './App.css';
import About from './component/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import NoteState from './context/notes/NoteState';
import Home from './component/Home';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    < >
    <NoteState>
      <BrowserRouter>
      <Navbar />
      <Alert message="This is awasome webside" />
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      
      
      </Routes>
    </BrowserRouter>
 

    </NoteState>

      
     
    </>
  );
}

export default App;
