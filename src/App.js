import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';
import PostList from "./pages/PostList";
import Login from './pages/Login';
import { useState,useEffect } from 'react';
import DetailRedirect from './route/DetailRedirect';
import Write from './pages/Write';

function App() {
  const [auth, setAuth] = useState(false);
  const [view, setView] = useState(0);

  useEffect(() => {
    console.log('로그인 인증값',auth);
  }, [auth])
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path='/' element={<PostList auth={auth} setAuth={setAuth} view={view} setView={setView} />} />
          <Route path='/login' element={<Login setAuth={setAuth} />} />
          <Route path='/posts/:id' element = {<DetailRedirect auth={auth} />} />
          <Route path='/write' element = {<Write />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;