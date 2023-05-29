import React, { useState } from 'react';
import { Button } from '@mui/material';
import Toast from './Toast';
import './App.css'

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
  };

  const handleToastConfirm = () => {
    console.log('Toast button called.');
    setShowToast(false);
  };

  return (
    <div className="App">
      <div className="content">
        <h2>Hello there, 
        <Button variant="contained" className="open-toast" onClick={handleButtonClick}>
          Click me
        </Button>for the Toast feature</h2>
        {showToast && <Toast onConfirm={handleToastConfirm} />}
      </div>
    </div>
  );
};

export default App;
