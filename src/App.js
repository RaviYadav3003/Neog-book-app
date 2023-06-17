import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Shelves } from './Shelves';
import { Search } from './Search';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shelves />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
