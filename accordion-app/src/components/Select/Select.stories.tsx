import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title:"Select",
    component: Select,
}

export const BaseExample = () => {
    return <Select value={"1"} onChange={action("div was clicked")}
                   items={[
                       {title: "Moscow", value: "1"},
                       {title: "Kiev", value: "2"},
                       {title: "Minsk", value: "3"}
                       ]}/>
};

export const WithValue = () => {
    const [title, setTitle] = useState<"1" | "2" | "3">("1");
    function onChangeHandler(value: string) {
        switch (value) {
            case "1":
                setTitle("1");
                break;
            case "2":
                setTitle("2");
                break;
            case "3":
                setTitle("3");
                break;
        }
    }

    return <Select value={title} onChange={onChangeHandler}
                   items={[
                       {title: "Moscow", value: "1"},
                       {title: "Kiev", value: "2"},
                       {title: "Minsk", value: "3"}
                   ]}/>
};

export const WithoutValue = () => {
    const [title, setTitle] = useState<null | "1" | "2" | "3">(null);
    function onChangeHandler(value: any) {
        switch (value) {
            case "1":
                setTitle("1");
                break;
            case "2":
                setTitle("2");
                break;
            case "3":
                setTitle("3");
                break;
        }
    }

    return <Select value={title} onChange={onChangeHandler}
                   items={[
                       {title: "Moscow", value: "1"},
                       {title: "Kiev", value: "2"},
                       {title: "Minsk", value: "3"}
                   ]}/>
};