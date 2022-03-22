import { Fragment } from "react";
import { FooterHome } from "../Footer";
import { HeaderHome } from "../Header";

const LayoutHome = ({ children }) => {
  return (
    <Fragment>
      <HeaderHome />
      {children}
      <FooterHome />
    </Fragment>
  );
};

export default LayoutHome;
