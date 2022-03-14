import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/confirm/:code" element={<Welcome />} />


      </Routes>
    </div>
  );
}

export default App;
