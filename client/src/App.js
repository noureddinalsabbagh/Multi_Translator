import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Quiz from './components/Quiz';
import Home from './components/Home';
import AccountSettings from './components/AccountSettings';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<PrivateRoute outlet={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm/:code" element={<Welcome />} />
        <Route path="/home" element={<PrivateRoute outlet={<Home />} />} />
        <Route path="/quiz" element={<PrivateRoute outlet={<Quiz />} />} />
        <Route
          path="/account"
          element={<PrivateRoute outlet={<AccountSettings />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
