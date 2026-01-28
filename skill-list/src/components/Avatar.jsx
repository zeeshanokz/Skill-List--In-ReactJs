import React from 'react'
import image from "../assets/images/profile.png"

function Avatar() {
  return (
    <div className='avatar'>
        <img src= {image} alt='Profile Image' width={440} height={30}/>
    </div>
  )
}

export default Avatar