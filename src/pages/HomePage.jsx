import React from 'react'
import Sidebar from '../componenets/Sidebar'
import Chat from '../componenets/Chat'

function HomePage() {
  return (
    <div className='home'>
        <div className="container">
        <Sidebar/>
        <Chat/>
        </div>
      
    </div>
  )
}

export default HomePage
