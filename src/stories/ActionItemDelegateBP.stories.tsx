import React from "react";
import { Story } from "@storybook/react";

import {
  ActionItemDelegateBP,
  IActionItemDelegateBP,
} from "../components/ActionItemDelegateBP";

export default {
  title: "ActionItemDelegateBP",
  component: ActionItemDelegateBP,
};

const icon =
  "https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyes-voting-icon.07915c6b.png&w=32&q=75";

const Template: Story<IActionItemDelegateBP> = (args) => (
  <ActionItemDelegateBP {...args} />
);

export const ActionItemDelegateBPItem = Template.bind({});
ActionItemDelegateBPItem.args = {
  headItem: <img src={icon} />,
  text: "Voted for 18",
  icon: "https://proxy.eden.eoscommunity.org/icons/ref-icon.png",
  link: "https://bloks.io/account/edensmartprx?loadContract=true&tab=Tables&table=votes&account=edensmartprx&scope=edensmartprx&limit=1&lower_bound=xavieredenia&upper_bound=xavieredenia",
  target: "blank",
};
