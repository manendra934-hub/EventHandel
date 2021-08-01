import React,{useState,useEffect} from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
const Sports =()=>{
    const [sport,setSport] =useState([])
    useEffect(()=>{
     async function getData(){
         const res =await axios.get("http://allevents.s3.amazonaws.com/tests/sports.json");
         console.log(res.data.item)
        setSport(res.data.item)
         
     }
     getData();
    },[])
    const [view,setView] =useState(true);
    const changeview=()=>{
        setView(!view)
    }
    return(
        <div>
        <div className="free-btn">
        <button className="change-btn" onClick={changeview}><VisibilityIcon/></button>
        </div>
        <div className={view?"event-container":"event-active"}>
           
        {sport.map((spo)=>(<div className="event-card" key={spo.event_id}>
            <img src={spo.thumb_url} alt=""/>
            <p>{spo.eventname}</p>
            <p>{spo.start_time_display}</p>
            <p>{spo.location}</p>
            <p>{spo.venue.city}</p>
        </div>))}
    </div>
    </div>
    )
}
export default Sports;