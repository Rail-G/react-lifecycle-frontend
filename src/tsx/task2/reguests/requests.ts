export async function getReguest(): Promise<Item[]> {
    const result = await fetch('http://localhost:7070/notes', {
        method: 'GET'
    }).then(response => response.json())
    return result
}

export async function postReguest(value: {text: string}): Promise<void> {
    fetch('http://localhost:7070/notes', {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

export async function delReguest(id: number): Promise<void> {
    fetch(`http://localhost:7070/notes/${id}`, {
        method: 'DELETE'
    })
}