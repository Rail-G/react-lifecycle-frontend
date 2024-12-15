export function ChatMessage({message, userId}: {message: Message, userId: string}) {
    return (
        <div className={`message ${message.userId == userId ? 'my-message' : '' }`}>
            <div className="message-text">{message.content}</div>
        </div>
    )
}