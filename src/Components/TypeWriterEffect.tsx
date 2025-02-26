import React, { useEffect, useRef, useState } from "react";

interface Props {
    input: string;
    typingSpeed: number;
}

export const TypewriterEffect: React.FC<Props> = ({ input, typingSpeed }) => {
    const [text, settext] = useState("");
    const [isFinished, setIsFinished] = useState(false); // Track typing completion

    const iRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Get the current value of i from the ref
            const currentChar = input[iRef.current];
            settext((prevText) => prevText + currentChar);

            // Increment iRef
            iRef.current += 1;

            // Stop typing when we've finished typing the full text
            if (iRef.current === input.length) {
                clearInterval(intervalId);
                setIsFinished(true); // Set typing as finished
            }
        }, typingSpeed);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [input]);

    return (
        <div className="flex justify-center items-center bg-none">
            <h1 className="font-mono">
                {text}
                {!isFinished && <span className="caret blink inline-block">|</span>}
            </h1>
        </div>
    );
};