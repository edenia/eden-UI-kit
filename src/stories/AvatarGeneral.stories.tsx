import React from "react";
import { Story } from "@storybook/react";

import {
  AvatarGeneralInfo,
  IAvatarGeneralInfo,
} from "../components/AvatarGeneralInfo";

export default {
  title: "Avatar General Info",
  component: AvatarGeneralInfo,
};

const Template: Story<IAvatarGeneralInfo> = (args) => (
  <AvatarGeneralInfo {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  name: "Test Avatar",
  positionText: "left",
  nameSize: "20",
  nameColor: "red",
  nameFontWeight: 20,
};
