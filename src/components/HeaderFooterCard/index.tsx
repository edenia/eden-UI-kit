import React from "react";

export interface IHeaderFooterCard {
  content: React.ReactNode;
}

export const HeaderFooterCard: React.FC<IHeaderFooterCard> = ({ content }) => (
  <div className="card-header-footer">{content}</div>
);
