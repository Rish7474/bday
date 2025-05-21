import React, { useEffect, useState } from 'react';
import './Letter.css';

export default function Letter({ onComplete }) {
    const [typed, setTyped] = useState('');
    const fullText = `Happy Birthday to my dearest friend, Mehra! 
    
    Saying this as an understatment, thank you being a warm, positive force in my life and always being there for me.

This is your year and will deservingly be filled so many blessings and growth and I am just super excited to be able to witness it.

Cheers to 24 and look foward seeing you again in June!

Coding with much joy and love,
- RM`;

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
    }, [onComplete, fullText]);

    return (
        <div className="letter">
            <p>
                {typed.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
}
