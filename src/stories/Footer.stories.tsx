import React from "react";
import { Story } from "@storybook/react";

import { Footer, IFooter } from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
};

const socialMediaItems = [
  {
    name: "Twitter",
    ref: "https://twitter.com/edensmartproxy",
    image: "https://proxy.eden.eoscommunity.org/icons/twitter-white-icon.png",
  },
  {
    name: "GitHub",
    ref: "https://github.com/edenia/eden-smart-proxy",
    image: "https://proxy.eden.eoscommunity.org/icons/github-icon.png",
  },
  {
    name: "Telegram",
    ref: "https://t.me/edensmartproxy",
    image: "https://proxy.eden.eoscommunity.org/icons/telegram-icon.png",
  },
];

const footerItems = [
  {
    title: "EDEN",
    links: [
      {
        underline: "none",
        ref: "https://genesis.eden.eoscommunity.org/members",
        target: "_blank",
        text: "The Community",
      },
      {
        underline: "none",
        ref: "https://genesis.eden.eoscommunity.org/induction",
        target: "_blank",
        text: "Membership Dashboard",
      },
      {
        underline: "none",
        ref: "https://www.notion.so/Getting-an-Invite-2d38947d5be94dcb84dfa1ae48894802",
        target: "_blank",
        text: "Get an Invite",
      },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      {
        underline: "none",
        ref: "https://www.edenelections.com/",
        target: "_blank",
        text: "Eden Election Process",
      },
      {
        underline: "none",
        ref: "https://github.com/edenia/Eden",
        target: "_blank",
        text: "EdenOS Github Repo",
      },
    ],
  },
];

const Template: Story<IFooter> = (args) => <Footer {...args} />;

export const FooterItemDark = Template.bind({});
FooterItemDark.args = {
  socialMediaItems: socialMediaItems,
  buttomContent: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ display: "flex", color: "rgb(172, 172, 172)" }}>
        A Community Owned Public Good{" "}
        <a
          target="_blank"
          href="https://edenia.com"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgb(172, 172, 172)",
          }}
        >
          <div style={{ padding: "0 4px 0 8px", display: "flex" }}>
            <img src="https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fedenia-isotipo-grey.b3148c10.png&w=32&q=75" />
          </div>
          Developed by Edenia
        </a>
      </span>
    </div>
  ),
  itemsFooter: footerItems,
  bgColor: "#343434",
  color: "#FFFFFF",
};

export const FooterItemLight = Template.bind({});
FooterItemLight.args = {
  buttomContent: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ display: "flex", color: "rgb(172, 172, 172)" }}>
        A Community Owned Public Good
        <a
          target="_blank"
          href="https://edenia.com"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgb(172, 172, 172)",
          }}
        >
          <div style={{ padding: "0 4px 0 8px", display: "flex" }}>
            <img src="https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fedenia-isotipo-grey.b3148c10.png&w=32&q=75" />
          </div>
          Developed by Edenia
        </a>
      </span>
    </div>
  ),
  itemsFooter: footerItems,
  bgColor: "#FFFFFF",
  color: "#262626",
};
