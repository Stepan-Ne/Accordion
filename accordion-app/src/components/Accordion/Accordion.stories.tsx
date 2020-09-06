import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
};
const callback = action("accordion mode change event fired");
const callbackItem = action("item was clicked");

export const MenuCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true} items={[]}
                                              onChange={callback} onClickItem={callbackItem}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false}
                                                     items={[{title: "on", value: 1},
                                                         {title: "click", value: 2}, {title: "handler", value: 3}]}
                                                     onChange={callback} onClickItem={callbackItem}/>

export const MadeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: "on", value: 1},
                          {title: "click", value: 2},
                          {title: "handler", value: 3}
                      ]}
                      onClickItem={(id) => alert(`it is ${id}`)}/>
}
