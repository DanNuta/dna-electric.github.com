import React, { useState } from "react";
import { VButtonView } from "./VButton.view";

type Props = {
  onClick?: () => void;
  bg?: string;
};

export const VButton: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) =>{
    const [toggleState, setToggleState] = useState<boolean>(false);

  const toggleBtnFn = () => {
    console.log("click")
  };

  return (
    <VButtonView style={props.bg}  toggle={toggleBtnFn}>
      {props.children}
    </VButtonView>
  );
};
