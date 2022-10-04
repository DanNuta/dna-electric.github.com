import React, { PropsWithChildren } from "react";
import { Button } from "./VButton.model";

type Props = {
  toggle?: (e: Event) => void;
  style?: string;
  padding?: string,
  color?: string
  

};

export const VButtonView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <Button color={props.color} padding={props.padding} bg={props.style} onClick={props.toggle}>
      {props.children}
    </Button>
  );
};
