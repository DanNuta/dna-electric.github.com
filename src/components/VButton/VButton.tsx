import React, { useState } from "react";
import { VButtonView } from "./VButton.view";

type Props = {
  onClick?: () => void;
  bg?: string;
  padding?: string,
  color?: string
  
};


export const VButton: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {

  return (
    <VButtonView color={props.color} padding={props.padding} style={props.bg} onClick={props.onClick}>
      {props.children}
    </VButtonView>
  );
};
