import React from "react";
import { Story } from "@storybook/react";

import { Card, ICard } from "../components/Card";
import { PreviewProfile } from "../components/PreviewProfile";

export default {
  title: "Card",
  component: Card,
};

const Template: Story<ICard> = (args) => <Card {...args} />;

export const CardItem = Template.bind({});
CardItem.args = {
  width: "31%",
  headerContent: (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <PreviewProfile
          name="Angelo Castro"
          image="https://ipfs.io/ipfs/QmTtNjGtD9mi5pmq28mcMQSTrUES9XYVV29KNM7RPPDPMP"
          bgColor="#E5E5E5"
          nameSize="20px"
          nameColor="#000000"
          nameFontWeight={600}
          selectableItems="@twtrHandle"
        />
      </div>
    </div>
  ),
  bobyContent: (
    <span>
      Duis id arcu fringilla, vulputate nulla eget, lobortis nisi. Cras quis
      feugiat lectus. Donec vestibulum et dolor a vestibulum. In interdum, ex
      nec porttitor consequat, nulla tell #eosproxy
    </span>
  ),
  footerContent: (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <span>12:15 PM · May 19, 2009 · </span>
      <a href="google.com" rel="noreferrer">
        <span> Twitter for iPhone</span>
      </a>
    </div>
  ),
};
