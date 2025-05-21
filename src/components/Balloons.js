import React, { useEffect, useState } from 'react';
import './Balloons.css';

export default function Balloons({ stopGenerating }) {
    const colors = ['#FFC0CB', '#FFD700', '#ADFF2F', '#87CEEB', '#FF69B4', '#FFA500'];
    const [balloons, setBalloons] = useState([]);

    useEffect(() => {
        if (stopGenerating) return;
        const interval = setInterval(() => {
            const id = Date.now() + Math.random();
            setBalloons(b => [...b, {
                id,
                left: `${Math.random() * 90 + 5}%`,
                delay: `${Math.random()}s`,
                duration: `${4 + Math.random() * 2}s`,
                color: colors[Math.floor(Math.random() * colors.length)]
            }]);
        }, 300);
        return () => clearInterval(interval);
    }, [stopGenerating]);

    return (
        <div className="balloons">
            {balloons.map(b => (
                <div
                    key={b.id}
                    className="balloon"
                    style={{
                        left: b.left,
                        animationDelay: b.delay,
                        animationDuration: b.duration,
                        backgroundColor: b.color
                    }}
                />
            ))}
        </div>
    );
}