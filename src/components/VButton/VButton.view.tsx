import React, { PropsWithChildren } from "react";
import * as Styled from "./VButton.model";

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
    <Styled.Button 
                    color={props.color} 
                    padding={props.padding} 
                    bg={props.style} 
                    onClick={props.toggle}
                    >
      {props.children}
    </Styled.Button>
  );
};
