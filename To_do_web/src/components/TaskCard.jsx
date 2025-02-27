import React from 'react'

import './TaskCard.css'
import Tag from './Tag'
import deleteIcon from '../assets/icons/delete.png'


const TaskCard = () => {
  return (
    <article className='task_card'>
         <p className='task_text'>This is a example task by owner</p>
         <div className='task_card_button_line'>
            <div className='tas_card_tags'>
                <Tag tagName='HTML'/>
                <Tag tagName='CSS'/>

            </div>
            <div className='task_delete'>
                <img src={deleteIcon} className='delete_icon' alt="" />
            </div>
         </div>
    </article>
   
  )
}

export default TaskCard
