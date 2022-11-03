import React from "react";
import { Story } from "@storybook/react";

import { PreviewProfile, IPreviewProfile } from "../components/PreviewProfile";

export default {
  title: "PreviewProfile",
  component: PreviewProfile,
};

const icon = "https://proxy.eden.eoscommunity.org/icons/chiefdelegate-icon.png";
const imgUrl =
  "https://infura-ipfs.io/ipfs/QmaUJx4xzV65rQwyikf7jQ1mwVHT1eVotyrJqshZb1coNp";
const linkUrl = "https://genesis.eden.eoscommunity.org/members/xavieredenia";

const Template: Story<IPreviewProfile> = (args) => <PreviewProfile {...args} />;

export const PreviewProfileItem = Template.bind({});
PreviewProfileItem.args = {
  icon,
  name: "Xavier Fernandez",
  image: imgUrl,
  bgColor: "#fff",
  profileLink: linkUrl,
  targetProfile: "_blank",
  selectableItems: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>
        <a
          href="https://genesis.eden.eoscommunity.org/members/xavieredenia"
          rel="noreferrer"
        >
          @ xavieredenia
        </a>
      </span>
    </div>
  ),
};
