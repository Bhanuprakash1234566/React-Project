import React, { useState } from 'react';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    if (!username || !password) {
      setErrorMessage('All fields are required!');
    } else {
      setErrorMessage('');
      setLoggedIn(true);
      alert('Signed in successfully!');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    alert('Logged out successfully!');
  };

  return (
    <div className="page">
      <div className="card signin-card">
        {!loggedIn ? (
          <>
            <h2>Sign In</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSignIn} className="popup-button">Login</button>
          </>
        ) : (
          <>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout} className="popup-button">Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default SignIn;
