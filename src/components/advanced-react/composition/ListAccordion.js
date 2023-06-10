import React from "react";
import Accordion from "./Accordion";

const ListAccordion = () => {
    return (
        <div className="p-10 w-full max-w-[600px] mx-atuo">
            <Accordion header="Can i change my plan later">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo, harum quia? Repudiandae dignissimos placeat hic
                    obcaecati optio sequi natus mollitia.
                </div>
            </Accordion>
            <Accordion header="Can i change my plan later">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo, harum quia? Repudiandae dignissimos placeat hic
                    obcaecati optio sequi natus mollitia.
                </div>
            </Accordion>
        </div>
    );
};

export default ListAccordion;
