import React, { useState } from "react"

export function ChatForm({userId, messageId, getResponse}: {userId: string, messageId: number, getResponse: (messageId: number) => Promise<void>}) {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await fetch(' http://localhost:7070/messages', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "id": messageId + 1,
                    "userId": userId,
                    "content": value
                }
            )
            })
            getResponse(messageId)
        } catch (error) {
            console.error('Ошибка отправки данных', error)
        } finally {
            setLoading(false)
            setValue('')
        }
    }
    return (
        <div className={`message-input ${loading ? `loading` : ''}`}>
            {loading ? <span className="loading-text">Загрузка...</span> : ''}
            <form onSubmit={!loading ? onSubmit : (e) => {e.preventDefault()}}>
                <input type="text" value={value} onChange={onChange} id="message" placeholder="Enter your message"/>
            </form>
        </div>
    )
}