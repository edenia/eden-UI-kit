import React from "react";

export interface IBodyCard {
  content: React.ReactNode;
}

export const BodyCard: React.FC<IBodyCard> = ({ content }) => (
  <div className="card-body">{content}</div>
);
