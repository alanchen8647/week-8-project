import React from "react";
import innocent from '../img/villager.jpeg'
import './card.css'
import { Link } from "react-router";

import deadIcon from '../img/deadIcon.png'
import wolf from '../img/wolf.jpeg'
import villager from '../img/villager.jpeg'
import fortuneTeller from '../img/fortune_teller.jpeg'
import witch from '../img/witch.jpeg'

function card({player}){

    const imageMap = {
            werewolf: wolf,
            innocent: villager,
            fortune_teller: fortuneTeller,
            witch: witch
        }
    
    
    
    
    return(
        <>
            <Link to={'edit/'+player.id} className="cardLink">
                <div className="card">
                    <div className="cardAndIcon">
                        {!player.status ? (<img className="icon" src={deadIcon} alt="deadIcon" />) : (null)}
                        <img src={player.status ? (villager) : (imageMap[player.identity])} alt="innocent player" className={`card-image filter-${player.color} ${!player.status ? "deadImg" : ""}`}/>
                    </div>
                    <p>Name: <b>{player.name}</b></p>
                    <p>description: <b>{player.description}</b></p>
                    <p>identity: <b>{player.status ? ('?') : `${player.identity}`}</b></p>
                    <p>color:<b>{player.color}</b></p>
                    <p>{!player.status ? player.dead_reason : ""}</p>
                </div>
            </Link>
            
        </>
    )
}

export default card;