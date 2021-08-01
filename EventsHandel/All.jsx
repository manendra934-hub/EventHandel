import React,{useState,useEffect} from 'react'; 
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios'
const All =()=>{
    const [event,setEvent] =useState([]);
      
    useEffect(()=>{
        async function getData (){
            const res = await axios.get("http://allevents.s3.amazonaws.com/tests/all.json")
            console.log(res.data) 
            setEvent(res.data.item)
        };
        getData();
    },[]);
    const [view,setView] =useState(true);
    const changeview=()=>{
        setView(!view)
    }
    return(<div>
        <div className="free-btn">
        <button className="change-btn" onClick={changeview}><VisibilityIcon/></button>
        </div>
         

        <div className={view? "event-container" : "event-active"}>
           
           
        
            {event.map((eve)=>(<div className="event-card" key={eve.event_id}>
               
                <img src={eve.thumb_url} alt=""/>
                <p>{eve.eventname}</p>
                <p>{eve.start_time_display}</p>
                <p>{eve.location}</p>
                <p>{eve.venue.city}</p>
            </div>))}
        </div>
        </div>
    )
}
export default All;