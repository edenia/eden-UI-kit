import React from "react";
import { Story } from "@storybook/react";

import { Sidebar, ISidebar } from "../components/Sidebar";
import { MenuOption } from "../components/MenuOption";
import { PreviewProfile } from "../components/PreviewProfile";

export default {
  title: "Sidebar",
  component: Sidebar,
};

const sideBarItems = [
  {
    text: "Income",
    icon: "https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyes-voting-icon.07915c6b.png&w=32&q=75",
    isSelected: true,
  },
  {
    text: "Expense",
    icon: "https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyes-voting-icon.07915c6b.png&w=32&q=75",
    isSelected: false,
  },
  {
    text: "Delegate",
    icon: "https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyes-voting-icon.07915c6b.png&w=32&q=75",
    isSelected: false,
  },
];

const Template: Story<ISidebar> = (args) => <Sidebar {...args} />;

export const SidebarItem = Template.bind({});
SidebarItem.args = {
  open: true,
  logo: "https://eden.edenia.cloud/images/eden-logo.svg",
  menuOptions: (
    <div style={{ paddingTop: "16px" }}>
      {sideBarItems.map((data) => (
        <div key={data.text} style={{ marginTop: "4px" }}>
          <a href="google.com">
            <MenuOption
              text={data.text}
              icon={data.icon}
              isSelected={data.isSelected}
            />
          </a>
        </div>
      ))}
    </div>
  ),
  profileComponent: (
    <PreviewProfile
      name="Teto Gómez"
      nameSize="12px"
      nameFontWeight={600}
      image="https://ipfs.io/ipfs/QmY6ULVZXamCEuX9qxJPJrKYppLB4jCGBZCfLSzrJrBQ7x"
      selectableItems={
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <a
              href="https://genesis.eden.eoscommunity.org/members/tetogomezeos"
              rel="noreferrer"
            >
              @ tetogomezeos
            </a>
          </span>
        </div>
      }
    />
  ),
};
