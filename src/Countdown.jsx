import React from 'react'

function Countdown() {
    return (
        <div className='countdown-container'>
            <div className="countdown-values">
                <div className="countdown-value">
                    <p className="big-text">
                        days
                    </p>
                </div>
                <span>days</span>
                <div className="countdown-value">
                    <p className="big-text">
                        hours
                    </p>
                </div>
                <span>hours</span>
                <div className="countdown-value">
                    <p className="big-text">
                        mins
                    </p>
                </div>
                <span>mins</span>
                <div className="countdown-value">
                    <p className="big-text">

                    </p>
                </div>
                <span>days</span>
            </div>
        </div>
    )
}

export default Countdown