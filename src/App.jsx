import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <div className="container">
      <h1>Characters of Breaking bad 🧪</h1>
      <hr/>

      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
