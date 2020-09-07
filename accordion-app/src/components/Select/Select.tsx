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

    function findElem(items: ItemType[], value: any) {
        let x = items.find(i => i.title === value);
        if(x) {
            return x.title;
        }
    }
    return (
        <div>
            <div onClick={() => setCollapsed(!collapsed)}className={s.title}>
                {findElem(props.items, props.value)}
            </div>
            {collapsed && props.items.map(i => <div
                key={i.value} className={s.list}
                onClick={() => props.onChange(i.value)}>{i.title}</div>)}
        </div>
    )
}