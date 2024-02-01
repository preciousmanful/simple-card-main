import React from 'react'
import "./Style.css"

 function Picture(props) {
  return (
    <div>
        <img className="Picture" src={props.src}></img>
    </div>
  )
};
export default Picture;