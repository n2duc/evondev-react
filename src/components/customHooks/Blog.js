import React from "react";
import useLinkNewTab from "./useLinkNewTab";
import useHover from "./useHover";
import useFormInput from "./useFormInput";

const Blog = () => {
    const { contentRef } = useLinkNewTab();
    const { hovered, nodeRef } = useHover();

    const firstNameProps = useFormInput("Ngoc");
    const lastNameProps = useFormInput("Duc");

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
                <a
                    href="https://google.com"
                    className={`underline ${hovered ? "text-red-400" : ""}`}
                    ref={nodeRef}
                >
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

            <div className="flex flex-col p-5">
                <label>
                    First name:
                    <input
                        className="ml-2 mb-2 p-1 border-none outline-none rounded-md shadow-sm"
                        type="text"
                        {...firstNameProps}
                    />
                </label>
                <label>
                    Last name:
                    <input
                        className="ml-2 mb-2 p-1 border-none outline-none rounded-md shadow-sm"
                        type="text"
                        {...lastNameProps}
                    />
                </label>
                <p>
                    Good morning,{" "}
                    <span className="px-1 rounded-md text-orange-600 bg-orange-600 bg-opacity-20">
                        {firstNameProps.value}
                    </span>
                    {" "}
                    <span className="px-1 rounded-md text-green-600 bg-green-600 bg-opacity-20">
                        {lastNameProps.value}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Blog;
