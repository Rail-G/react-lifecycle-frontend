import { useEffect, useState } from "react"
import { getUTCTimeZone } from "./utils/getUTCTimeZone"

export function Clock({props, onDelete}: {props: Clock, onDelete: (id: string) => void}) {
    const {id, name, timeZone} = props
    const [time, setTime] = useState(getUTCTimeZone(timeZone))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getUTCTimeZone(timeZone))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className="clock-info">
            <span className="clock-title">{name}</span>
            <button onClick={() => onDelete(id)} className="clock-close"></button>
            <div className="clock">
                <div className="second" style={{transform: `rotate(${time.second * 6}deg)`}}></div>
                <div className="minute" style={{transform: `rotate(${time.minute * 6}deg)`}}></div>
                <div className="hour" style={{transform: `rotate(${time.hour + (time.minute * 6) / 15}deg)`}}></div>
            </div>
        </div>
        
    )
}