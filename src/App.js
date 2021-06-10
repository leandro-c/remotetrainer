import logo from './logo.svg';
import './App.css';
import {LoginButton} from './container/Login';
import {LogoutButton} from './container/Logout';
import {Profile} from './container/Profile';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={window.location.origin + '/remotetrainer.png'}  alt="logo" />
        {isAuthenticated? (
          <>
            <Profile></Profile>
            <LogoutButton></LogoutButton>
          </>
        ):(
          <LoginButton></LoginButton>
        )}
      </header>
    </div>
  );
}

export default App;
