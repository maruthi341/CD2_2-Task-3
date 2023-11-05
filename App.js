import React, { useState } from 'react';
import Home from ' ./home';
import Register from './register'; // Correct component imports
import Login from './login';       // Correct component imports
import Create from './create';     // Correct component imports       // Correct component imports
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'create':
        return <Create />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => setActiveComponent('home')}>home</button>
          <button onClick={() => setActiveComponent('register')}>register</button>
          <button onClick={() => setActiveComponent('login')}>login</button>
          <button onClick={() => setActiveComponent('create')}>create</button>
        </div>
        {renderComponent()}
      </header>
    </div>
  );
}

export default App;


















