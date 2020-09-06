import React from "react";

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

    function findElem(items: ItemType[], value: any) {
        let x = items.find(i => i.title === value);
        if(x) {
            return x.title;
        }
    }
    return (
        <div>
            <div>
                {findElem(props.items, props.value)}
            </div>
            {props.items.map(i => <div key={i.value} onClick={() => props.onChange(i.value)}>{i.title}</div>)}
        </div>
    )
}