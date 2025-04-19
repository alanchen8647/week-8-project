import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../client";

function witchSkill(){
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


    const poison = async(event)=>{
        event.preventDefault();
        const targetPlayer = playerList.find(player=>player.id == target);
        if (!targetPlayer) {
            setResult("Player not found");
            return;
        }
        if (targetPlayer.status === false) {
            setResult("This player is already dead, you can't poison a dead body.");
            return;
        }
        await supabase
        .from('player')
        .update({status:false,dead_reason:'killed by poison'})
        .eq('id',targetPlayer.id)
        setResult("You killed this player, return to home town to check out his identity");
    }

    const save = async(event)=>{
        event.preventDefault();
        const targetPlayer = playerList.find(player=>player.id == target);
        if (!targetPlayer) {
            setResult("Player not found");
            return;
        }
        if (targetPlayer.status === true) {
            setResult("He's still alive, you can't save her!");
            return;
        }
        await supabase
        .from('player')
        .update({status:true,dead_reason:null})
        .eq('id',targetPlayer.id)
        setResult("You saved this player");
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
                    <input type="submit" value="Poison" onClick={poison} />
                    <input type="submit" value="Save" onClick={save} />
                    <h2>{result}</h2>
            </div>
        </>
    )
}

export default witchSkill