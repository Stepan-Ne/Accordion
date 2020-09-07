import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title:"Select",
    component: Select,
}

export const UncollapsedSelect = () => {
    return <Select value={"handler"} onChange={action("div was clicked")}
                   items={[
                       {title: "on", value: 1},
                       {title: "click", value: 2},
                       {title: "handler", value: 3}
                       ]}/>
}

export const WorkingSelect = () => {
    const [title, setTitle] = useState<"on" | "click" | "handler">("on");
    function onChangeHandler(value: any) {
        if (value === 1) {
            setTitle("on");
        } else if (value === 2) {
            setTitle("click");
        } else if (value === 3) {
            setTitle("handler");
        }
    }

    return <Select value={title} onChange={onChangeHandler}
                   items={[
                       {title: "on", value: 1},
                       {title: "click", value: 2},
                       {title: "handler", value: 3}
                   ]}/>
}