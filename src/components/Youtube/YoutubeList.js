import React from "react";
import { YoutubeData } from "./Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
    return (
        <div className="youtube-list">
            {props.children}
            {YoutubeData.map((item, index) => {
                let newClass = "";
                if (index % 2 === 0) {
                    newClass = "bg";
                }
                return (
                    <YoutubeItem
                        key={item.id}
                        image={item.image || item.avatar}
                        avatar={item.avatar}
                        title={item.title}
                        author={item.author}
                        className={newClass}
                    />
                );
            })}
        </div>
    );
};

export default YoutubeList;