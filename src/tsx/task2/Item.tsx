import { delReguest } from "./reguests/requests"

export function Item({id, text, fetchGetReguest}: {id: number, text: string, fetchGetReguest: () => Promise<void>}) {
    const onClick = async (id: number) => {
        try {
            await delReguest(id)
            fetchGetReguest()
        } catch (error) {
            console.error('Ошибка при отправки данныъ', error)
        }
    }
    return (
        <div className="item">
            <button onClick={() => onClick(id)} className="item-close"></button>
            <p className="item-text">{text}</p>
        </div>
    )
}
