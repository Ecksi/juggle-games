import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Chart from './components/pages/Chart';
import Home from './components/pages/Home';
import Tasks from './components/pages/Tasks';
// import './App.css';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link><span> - </span>
          <Link to="/chart">Chart</Link><span> - </span>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <hr />
        <Routes>
          <Route exact path="/chart" element={<Chart />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/tasks" element={<Tasks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
