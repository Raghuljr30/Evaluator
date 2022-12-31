
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Login from './screen/Login.js';
import Home from './screen/Home.js';
import Quest from './screen/Quest.js';
import Result from './screen/Result.js';
import Leaderboard from './screen/Leaderboard.js';
function App() {
  return (
    <BrowserRouter>
    <div >
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/quest" element={<Quest/>} />
    <Route path="/result" element={<Result/>} />
    <Route path="/leaderboard" element={<Leaderboard/>} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
