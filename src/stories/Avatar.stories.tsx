import React from "react";
import { Story } from "@storybook/react";

import { Avatar, IAvatar } from "../components/Avatar";

export default {
  title: "Avatar Item",
  component: Avatar,
};

const imgUrl =
  "https://ipfs.io/ipfs/QmYTvKtCQhNJvQWXSVWaGsV4Q1nrNJTbmQ8WoJfZC5aaba";

const defaultImg =
  "https://edenia.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogos%2Fedenia-isotipo.a4a15009bb5465f508144c4200b470a3.svg&w=640&q=75";

const Template: Story<IAvatar> = (args) => <Avatar {...args} />;

export const AvatarItem = Template.bind({});
AvatarItem.args = {
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
};
