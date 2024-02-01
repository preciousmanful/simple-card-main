import React, { Component } from 'react'
import Description from './Description'
import Title from './Title'
import "./Style.css"
import Picture from './Picture'

 class SimpleCard extends Component {
  render() {
    return (
      <div className='Card'>
        <img src='th.jpg'></img>
        
        <Title title="Title It"/>
        <Description  description="My Name is Joshua" />
      </div>
    )
  }
 };
export default SimpleCard;