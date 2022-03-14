import './scss/index.scss';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      <Routes>
        <Route path="/confirm/:code" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
