import { useContext } from 'react';
import './App.css';
import Routs from './components/Routs';
import Dashboard from './pages/Dashboard';
import AuthContext from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Auth from './components/Auth';


function App() {
  const { user, auth } = useContext(AuthContext);
  return (
    <div className='bg-light'>
      {
        !user ? <Auth> <Routs /></Auth> : <Dashboard> <Routs /></Dashboard>
      }

    </div>
  );
}

export default App;
