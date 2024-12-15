import { ChatMessage } from "./ChatMessage";

export function ChatList({messages, userId, refer}: {messages: Message[], userId: string, refer: React.MutableRefObject<HTMLDivElement | null>}) {
    return (
        <div ref={refer} className="messages">
            <ul>
                {messages.map(el => (
                    <li key={el.id}>
                        <ChatMessage message={el} userId={userId}/>
                    </li>
                ))}
            </ul>
        </div>
            
    )
}