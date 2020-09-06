import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Accordion',
  component: Accordion,
};
const callback = action("accordion mode change event fired");

export const MenuCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} />
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} />

export const MadeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} />
}
