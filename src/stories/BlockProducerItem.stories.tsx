import React from "react";
import { Story } from "@storybook/react";

import {
  BlockProducerItem,
  IBlockProducerItem,
} from "../components/BlockProducerItem";

export default {
  title: "Block Producer Item",
  component: BlockProducerItem,
};

const selectableItems = [
  { label: "Telegram", link: "google.com" },
  { label: "Twitter", link: "google.com" },
  { label: "Website", link: "google.com" },
  { label: "Email", link: "google.com" },
  { label: "Interview", link: "google.com" },
];

const Template: Story<IBlockProducerItem> = (args) => (
  <BlockProducerItem {...args} />
);

export const BPItem = Template.bind({});
BPItem.args = {
  onClick: () => {},
  isSelected: false,
  name: "Teto Gómez",
  rankValue: "89",
  proxyScore: "22",
  eosrateValue: "95",
  // image: "https://ipfs.io/ipfs/QmTtNjGtD9mi5pmq28mcMQSTrUES9XYVV29KNM7RPPDPMP",
  positionText: "9,200,750 Votes",
  selectableItems: (
    <div
      style={{
        border: "2px solid red",
        paddingTop: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {selectableItems.map((item, index) => (
        <span>
          {index !== 0 && "·"}
          <a rel="noreferrer" href={item.link} target="_blank">
            {item.label}
          </a>
        </span>
      ))}
    </div>
  ),
};
