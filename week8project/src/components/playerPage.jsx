import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router";
import PlayerList from './playerList'

function playerPage(){

    return (
        <>
            <div className="playerPage">
                <h1>Hometown</h1>
                <p>Where everything started</p>
                 <Link to='/create'><button className="createButton" >Create Player</button></Link>
                <PlayerList/>
            </div>
        </>
    )
}

export default playerPage
