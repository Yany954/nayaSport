import React from 'react'
import './Title.css'

function Title(props) {
  return (
    <h2 className='title' style={{color: props.color}}>{props.title}</h2>
  )
}

export default Title;