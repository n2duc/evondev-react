import React from "react";

const Jsx = () => {
    const element = <div id="root">Hello world</div>;
    const elementR = React.createElement("div", { id: "root" }, "Hello world");

    const element2 = (
        <div>
            <span>Hello</span> <span>world</span>
        </div>
    );
    const element2R = React.createElement("div", {
        children: [
            React.createElement("span", null, "Hello"),
            " ",
            React.createElement("span", null, "world"),
        ],
    });
    //Phai co phan tu cha
    return (
        <div>
            <div className="heading" id="heading">
                This is heading
            </div>
            <div className="heading2" id="heading2">
                This is heading
            </div>
        </div>
    );
};

export default Jsx;
