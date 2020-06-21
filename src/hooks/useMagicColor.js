import React, { useState, useEffect, useRef } from 'react';

function randomColor(currentColor) {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 5);
    }
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    // change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('First color: ', color);
            // console.log('Change color: ', colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        // clean up
        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;