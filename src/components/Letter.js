import React, { useEffect, useState } from 'react';
import './Letter.css';

export default function Letter({ onComplete }) {
    const [typed, setTyped] = useState('');
    const [done, setDone] = useState(false);

    const fullText = `Happy Birthday to my dearest friend, Mehra! 

Saying this is an understatement: thank you for being a warm, positive force in my life and always showing up for me.

This is your year—may it overflow with well-earned blessings and growth. I’m thrilled to witness it all.

Cheers to 24! I can’t wait to see you again in June.

Coding with much love and joy,
- RM
`;

    useEffect(() => {
        let idx = 0;
        const speed = 20;
        const timer = setInterval(() => {
            setTyped(fullText.slice(0, idx));
            idx += 1;
            if (idx > fullText.length) {
                clearInterval(timer);
                setDone(true);                 // typing finished
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
                {done && (
                    <>
                        Source code:{' '}
                        <a
                            href="https://github.com/Rish7474/bday"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/Rish7474/bday
                        </a>
                    </>
                )}
            </p>
        </div>
    );
}
