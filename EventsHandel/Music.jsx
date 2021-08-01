import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
const Music =()=>{
    const [music,setMusic] =useState([])
    useEffect(()=>{
     async function getData(){
         const res =await axios.get("http://allevents.s3.amazonaws.com/tests/music.json");
         console.log(res.data.item)
        setMusic(res.data.item)
         
     }
     getData();
    },[])
    const [view,setView] =useState(true);
    const changeview=()=>{
        setView(!view)
    }
    return(<div>
        <div className="free-btn">
        <button className="change-btn" onClick={changeview}><VisibilityIcon/></button>
        </div>
        <div className= {view ? "event-container": "event-active"}>
           
            {music.map((mus)=>(<div className="event-card" key={mus.event_id}>
                <img src={mus.thumb_url} alt=""/>
                <p>{mus.eventname}</p>
                <p>{mus.start_time_display}</p>
                <p>{mus.location}</p>
                <p>{mus.venue.city}</p>
            </div>))}
        </div>
        </div>
    )
}
export default Music