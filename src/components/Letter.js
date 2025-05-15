import React, { useEffect, useState } from 'react';
import './Letter.css';

export default function Letter({ onComplete }) {
    const [typed, setTyped] = useState('');
    const fullText = 'Happy Birthday, dear friend! Wishing you all the joy and love today and always. Feel free to customize this message to anything much longer.';

    useEffect(() => {
        let idx = 0;
        const speed = 20;
        const timer = setInterval(() => {
            setTyped(fullText.slice(0, idx));
            idx += 1;
            if (idx > fullText.length) {
                clearInterval(timer);
                onComplete && onComplete();
            }
        }, speed);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="letter">
            <p>{typed}</p>
        </div>
    );
}