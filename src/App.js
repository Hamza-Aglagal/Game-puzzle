import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import LevelPage from './pages/user/LevelPage';
import GamePage from './pages/user/GamePage';
import MemoryGame from './components/user/Tester';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import UserProfilePage from './pages/user/UserProfilePage';


function App() {


  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/start-game' element={<LevelPage />} />
          <Route path='/playing/:id' element={<GamePage />} />
          <Route path='/user-profile' element={<UserProfilePage />} />
         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
