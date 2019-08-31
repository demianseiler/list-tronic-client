import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>Some navigation buttons</nav>
      <div className="main-wrapper">
        <div className="main">The content</div>

        <div className="sidebar">
          <div className="login-form">
            <h1>Login here</h1>
            <form className="login" action="" method="post"> 
              <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" />  
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>  

              <div className="actions">
                <input type="submit" name="login" value="Login"/> <a href="/forgot">I forgot my password</a>
              </div>
            </form>

            <div class="account">
              <p>Create a new account <a href="">here</a>.</p>
            </div>

          </div>
        </div>

      </div>      
      <footer>Copyrights and stuff</footer>
    </div>

  );
}

export default App;
