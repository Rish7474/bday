import React, { useState, useCallback } from 'react';
import TreasureChest from './components/TreasureChest';
import Letter from './components/Letter';
import Confetti from './components/Confetti';
import Balloons from './components/Balloons';
import './App.css';

export default function App() {
    const [opened, setOpened] = useState(false);
    const [typingDone, setTypingDone] = useState(false);

    const handleTypingComplete = useCallback(() => {
        setTypingDone(true);
    }, []);

    return (
        <div className="app-container">
            <TreasureChest onOpen={() => setOpened(true)} />
            {opened && (
                <>
                    { }
                    <Letter onComplete={handleTypingComplete} />
                    <Confetti />
                    <Balloons stopGenerating={typingDone} />
                </>
            )}
        </div>
    );
}
