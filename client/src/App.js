import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Quiz from './components/Quiz';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<PrivateRoute outlet={<Home />} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm/:code" element={<Welcome />} />
        <Route path="/quiz" element={<PrivateRoute outlet={<Quiz />} />} />



      </Routes>
    </div>
  );
}

export default App;
