/* eslint-disable */
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import LogoutButton from './Logout';
import ProfileUser from './ProfileUser';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className='App'>
      <h1>Vite + React</h1>

      {isAuthenticated 
      ? <>
          <ProfileUser />
          <LogoutButton />
        </>
      : <LoginButton />}
    </div>
  );
}

export default App;
