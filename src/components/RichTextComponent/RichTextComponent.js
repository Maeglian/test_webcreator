import React from "react";

const RichTextComponent = ({title, text}) => {
    const createMarkUp = () => ({
        __html: text
    });

    return (
        <>
        <h2>
            {title}
        </h2>
        <div dangerouslySetInnerHTML={createMarkUp()}></div>
        </>
    )
};

export default RichTextComponent;