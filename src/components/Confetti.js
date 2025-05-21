import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

export default function Confetti() {
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ReactConfetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={800}
            gravity={0.4}
            recycle={false}
        />
    );
}