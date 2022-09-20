import React, { PropsWithChildren } from "react";
import { Button } from "./VButton.model";

type Props = {
  toggle?: () => void;
  style?: string;
};

export const VButtonView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Button bg={props.style} onClick={props.toggle}>
      {props.children}
    </Button>
  );
};
