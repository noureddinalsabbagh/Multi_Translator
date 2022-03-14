import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/confirm/:code" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
