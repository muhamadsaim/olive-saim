import React from 'react'
import './style.scss'

const DeletePopup = ({show}) => {
  return (
      <div className='deleteMain'>
          <p>Are you sure to delete this?</p>
          <div className='buttons'>
              <button className='buttonCancel' onClick={()=>show(false)}>Cancel</button>
              <button className='buttonDelete'>Delete</button>
          </div>
    </div>
  )
}

export default DeletePopup