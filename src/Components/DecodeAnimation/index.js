import React, { useEffect, useState } from 'react';
import './index.scss'

const AnimatedLetters = ({ letterClass, strArray }) => {
    const [text, setText] = useState(strArray.join(''));

    let CHAR_DURATION = 1 / 10;
    let TIMEOUT_DURATION = 1;

    function randomChar() {
        let str = "アイウエオカシサシスソマミムメモヤユヨーラリルレロポペプピパボベブビバヂヅデドゾゴダジズゼンヲヱヰワギガグゲザ"
        let c = str[Math.floor(Math.random() * str.length)];
        return c;
    }

    function easeIn(x) {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    }

    function animate() {
        // e.target.style.animation = `colorChangeAnimation`
        let newText = [];

        for (let i = 0; i < strArray.length; i++) {
            newText.push(randomChar());
        }
        // console.log("This is the new text:" + newText)

        setText(newText.join(""));

        // console.log("hi there")
        // console.log("This is the text state:" + text)

        let i = 0;
        let int = setInterval(() => {
            if (i >= strArray.length) {
                clearInterval(int);
            }

            let t = [];
            for (let k = 0; k <= i; k++) {
                t.push(text[k]);
            }
            for (let k = i + 1; k < newText.length; k++) {
                t.push(randomChar())
            }
            let p = easeIn(i / text.length);
            let tim = setTimeout(() => {
                if (p === 1) {
                    clearTimeout(tim);
                }
                let upText = t.join("");
                setText(upText);
            }, p * TIMEOUT_DURATION * 1000);
            i++;
        }, CHAR_DURATION * 1000);
    }

    useEffect(() => {
        const delayStart = setTimeout(() => {
            animate();
        }, 4000); 
        
        return () => clearTimeout(delayStart);
    }, []);

    return (
        <span>
            {text.split('').map((char, i) => (
                <span key={char + i} className={`${letterClass}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters