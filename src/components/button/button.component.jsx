import React from "react";

import { CustomButtonContainer } from "./button.styles";

const Button = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    <span>{children}</span>
  </CustomButtonContainer>
);

export default Button;
