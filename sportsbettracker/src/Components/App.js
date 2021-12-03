import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Games from './Games/Games'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home/>}>
        </Route>
        <Route path="/games" exact={true} element={<Games />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
