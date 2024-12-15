export async function getMessageById(id: number): Promise<Message[]> {
    const request = await fetch(`http://localhost:7070/messages?from=${id}`, {
        method: 'GET'
    })
    const data = await request.json()
    return data
}