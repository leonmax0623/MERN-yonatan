import { Fragment } from "react";
import { FooterTwo } from "../Footer";
import { HeaderEight } from "../Header";

const LayoutSeven = ({ children }) => {
  return (
    <Fragment>
      <HeaderEight />
      {children}
      <FooterTwo />
    </Fragment>
  );
};

export default LayoutSeven;
