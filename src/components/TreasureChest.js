import React, { useState, useRef } from 'react';
import './TreasureChest.css';

export default function TreasureChest({ onOpen }) {
    const [chestOpened, setChestOpened] = useState(false);
    const [keyPos, setKeyPos] = useState({ x: 100, y: 300 });
    const [dragging, setDragging] = useState(false);
    const wrapperRef = useRef(null);
    const chestRef = useRef(null);
    const keyRef = useRef(null);

    const handleMouseDown = () => setDragging(true);
    const handleMouseUp = (e) => {
        setDragging(false);

        if (!chestRef.current || !keyRef.current) return;

        const lockBox = chestRef.current.querySelector('.chest-lock-zone')?.getBoundingClientRect();
        const keyBox = keyRef.current.getBoundingClientRect();
        if (!lockBox) return;

        const keyCenter = {
            x: keyBox.left + keyBox.width / 2,
            y: keyBox.top + keyBox.height / 2,
        };

        if (
            keyCenter.x > lockBox.left &&
            keyCenter.x < lockBox.right &&
            keyCenter.y > lockBox.top &&
            keyCenter.y < lockBox.bottom
        ) {
            setChestOpened(true);
            onOpen();
        }
    };

    const handleMouseMove = (e) => {
        if (!dragging || !wrapperRef.current) return;
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const newX = Math.max(0, Math.min(e.clientX - wrapperRect.left - 25, wrapperRect.width - 50));
        const newY = Math.max(0, Math.min(e.clientY - wrapperRect.top - 25, wrapperRect.height - 50));
        setKeyPos({ x: newX, y: newY });
    };

    return (
        <div
            ref={wrapperRef}
            className="treasure-wrapper"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={(e) => handleMouseMove(e.touches[0])}
            onTouchEnd={(e) => handleMouseUp(e.changedTouches[0])}
        >
            <div ref={chestRef} className={`chest ${chestOpened ? 'opened' : 'shake'}`}>
                <div className="chest-lid" />
                <div className="chest-body">
                    <div className="chest-lock-zone" />
                </div>
            </div>
            {!chestOpened && (
                <div
                    className="key-icon"
                    ref={keyRef}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                    style={{
                        position: 'absolute',
                        top: `${keyPos.y}px`,
                        left: `${keyPos.x}px`,
                        fontSize: '32px',
                        cursor: 'grab',
                        zIndex: 10,
                        userSelect: 'none'
                    }}
                >
                    🔑
                </div>
            )}
        </div>
    );
}
