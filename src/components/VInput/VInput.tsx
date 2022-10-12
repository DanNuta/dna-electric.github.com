import React, {PropsWithChildren} from "react";
import {VImputView} from "./VImport.view";
import {StateFormModel} from "../../models/stateForm.model";


type Props = {
    label: string,
    type: string,
    placeholder: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    nameState: StateFormModel,
  
}

export const VImput: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return <VImputView type={props.type}
                       placeholder={props.placeholder} 
                       onChange={props.onChange} 
                       label={props.label}
                       nameState={props.nameState} >
             {props.children}
         </VImputView>
}