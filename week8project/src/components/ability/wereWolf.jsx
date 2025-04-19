import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../client";

function wereWolf(){
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

        useEffect(()=>{
            const fetchData = async ()=>{
                const {data} = await supabase
                .from('player')
                .select('*')
                setPlayerList(data)
            }
            fetchData()
        },[result])


    const kill = async(event)=>{
        event.preventDefault();
        const targetPlayer = playerList.find(player=>player.id == target);
        if (!targetPlayer) {
            setResult("Player not found");
            return;
        }
        if (targetPlayer.status === false) {
            setResult("This player is already dead, you kill a dead person");
            return;
        }
        await supabase
        .from('player')
        .update({status:false,dead_reason:'killed by WereWolf'})
        .eq('id',targetPlayer.id)
        setResult("You killed this player, return to home town to check out his identity");
    }


    return (
        <>
            <div className="inputBox">
                    <label for="name">Who you want to kill?</label>
                    <select name="player" id="player" onChange={(e)=>{setTarget(e.target.value)}}>
                        {playerList.map((player) => {
                            return <option value={player.id} style={{backgroundColor:`${player.color}`}}>{player.name}</option>;
                        })}
                    </select>
                    <input type="submit" value="kill" onClick={kill} />
                    <h2>{result}</h2>
            </div>
        </>
    )
}

export default wereWolf