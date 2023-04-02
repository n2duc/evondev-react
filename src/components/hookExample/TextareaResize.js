import React, { useLayoutEffect, useRef, useState } from "react";

const TextareaResize = () => {
    const [text, setText] = useState("hello");
    const textareaRef = useRef(null); 
    const [textareaHeight, setTextareaHeight] = useState("auto");
    const [parentHeight, setParentHeight] = useState("auto");

    const handleChange = (e) => {
        setTextareaHeight("auto");
        setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
        setText(e.target.value);
    }

    useLayoutEffect(() => {
        setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
        setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    }, [text]);

    return (
        <div className="p-5" style={{
            minHeight: parentHeight,
        }}>
            <textarea
                className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none focus:outline-none focus:border-blue-500 leading-normal"
                placeholder="Enter text"
                ref={textareaRef}
                value={text}
                style={{
                    height: textareaHeight,
                }}
                onChange={handleChange}
            ></textarea>
        </div>
    );
};

export default TextareaResize;
