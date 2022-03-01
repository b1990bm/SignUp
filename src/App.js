import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Route,Routes, Navigate} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
      
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/" element={<Navigate to="/signup" />} />
     </Routes>
    </div>
  );
};

export default App;