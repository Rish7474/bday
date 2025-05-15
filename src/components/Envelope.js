// src/components/Envelope.js
import React from 'react';
import './Envelope.css';

export default function Envelope({ opened, onToggle }) {
    // unified handler for touch and click with vibration
    const handleActivate = () => {
        if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
        onToggle();
    };

    return (
        <div
            className={`envelope ${opened ? 'opened' : ''}`}
            onClick={handleActivate}
            onTouchEnd={handleActivate}
        >
            <div className="flap" />
            <div className="body" />
        </div>
    );
}
