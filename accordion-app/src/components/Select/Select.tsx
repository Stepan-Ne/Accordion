import React, {useState} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [hoverElement, setHoverElemen] = useState("");
    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItems = () => setCollapsed(!collapsed);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    };
    const hoveredItem = (value: any) => {
            setHoverElemen(value);
    }

    return (
        <div>
            <div onClick={toggleItems} className={s.title}>
                <b>{selectedItem && selectedItem.title}</b>
            </div>
            {collapsed && <div className={s.list}>
                {props.items.map(i => <div key={i.value}
                                           onMouseEnter={() => hoveredItem(i.value)}
                                           className={s.item + " " + (hoverElement === i.value ? s.selectedItem : "")}
                                           onClick={() => onItemClick(i.value)}>{i.title}</div>)}
            </div>}
        </div>
    )
}