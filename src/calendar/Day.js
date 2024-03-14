import './Day.css'

export default function Day({day,/*handlerDay*/}){    
    /*function handlerClick(ev){
        ev.stopPropagation();
        handlerDay(day)
    }*/
    return (
        /* 
        º<div  onClick={handlerClick} className="day">{day}</div>
        */
        
        <div data-day={day} className="day">{day}</div>     
        
    )
}