import React, { useState } from 'react';
import Landing from './routes/landing';
import Home from './routes/home';
import './App.css';

export default function App() {
  const [ user, setUser ] = useState(null);

  return (
    <div className='App'>
      {user ? <Home /> : <Landing setUser={setUser} />}
    </div>
  );
};
