import React from 'react'
import './Controls.css'

export default function Controls(props){
  return(
    <div className="button-display">
      <button onClick={props.previous}>{'< Previous'}</button>
      <button onClick={props.next}>{'Next >'}</button>
    </div>
  )
}