import React, { useState } from "react"
import {v4 as uuidv4} from "uuid"
export function ClockForm({setList}: {setList: React.Dispatch<React.SetStateAction<Clock[]>>}) {
    const [formValue, setFormValue] = useState({name: '', timeZone: ''})

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newClock = {...formValue, id: uuidv4()}
        setList((prev) => [...prev, newClock])
        setFormValue({name: '', timeZone: ''})
    }

    return (
        <form className="clock-form" onSubmit={onSubmit} noValidate>
            <div className="form-block">
                <span className="form-title">Название</span>
                <input className="form-input" value={formValue.name} name="name" type="text" onChange={onChange}/>
            </div>
            <div className="form-block">
                <span className="form-title">Временная зона</span>
                <input className="form-input" value={formValue.timeZone} name="timeZone" type="text" onChange={onChange} />
            </div>
            <button className="form-submit">Добавить</button>
        </form>
    )
}