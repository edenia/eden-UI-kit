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

const imgUrl = "https://eoscostarica.io/img/eoscr-logo-256.png";
const defaultImg =
  "https://edenia.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogos%2Fedenia-isotipo.a4a15009bb5465f508144c4200b470a3.svg&w=640&q=75";
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
  bgColor: "#fff",
  isSelected: false,
  name: "costaricaeos",
  rankValue: "89",
  proxyScore: "22",
  eosrateValue: "95",
  imgChild: (
    <img
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        margin: "auto",
        objectFit: "cover",
      }}
      alt="img Loaded"
      src={imgUrl || defaultImg}
      onError={(event) => {
        event.currentTarget.src = defaultImg;
      }}
    />
  ),
  positionText: "9,200,750 Votes",
  selectableItems: (
    <div
      style={{
        display: "flex",
      }}
    >
      {selectableItems.map((item, index) => (
        <span
          style={{
            fontSize: "12px",
          }}
        >
          {index !== 0 && "·"}
          <a rel="noreferrer" href={item.link} target="_blank">
            {item.label}
          </a>
        </span>
      ))}
    </div>
  ),
};
