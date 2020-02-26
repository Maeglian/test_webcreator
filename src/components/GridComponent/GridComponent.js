import React from "react";
import RichTextComponent from "./../RichTextComponent/RichTextComponent";

const GridComponent = ({components}) => {      

    const divs = () => {
        const props = {
            RichTextComponent
        };

        return components.map(c => {
            const Comp = props[c.type];            

            return (
                <div className={`col-${c.col}`}>
                    <Comp {...c.metadata} />
                </div>
            );
        })
    }      

    return (
        <section class="row mb-4">
            {divs()}
        </section>
    )
};

export default GridComponent;