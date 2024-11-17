import React, { useState } from 'react';

export default function SignUp() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [personName, setPersonName] = useState("");

  function signUp(e) {
    e.preventDefault();
    const userFound = users.find((user) => user.userEmail === userEmail);
    if (!userFound) {
      setUsers([...users, { userName, userEmail, userPassword }]);
      alert("User registered successfully");
    } else {
      alert("User already exists");
    }
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  }

  function signIn(e) {
    e.preventDefault();
    const userFound = users.find((user) =>{ return user.userEmail === inputEmail && user.userPassword === inputPassword});
    if (userFound) {
      alert("Welcome");
      setPersonName(userFound.userName);
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="container">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={signUp}>
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            name="userEmail"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            required
          />
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            name="userPassword"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={signIn}>
          <label htmlFor="inputEmail">Email:</label>
          <input
            type="email"
            name="inputEmail"
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
            required
          />
          <label htmlFor="inputPassword">Password:</label>
          <input
            type="password"
            name="inputPassword"
            onChange={(e) => setInputPassword(e.target.value)}
            value={inputPassword}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <center>
          <p>Mr. {personName} Welcome...</p>
        </center>
      </div>

      <div className="items-list">
        {users.map((user, index) => (
          <div key={index}>
            <h2>{index + 1}</h2>
            <p>Name: {user.userName}</p>
            <p>Email: {user.userEmail}</p>
            <p>Password: {user.userPassword}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
