import { useEffect, useState } from "react"
import { getReguest } from "./reguests/requests"
import { SomethingForm } from "./SomethingForm"
import { ItemList } from "./ItemList"

export function Something() {
    const [items, setItems] = useState<Item[]>([])

    const fetchGetReguest = async () => {
        try {
            await getReguest().then(result => setItems(result))
        } catch (error) {
            console.error('Ошибка при отправке запроса', error)
        }
    }

    useEffect(() => {  
        fetchGetReguest()
    }, [])

    return(
        <div className="item-block">
            <SomethingForm fetchGetReguest={fetchGetReguest} />
            <ItemList items={items} fetchGetReguest={fetchGetReguest}/>
        </div>
    )
}