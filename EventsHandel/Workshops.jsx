import React,{useState,useEffect} from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
const Workshops =()=>{
    const [workshops,setWorkshops] =useState([])
    useEffect(()=>{
     async function getData(){
         const res =await axios.get("http://allevents.s3.amazonaws.com/tests/sports.json");
         console.log(res.data.item)
        setWorkshops(res.data.item)
         
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
       
        {workshops.map((work)=>(<div className="event-card" key={work.event_id}>
            <img src={work.thumb_url} alt=""/>
            <p>{work.eventname}</p>
            <p>{work.start_time_display}</p>
            <p>{work.location}</p>
            <p>{work.venue.city}</p>
        </div>))}
    </div>
    </div>
    )
}
export default Workshops;