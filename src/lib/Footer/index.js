import React from "react";
import PropTypes from "prop-types";

const Footer = ({
  socialMediaItems,
  buttomContent,
  itemsFooter,
  bgColor,
  color,
}) => {
  return (
    <div className="footer-container" style={{ backgroundColor: bgColor }}>
      <div className="footer-items-container">
        <div className="flex">
          {itemsFooter.map((item) => (
            <div
              key={item?.title}
              style={{ color: color }}
              className="footer-item-container"
            >
              <span className="footer-item-title">{item?.title}</span>
              {item?.links?.map((link) => (
                <a
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
        <div className="flex footer-social-media-container">
          {socialMediaItems.map((item) => (
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
      </div>
      <div className="footer-buttom-component">{buttomContent}</div>
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
