import React from "react";

export interface IFooter {
  color?: string;
  bgColor?: string;
  itemsFooter: Array<any>;
  buttomContent?: React.ReactNode;
  socialMediaItems?: Array<any>;
}

export const Footer: React.FC<IFooter> = ({
  socialMediaItems,
  buttomContent,
  itemsFooter,
  bgColor,
  color,
}) => (
  <div className="footer-container" style={{ backgroundColor: bgColor }}>
    <div className="footer-items-container">
      <div className="flex">
        {itemsFooter?.map((item) => (
          <div
            key={item?.title}
            style={{ color: color }}
            className="footer-item-container"
          >
            <span className="footer-item-title">{item?.title}</span>
            {item?.links?.map((link: any) => (
              <a
                className="footer-item-style"
                style={{ color: color, textDecoration: link?.underline }}
                href={link?.ref}
                rel="noreferrer"
                target={link?.target}
              >
                {link?.text}
              </a>
            ))}
          </div>
        ))}
      </div>
      {socialMediaItems && (
        <div className="flex footer-social-media-container">
          {socialMediaItems?.map((item) => (
            <a
              key={item?.name}
              href={item?.ref}
              target="_blank"
              rel="noreferrer"
              className="footer-paddding-social-media-icons"
            >
              <img src={item?.image} alt={item?.name} width="24px" />
            </a>
          ))}
        </div>
      )}
    </div>
    <div className="footer-buttom-component">{buttomContent}</div>
  </div>
);
