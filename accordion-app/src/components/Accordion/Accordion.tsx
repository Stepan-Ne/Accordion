import React from "react";

type ItemsType = {
    title: string
    value: number
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemsType>
    onClickItem: (value: number) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClickItem={props.onClickItem}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>-- {props.title} --</h3>
    )
}

type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClickItem: (value: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item, index) => <li key={index}
                                                  onClick={() => props.onClickItem(item.value)}>
                {item.title}</li>)}
        </ul>
    )
}