import React from 'react'
import "./Style.css"

 function Title(props) {
  return (
    <div>
     <h1 className="title">{props.title}</h1>
    </div>
  )
};
export default Title;