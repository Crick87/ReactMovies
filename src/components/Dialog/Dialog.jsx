import React from 'react';
import ReactDOM from 'react-dom';
import { FocusTrap } from 'focus-trap-react';
import './Dialog.css';

const Dialog = ({ title, onClose, children }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <FocusTrap focusTrapOptions={{
      tabbableOptions: {
        displayCheck: 'none'
      }
    }}>
      <div className="dialog-overlay" onClick={handleOverlayClick}>
        <div className="dialog-content">
          <div className="dialog-header">
            <h2>{title}</h2>
            <button className="dialog-close" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="dialog-body">{children}</div>
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default Dialog;