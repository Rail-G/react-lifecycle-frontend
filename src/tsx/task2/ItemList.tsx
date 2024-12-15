import { Item } from "./Item";

export function ItemList({items, fetchGetReguest}: {items: Item[], fetchGetReguest: () => Promise<void>}) {

    return(
        <div className="items-block">
            <ul>
                {items.map(el => (
                    <li key={el.id}>
                        <Item id={el.id} text={el.text} fetchGetReguest={fetchGetReguest}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}