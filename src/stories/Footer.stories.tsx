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
        ref: "https://eos.atomichub.io/explorer/collection/genesis.eden",
        target: "_blank",
        text: "Eden NFTs",
      },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      {
        underline: "none",
        ref: "https://www.notion.so/Eden-Peace-Treaty-5b15633ca09c4c6495a5b60f7bc92db2",
        target: "_blank",
        text: "Eden Peace Treaty",
      },
      {
        underline: "none",
        ref: "https://edeneos.org/",
        target: "_blank",
        text: "Eden on EOS",
      },
      {
        underline: "none",
        ref: "https://www.notion.so/Eden-d1446453c66c4919b110dfdce20dc56f",
        target: "_blank",
        text: "Eden Public Wiki",
      },
      {
        underline: "none",
        ref: "https://www.notion.so/EdenOS-Roadmap-7d75dbcf386c436c9c1738b7a3eea8f2",
        target: "_blank",
        text: "EdenOS Roadmap",
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
