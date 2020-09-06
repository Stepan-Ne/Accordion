import React from "react";
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