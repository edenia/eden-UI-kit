import React from "react";
import PropTypes from "prop-types";

const Footer = ({
  itemsFooter,
  socialMediaItems,
  bgColor,
  color,
  buttomContent,
}) => {
  return (
    <div style={{ backgroundColor: bgColor, padding: "32px 16px 24px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          {itemsFooter.map((item) => (
            <div
              key={item?.title}
              style={{ display: "grid", paddingRight: "48px", color: color }}
            >
              <span>{item?.title}</span>
              {item?.links?.map((link) => (
                <a
                  style={{ color: color }}
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
        <div style={{ display: "flex" }}>
          {socialMediaItems.map((item) => (
            <a
              key={item?.name}
              href={item?.ref}
              target="_blank"
              rel="noreferrer"
              style={{ paddingRight: "24px" }}
            >
              <img src={item?.image} alt={item?.name} width="24px" />
            </a>
          ))}
        </div>
      </div>
      <div>{buttomContent}</div>
    </div>
  );
};

Footer.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  itemsFooter: PropTypes.array,
  buttomContent: PropTypes.node,
  socialMediaItems: PropTypes.array,
};

export default Footer;
