import React, { useEffect, useState } from 'react'
import './Countdown.css'

function Countdown() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [inputDate, setInputDate] = useState('01 june 2024')
    const [currentDate, setCurrentDate] = useState(inputDate)
   

    useEffect(() => {
        const changingDate = new Date(inputDate)
        const currentDate = new Date()
        const totalSeconds = (changingDate - currentDate) / 1000

        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)))
        setHours(Math.floor(totalSeconds / 3600) % 24)
        setMinutes(Math.floor(totalSeconds / 60) % 60)
        setSeconds(Math.floor(totalSeconds % 60))
        setTimeout(() => {
            setSeconds(seconds-1)
        }, 1000);
    },[currentDate,seconds])
    function formatTime(time) {
        return time < 10 ? `0${time}` : time
    }

    const onChangeHandler=(event)=>{
        setInputDate(event.target.value)
    }
    const onclickhandler=()=>{
        setCurrentDate(inputDate)
    }
    return (
        <div className='countdown-container'>
            <div className="countdown-values">
                <div className="countdown-value">
                    <p className="big-text">{days}</p>
                    <span>days</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">
                        {hours}
                    </p>
                    <span>hours</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">
                        {minutes}
                    </p>
                    <span>minutes</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">
                        {seconds}
                    </p>
                    <span>seconds</span>
                </div>
            </div>
            <div className="countdown-input-button">
                <input type="date" className="countdown-input" onChange={onChangeHandler}/>
                <button className="countdown-button" onClick={onclickhandler}  >
                    countdown
                </button>
            </div>
        </div>
    )
}

export default Countdown