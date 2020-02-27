import React from "react";
import "./Form.scss"

const Form = ({title, fields, groups, submit}) => {  
    const mapFields = (arr, inputGroup) => arr.map(({ name, group, type, required, label}) => {
        if (group === inputGroup) {
            const additional = (group === "additional") ? " (не обязательно)" : "";

            return (
                <div className="form-group col" key={name}>
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

        const cn = (name === "main") ? " row row-cols-2" : "";

        return (
            <div className={className + cn} >
                {inputs}
            </div>
        )
    });

    const checkbox = fields.map(({name, group, type, required, label}) => {
        /*
        if (type === "checkbox") {
            return (
                <div className="row mb-cus-1">
                    <div className="form-group col" key={name}>                    
                    <div class="input-wrapper">
                        <input className="form-control" id={name} name={name} type={type} required={required} />
                        <span></span>
                    </div>
                    <label htmlFor={name}>
                        {label}
                    </label>
                </div>  
                </div>
            )
        }
        */

        return null;
    })

    return (
        <form>
            <h2 class="mb-cus-1">
                {title}
            </h2>
            <div className="row mb-cus-1">
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