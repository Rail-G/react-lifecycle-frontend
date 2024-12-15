import { useEffect, useRef, useState } from "react"
import {v4 as uuid} from 'uuid'
import { getSerResponse } from "./utils/serverRespones"
import { ChatList } from "./ChatList"
import { ChatForm } from "./ChatForm"

export function Chat() {
    const [messages, setMessage] = useState<Message[]>([])
    const [messageId, setMessageId] = useState(0)
    const [userId, setUserId] = useState('')
    const ref = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        const currUserId = sessionStorage.getItem('userId')
        if (currUserId !== null) {
            setUserId(currUserId)
        } else {
            const newUserId = uuid()
            sessionStorage.setItem('userId', newUserId)
            setUserId(newUserId)
        }
        getSerResponse(0, setMessageId, setMessage)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            getSerResponse(messageId, setMessageId, setMessage)
        }, 5000)
        if (ref.current !== null) {
            ref.current.scrollTop = ref.current.scrollHeight
        }
        return () => {
            clearInterval(interval)
        }
    }, [messageId])
    return (
        <div className="chat-window">
            <ChatList messages={messages} userId={userId} refer={ref}/>
            <ChatForm userId={userId} messageId={messageId} getResponse={(messageId) => getSerResponse(messageId, setMessageId, setMessage)}/>
        </div>
    )
}