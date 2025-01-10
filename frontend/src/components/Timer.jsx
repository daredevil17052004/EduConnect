'use client'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Timer = ({hours = 2, minutes = 36, seconds = 3}) => {
    const [time,setTime] = useState(hours * 3600 + minutes * 60 + seconds);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        },1000)

        return() => clearInterval(timer);
    },[]);

    const formatTime = (time) =>{
        const hrs = Math.floor(time/3600);
        const mins = Math.floor((time%3600) / 60);
        const secs = time % 60;
        return `${hrs.toString().padStart(2, "0")}h ${mins
        .toString()
        .padStart(2, "0")}m ${secs.toString().padStart(2, "0")}s`;
    }

  return (
    <div className="flex items-end ">
        <div>
            <p className='text-primary font-semibold'>Ends in:</p>
        </div>
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-1">
        {formatTime(time)}
        </div>
    </div>
  )
}

export default Timer