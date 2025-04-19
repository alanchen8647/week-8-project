import React from "react";
import { supabase } from "../client";
import { useState } from "react";
import { useEffect } from "react";
import Card from './card'

function playerList(){
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

    return (
        <>
            <div className="playerList">
                {playerList.map((player) => (
                    <Card player={player} />
                ))}
            </div>
        </>
    )
}

export default playerList;