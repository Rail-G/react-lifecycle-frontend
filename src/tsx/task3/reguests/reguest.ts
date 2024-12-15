export async function getMessageById(id: number): Promise<Message[]> {
    const request = await fetch(`https://react-lifcyclehttp-backend.onrender.com/messages?from=${id}`, {
        method: 'GET'
    })
    const data = await request.json()
    return data
}