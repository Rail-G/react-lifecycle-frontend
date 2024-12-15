import { useState } from "react"
import { postReguest } from "./reguests/requests"

export function SomethingForm({fetchGetReguest}: {fetchGetReguest: () => Promise<void>}) {
    const [value, setValues] = useState<{text: string}>({text: ''})

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValues(prev => ({...prev, text: e.target.value}))

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await postReguest(value).then(() => fetchGetReguest())
            setValues({text: ''})
        } catch (error) {
            console.error('Ошибка при отправки данныъ', error)
        }
    }

    const onCLick = () => fetchGetReguest()
    return (
        <form onSubmit={onSubmit} className="sform-block" noValidate>
            <div className="sform-head">
                <span className="sform-title">Note</span>
                <button type="button" onClick={onCLick} className="sform-update"></button>
            </div>
            <textarea className="sform-input" value={value.text} onChange={onChange} />
            <button className="sform-submit"></button>
        </form>
    )
}
