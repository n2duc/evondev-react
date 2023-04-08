import React from "react";
import useLinkNewTab from "./useLinkNewTab";
import useHover from "./useHover";

const Blog = () => {
    const { contentRef }  = useLinkNewTab();
    const { hovered, nodeRef } = useHover();

    return (
        <div className="entry-content" ref={contentRef}>
            <p className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit{" "}
                <a href="https://google.com" className="underline">
                    google.com
                </a>
                . Iusto, magni!
            </p>
            <p className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit{" "}
                <a href="https://google.com" className={`underline ${hovered ? 'text-green-400' : ''}`} ref={nodeRef}>
                    google.com
                </a>
                . Iusto, magni!
            </p>
            <p className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit{" "}
                <a href="https://google.com" className="underline">
                    google.com
                </a>
                . Iusto, magni!
            </p>
        </div>
    );
};

export default Blog;
