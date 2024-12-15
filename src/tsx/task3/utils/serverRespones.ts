import React from "react";
import { getMessageById } from "../reguests/reguest";

export async function getSerResponse(
    messageId: number,
    setMessageId: React.Dispatch<React.SetStateAction<number>>,
    setMessage: React.Dispatch<React.SetStateAction<Message[]>>) {
    try {
        const response = await getMessageById(messageId)
        if (response.length) {
            const lastMsg = response[response.length - 1]
            const id = lastMsg.id
            if (messageId != id) {
                console.log(messageId, id)
                setMessageId(id)
                setMessage(prev => ([...prev, lastMsg]))
            }
        }
    } catch (error) {
        console.error('Ошибка получения данных', error)
    }
}