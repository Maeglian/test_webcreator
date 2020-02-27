import React from "react";
import "./Form.scss"

const Form = ({title, fields, groups, submit}) => {  
    const mapFields = (arr, inputGroup) => arr.map(({ name, group, type, required, label}) => {
        if (group === inputGroup) {
            const additional = (group === "additional") ? " (не обязательно)" : "";

            return (
                <div className="col" key={name}>
                    <label htmlFor={name}>
                        {label + additional}
                    </label>
                    <div class="input-wrapper">
                        <input className="form-control" id={name} name={name} type={type} required={required} />
                        <span></span>
                    </div>
                </div>              
            )
        }
        
        return null;
    });

    const layout = Object.entries(groups).map(([name, className]) => {
        const inputs = mapFields(fields, name);

        //const cn = (name === "main") ? " row row-cols-2" : "";

        return (
            <div className={className} >
                {inputs}
            </div>
        )
    });

    const checkbox = fields.map(({name, type, required, label}) => {  
        if (type === "checkbox") {
            const createMarkUp = () => ({
                __html: label
            });

            return (
                <div className="form-row mb-cus-1">
                    <div className="custom-control custom-checkbox col" key={name}>
                        <input className="custom-control-input" id={name} name={name} type={type} required={required} />
                        <label className="custom-control-label" htmlFor={name} dangerouslySetInnerHTML={createMarkUp()} />
                    </div>  
                </div>
            )
        }

        return null;
    })

    return (
        <form>
            <h2 class="mb-cus-1">
                {title}
            </h2>
            <div className="form-row mb-3">
                {layout}
            </div>
            {checkbox}
            <button class="btn btn-primary font-weight-bold">
                {submit.text}
            </button>            
        </form>
    )
};

export default Form;