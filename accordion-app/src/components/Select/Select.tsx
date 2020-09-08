import React, {useState, KeyboardEvent} from "react";
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
    const [hoverElement, setHoverElemen] = useState<"" | "1" | "2" | "3">("1");
    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItems = () => setCollapsed(!collapsed);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    };
    const hoveredItem = (value: any) => {
            setHoverElemen(value);
    };
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === "Escape") {
            setCollapsed(false);
        }
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (hoverElement === props.items[i].value) {
                    const pretendent = e.key === "ArrowDown"
                        ? props.items[i+1]
                        : props.items[i-1];
                    if (pretendent) {
                        setHoverElemen(pretendent.value);
                        props.onChange(pretendent.value);
                        break;
                      }

                    }
                }
            }
        };

    return (
        <div>
            <div onClick={toggleItems} className={s.title} tabIndex={0} onKeyUp={onKeyUp}>
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