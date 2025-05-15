import React, { useState } from 'react';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import Confetti from './components/Confetti';
import Balloons from './components/Balloons';
import './App.css';

export default function App() {
    const [opened, setOpened] = useState(false);
    const [typingDone, setTypingDone] = useState(false);

    const handleToggle = () => {
        if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
        setTypingDone(false);
        setOpened(prev => !prev);
    };

    return (
        <div className="app-container">
            <Envelope opened={opened} onToggle={handleToggle} />
            {opened && (
                <>
                    <Letter onComplete={() => setTypingDone(true)} />
                    <Confetti />
                    <Balloons stopGenerating={typingDone} />
                </>
            )}
        </div>
    );
}