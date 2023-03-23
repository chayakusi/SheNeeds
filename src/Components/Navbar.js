import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { auth } from '../firebase';
;

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect( () => {
    try{
       auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }
    catch(error){
      alert(error)
    }
   
  })


  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <nav>
      {console.log(auth)}
      <div className="logo">
        <h1>SheNeeds</h1>
      </div>
      <ul>
        <li><a style={{textDecoration:"none"}} href="/">Home</a></li>
        {user ? 
          <>
            <li>{user.email}</li>
            <li><a href = "" onClick={handleLogout} className="button">Logout</a></li>
          </>
         : 
          <li><a href="/login" className="button">Login</a></li>
        }
      </ul>
    </nav>
  );
}

export default Navbar;
