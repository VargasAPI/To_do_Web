import React from 'react'
import './Tag.css'

const Tag = (props) => {
  return (
  
        <button className='tag_button'>{props.tagName}</button>

  )
}

export default Tag
