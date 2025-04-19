import React, { useState } from "react";
import { supabase } from "../client.js";
import { useEffect } from "react";
import './createPlayer.css'
import './colorFilter.css'
import wolf from '../img/wolf.jpeg'
import villager from '../img/villager.jpeg'
import fortuneTeller from '../img/fortune_teller.jpeg'
import witch from '../img/witch.jpeg'


function createPlayer(){

    
    const [player, setPlayer] = useState({name:"",identity:"",description:"",color:"none"})
    const imageMap = {
        werewolf: wolf,
        innocent: villager,
        fortune_teller: fortuneTeller,
        witch: witch
    }
    const [characterImage,setCharacterImage] = useState();

    const createPlayer = async(event)=>{
        event.preventDefault();
        console.log(player)
        await supabase
            .from('player')
            .insert({name:player.name,  identity:player.identity,  description:player.description,  color:player.color})
            .select(); 
        window.location = "/player"
        console.log(player)
    }      

    useEffect(()=>{
        setCharacterImage(imageMap[player.identity])
    },[player.identity])


    const handleChange = (event) =>{
        const {name,value} = event.target;
        setPlayer((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    

    return(
        <>
            <form className="playerForm">
                <h1>Create a character</h1>
                <img src={characterImage ? (characterImage) : (villager)} alt="villager image" className={`characterImage filter-${player.color}`}/>
                <div className="properties">
                    <div className="inputBox">
                        <label for="name">What is this character's name?</label>
                        <input type="text" id="name" name="name" onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                        <label for="identity">What is his identity<br/>
                            <select name="identity" id="identity" onChange={handleChange}>
                                <option value="innocent">innocent</option>
                                <option value="werewolf">werewolf</option>
                                <option value="fortune_teller">fortune teller</option>
                                <option value="witch">witch</option>
                            </select>
                        </label>
                    </div>
                    <div className="inputBox">
                        <label for="description">Describe this character</label>
                        <input type="text" id="description" name="description" onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                        <label for="color">What is his identity<br/>
                            <select name="color" id="color" onChange={handleChange}>
                                <option value="none">none</option>
                                <option value="red">red</option>
                                <option value="green">green</option>
                                <option value="blue">blue</option>
                                <option value="purple">purple</option>
                                <option value="orange">orange</option>
                                <option value="pink">pink</option>
                            </select>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Create" onClick={createPlayer} />
            </form>
        </>
    )
}

export default createPlayer