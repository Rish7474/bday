import React from 'react';
import './Envelope.css';

export default function Envelope({ opened, onToggle }) {
    return (
        <div className={`envelope ${opened ? 'opened' : ''}`} onClick={onToggle}>
            <div className="flap" />
            <div className="body" />
        </div>
    );
}