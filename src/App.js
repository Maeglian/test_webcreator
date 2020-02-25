import React, { useEffect, useState } from "react";
import GalleryComponent from "./components/GalleryComponent/GalleryComponent";
import GridComponent from "./components/GridComponent";
import Form from "./components/Form";
import data from "./components/data.json";
import './App.css';

const App = () => {
  const [components, setComponents] = useState({
    comp: data.components,
    form: data.form
  });

  const divs = () => {
    const props = {
      GalleryComponent,
      GridComponent
    }

    if (!components.comp) return null;
    return components.comp.map(c => {
      const Comp = props[c.type];
      const metadata = c.metadata;

      return (
        <Comp {...metadata} />
      )
    })
  };  

  const form = (components.form) 
    ? (<Form
        title ={components.form.title}
        fields={components.form.fields}
        groups={components.form.field_groups}
        submit={components.form.submit_button} 
      />) 
    : null;

  return (
    <div className="App container-xl text-left">
      {divs()}
      {form}        
    </div>
  );
}

export default App;
