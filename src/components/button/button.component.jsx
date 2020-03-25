import React from "react";

import { CustomButtonContainer } from "./button.styles";

const Button = ({ children, preis, ...props }) => (
  <CustomButtonContainer {...props}>
    <span>{children}</span>
  </CustomButtonContainer>
);

export default Button;
