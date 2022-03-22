import { Fragment } from "react";
import { FooterHome } from "../Footer";
import { HeaderAbout } from "../Header";

const LayoutAbout = ({ children }) => {
  return (
    <Fragment>
      <HeaderAbout />
      {children}
      <FooterHome />
    </Fragment>
  );
};

export default LayoutAbout;
