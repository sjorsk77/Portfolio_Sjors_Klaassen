import React, {useEffect, useRef, useState} from "react";

export const TypewriterEffect = () => {
    const [text, setText] = useState(""); // Initial state is an empty string
    const fullText = "Hey, I'm Sjors"; // Text to be typed out
    const typingSpeed = 100; // Speed of typing in milliseconds
    const [isFinished, setIsFinished] = useState(false); // Track typing completion

    const iRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Get the current value of i from the ref
            const currentChar = fullText[iRef.current];
            setText((prevText) => prevText + currentChar);

            // Increment iRef
            iRef.current += 1;

            // Stop typing when we've finished typing the full text
            if (iRef.current === fullText.length) {
                clearInterval(intervalId);
                setIsFinished(true); // Set typing as finished
            }
        }, typingSpeed);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    return (
        <div className="flex justify-center items-center bg-none">
            <h1 className="text-4xl font-mono">
                {text}
                {!isFinished && <span className="caret blink inline-block">|</span>}
            </h1>
        </div>
    );
};
