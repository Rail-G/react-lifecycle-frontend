import { Clock } from "./Clock";

export function ClockList({times, onDelete}: {times: Clock[], onDelete: (id: string) => void}) {
    return (
        <div className="clock-block">
            <ul className="grid-block">
                {times.map((el: {id: string, name: string, timeZone: string}) => (
                    <li key={el.id}>
                        <Clock props={el} onDelete={onDelete}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}