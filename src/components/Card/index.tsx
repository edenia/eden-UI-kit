import React from "react";

import { BodyCard } from "../BodyCard";
import { HeaderFooterCard } from "../HeaderFooterCard";

export interface ICard {
  height: string;
  width: string;
  bobyContent: React.ReactNode;
  headerContent: React.ReactNode;
  footerContent: React.ReactNode;
}

export const Card: React.FC<ICard> = ({
  headerContent,
  bobyContent,
  footerContent,
  width,
  height,
}) => (
  <div className="card-container" style={{ width: width, height: height }}>
    <HeaderFooterCard content={headerContent} />
    <BodyCard content={bobyContent} />
    <HeaderFooterCard content={footerContent} />
  </div>
);
