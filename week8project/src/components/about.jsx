import { useState } from 'react'
import homePagephoto from '../img/homepg.png'
import '../App.css'

function App(){


  return (
    <>
      <div className="homePage">
        <h1>How to play the game</h1>
        <img src={homePagephoto} alt="image" className='homepgImg'/>
        <h3>Have one of your friend play as the god who will guide the game:</h3>
        <h3>Night: Everyone close their eyes</h3>
        <ol>
            <li>Werewolf Open eyes, choose a player as victim of the night. Then werewolf end his term</li>
            <li>Witch Open eyes, god will tell witch who's the victim and witch can decide if he wants to save that victim or use her posion to poison a player. Then witch end his term</li>
            <li>Fortune Teller Open eyes, choose a player to check his identity. Then Fortune teller end his term.</li>
        </ol>
        <h3>Day: Everyone discuss</h3>
        <ol>
            <li>The god will mention who's the victim of last night and reveal their identity.</li>
            <li>Each player take term to talk about their idea of who's the werewolf and can choose to reveal or fake their identity.</li>
            <li>At the end of discussion, everyone will be able to vote for a player they think that is suspicious or give up voting if they don't have enough clue on who is the werewolf.</li>
            <li>The player who got the most vote will be executed at the end of the day and the god will reveal his identity.</li>
        </ol>
        <h3>How to win</h3>
            <p>Werewolf: Eliminate all the innecent villager or both witch and fortune teller</p>
            <p>Rest of the player: Collaborate and find out who's the werewolf.</p>
      </div>
    </>
  )
}

export default App