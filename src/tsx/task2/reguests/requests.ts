export async function getReguest(): Promise<Item[]> {
    const result = await fetch('https://react-lifcyclehttp-backend.onrender.com/notes', {
        method: 'GET'
    }).then(response => response.json())
    return result
}

export async function postReguest(value: {text: string}): Promise<void> {
    fetch('https://react-lifcyclehttp-backend.onrender.com/notes', {
        method: 'POST',
        body: JSON.stringify(value)
    })
}

export async function delReguest(id: number): Promise<void> {
    fetch(`https://react-lifcyclehttp-backend.onrender.com/notes/${id}`, {
        method: 'DELETE'
    })
}