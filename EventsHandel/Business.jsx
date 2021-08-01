import React,{useState,useEffect} from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
const Business =()=>{
    const [business,setBusiness] =useState([])
    useEffect(()=>{
     async function getData(){
         const res =await axios.get("http://allevents.s3.amazonaws.com/tests/business.json");
         console.log(res.data.item)
        setBusiness(res.data.item)
         
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
        <div className={view?"event-container": "event-active"}>
          
        {business.map((bus)=>(<div className="event-card" key={bus.event_id}>
            <img src={bus.thumb_url} alt=""/>
            <p>{bus.eventname}</p>
            <p>{bus.start_time_display}</p>
            <p>{bus.location}</p>
            <p>{bus.venue.city}</p>
        </div>))}
    </div>
    </div>
    )
}
export default Business;