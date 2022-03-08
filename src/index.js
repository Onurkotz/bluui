import React from 'react'
import style from './styles.module.css'


export const Button = (props) => {

  return <button  {...props.type} {...props}> {props.text} </button>
}
