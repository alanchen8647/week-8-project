import { useState } from 'react'
import homePagephoto from './img/homepg.png'
import './App.css'

function App(){


  return (
    <>
      <div className="homePage">
        <h1>Shhhiii, it's night close your eyes</h1>
        <img src={homePagephoto} alt="image" className='homepgImg'/>
        <h3>There is a werewolf hide within us, protect yourself and find out who's the werewolf!</h3>
      </div>
    </>
  )
}

export default App
