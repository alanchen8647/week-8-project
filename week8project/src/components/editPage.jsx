import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../client";
import './colorFilter.css'
import './createPlayer.css'
import wolf from '../img/wolf.jpeg'
import villager from '../img/villager.jpeg'
import fortuneTeller from '../img/fortune_teller.jpeg'
import witch from '../img/witch.jpeg'

import FortuneSkill from './ability/fortune_teller'
import WitchSkill from './ability/witch'
import WerewolfSkill from './ability/wereWolf'

function edit(){
    const {id} = useParams();
    const [info,setInfo] = useState({})
    const playerMessage = {
        innocent: "You are a villager, you have no special ability but try your best to find out who's the werewolf!",
        fortune_teller:"You are a fortune teller, you have the ability to check on other's identity each night!",
        witch:"You are a witch, you have one healing potion and a poison, you can choose to use either one to save or kill a player. Use it wisely!",
        werewolf:"You are a werewolf, you can choose to kill a player each night. Try your best to survie to the last!"
    }

    const imageMap = {
        werewolf: wolf,
        innocent: villager,
        fortune_teller: fortuneTeller,
        witch: witch
    }

    const skills = {
        fortune_teller: <FortuneSkill/>,
        witch: <WitchSkill/>,
        werewolf: <WerewolfSkill/>
    }

    console.log(id)
    useEffect(()=>{
            const fetchData = async ()=>{
                const {data,error} = await supabase
                .from('player')
                .select()
                .eq('id',String(id))
                setInfo(data[0])
                if(error){
                    console.log(error)
                }
                console.log(data)
            }
            fetchData()
    },[])
    
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setInfo((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePlayer = async(event)=>{
        event.preventDefault();
        await supabase
            .from('player')
            .update({name:info.name, description:info.description})
            .eq('id',id)
        window.location="/player"
    }

    const deletePlayer = async(event) =>{
        event.preventDefault();
        await supabase 
            .from('player')
            .delete()
            .eq('id',id)
        window.location="/player"
    }

    return (<>
        <div className="playerForm">
            <h1>Hello!{info.name}</h1>
            <p>{playerMessage[info.identity]}</p>
            {!info.status ? (<p>"Unfortunaly you didn't make it to the end"</p>):null}
            <img src={imageMap[info.identity]} alt="villager image" className={`characterImage filter-${info.color}`}/>
                <div className="properties">
                    <div className="inputBox">
                        <label for="name">Your name is</label>
                        <input type="text" id="name" name="name" defaultValue={info.name} onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                        <label for="identity">Your identity is<br/>
                            <input type="text" id="identity" name="identity" defaultValue={info.identity} disabled />
                        </label>
                    </div>
                    <div className="inputBox">
                        <label for="description">Describtion</label>
                        <input type="text" id="description" name="description" defaultValue={info.description} onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                        <label for="color">What is his identity<br/>
                            <input type="text" id="color" name="color" defaultValue={info.color} disabled />
                        </label>
                    </div>
                    {info.status ? (skills[info.identity]):null}
                </div>
                <input type="submit" value="Update" onClick={updatePlayer} />
                <input type="submit" value="Delete" onClick={deletePlayer}/>
        </div>
        
    </>)
}


export default edit;