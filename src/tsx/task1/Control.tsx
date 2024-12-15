import { useState } from "react";
import { ClockForm } from "./ClockForm";
import { ClockList } from "./ClockList";

export function Control() {
    const [list, setList] = useState<Clock[]>([])

    const onDelete = (id: string) => setList(list.filter(el => el.id !== id))

    return (
        <div className="clock-control">
            <ClockForm setList={setList}/>
            <ClockList times={list} onDelete={onDelete}/>
        </div>
    )
}