import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // Replace this with actual authentication logic
    alert(`Welcome ${email}!`);
  };

  return (
    <div className="container" style={{textAlign:"center", marginTop:"80px"}}>
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input style={{marginTop:"20px"}}
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input style={{marginTop:"10px"}}
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit" style={{marginTop:"10px"}}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
