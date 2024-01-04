import React, { useEffect, useState } from 'react'
import  './Timer.css'

function Timer({duration}) {
    const [time,setTime]=useState(duration)
    useEffect(()=>{
        setTimeout(() => {
            setTime(time-1000)
        }, 1000);
    },[time])
    function getFormatedTime(milliSeconds){
        let totalSeconds=parseInt(Math.floor(milliSeconds/1000))
        let totalMinutes=parseInt(Math.floor(totalSeconds/60))
        let totalHours=parseInt(Math.floor(totalMinutes/60))
        let days=parseInt(Math.floor(totalHours/24))

        let seconds=parseInt(totalSeconds % 60)
        let minutes=parseInt(totalMinutes % 60)
        let hours=parseInt(totalHours % 24)
        return `${days} : ${hours} : ${minutes} : ${seconds}`
    }
  return (
    <div className='bg-midnight'>
        <h1 className="text-3xl font-bold underline text-bermuda">
            {getFormatedTime(time)}
        </h1>
    </div>
  )
}

export default Timer