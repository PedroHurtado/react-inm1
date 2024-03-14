import sytles from  './Calendar.module.css'
import Day from './Day'

function* getDays(){
   for(let i=0;i<31;i++){
     yield i+1
   }
}

export default function Calendar (){
    function handlerDay(day){
        console.log(day)
    }
    function handlerClick(ev){
        ev.stopPropagation();
        const node = ev.nativeEvent.composedPath().find(n=>n.dataset && 'day' in n.dataset)
        if(node){
            const {day } = node.dataset
            console.log(day)
        }

    }
    const days = [...getDays()]
    return(
        <div onClick={handlerClick} className={sytles.calendar}>
            {days.map(day=><Day key={day} {...{day,handlerDay}}/>)}    
        </div>
    )

}