import React from "react";
import { Story } from "@storybook/react";

import { DelegateItem, IDelegateItem } from "../components/DelegateItem";

export default {
  title: "Delegate Item",
  component: DelegateItem,
};

const icon =
  "https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyes-voting-icon.07915c6b.png&w=32&q=75";
const imgUrl =
  "https://infura-ipfs.io/ipfs/QmaUJx4xzV65rQwyikf7jQ1mwVHT1eVotyrJqshZb1coNp";

const Template: Story<IDelegateItem> = (args) => <DelegateItem {...args} />;

export const DelegatesItem = Template.bind({});
DelegatesItem.args = {
  text: "Voted for 18",
  name: "Xavier Fernandez",
  bgColor: "#fff",
  target: "_blank",
  image: imgUrl,
  link: `https://bloks.io/account/edensmartprx?loadContract=true&tab=Tables&table=votes&account=edensmartprx&scope=edensmartprx&limit=1&lower_bound=xavieredenia&upper_bound=xavieredenia`,
  avatarIcon:
    "https://proxy.eden.eoscommunity.org/icons/chiefdelegate-icon.png",
  headItem: <img src={icon} />,
  linkIcon: "https://proxy.eden.eoscommunity.org/icons/ref-icon.png",
  profileLink: "https://genesis.eden.eoscommunity.org/members/xavieredenia",
  targetProfile: "_blank",
  positionText: "Chief Delegate - Vote Weight: 16",
};
