import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import './Toast.css'; // Import the CSS file

interface ToastProps {
  onConfirm: () => void;
}

const Toast: React.FC<ToastProps> = ({ onConfirm }) => {
  return (
   <div className="toast-container"> 
      <div className="toast-icon">
        <BoltIcon />
      </div>
      <div>
        <h3 className="title">Toast Title</h3> 
        <p className="content"> 
          This is a custom toast. Click the button below to confirm or cancel the toast.
        </p>
        <div className="button-container"> 
          <Button className="confirm-button" variant="contained" onClick={onConfirm}>
            Confirm
          </Button>
          <Button className="cancel-button" variant="contained" onClick={onConfirm}> 
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
