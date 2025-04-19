import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../client";

function fortuneTelling(){
    const [target,setTarget] = useState('')
    const [result,setResult] = useState()
    

    const [playerList, setPlayerList] = useState([])
        useEffect(()=>{
            const fetchData = async ()=>{
                const {data} = await supabase
                .from('player')
                .select('*')
                setPlayerList(data)
            }
            fetchData()
        },[])

    const fourtuneTelling = async(event)=>{
        event.preventDefault();
        playerList.forEach(player => {
            if(player.id == target){
                if(player.identity == 'werewolf'){
                    setResult("He's there werewolf")
                } else {
                    setResult("He's innocent")
                }
            }
        });
    }

    return (
        <>
            <div className="inputBox">
                    <label for="name">Who's identity you want to check?</label>
                    <select name="player" id="player" onChange={(e)=>{setTarget(e.target.value)}}>
                        {playerList.map((player) => {
                            return <option value={player.id} style={{backgroundColor:`${player.color}`}}>{player.name}</option>;
                        })}
                    </select>
                    <input type="submit" value="Check" onClick={fourtuneTelling} />
                    <h2>{result}</h2>
            </div>
        </>
    )
}

export default fortuneTelling