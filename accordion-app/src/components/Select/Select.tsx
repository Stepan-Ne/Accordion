import React, {useState} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: string
}
type SelectPropsType = {
    value: string
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItems = () => setCollapsed(!collapsed);

    return (
        <div>
            <div onClick={toggleItems} className={s.title}>
                <b>{selectedItem && selectedItem.title}</b>
            </div>
            {collapsed && <div className={s.list}>
                {props.items.map(i => <div key={i.value} className={s.item}
                                           onClick={() => props.onChange(i.value)}>{i.title}</div>)}
            </div>}
        </div>

    )
}