import {ERROR} from "../data/constant/messages";
import React from "react";

export default function useFormTemplate(
    fields : string [] ,
    fieldDispatchers : Function [],
    onSubmit : () => void
) : JSX.Element {
    if( !isValidFormTemplate(fields,fieldDispatchers) ){
        throw Error( ERROR.INVALID_FORM_TEMPLATE );
    }
    return (
        <h1>Hello</h1>
    )
}

function isValidFormTemplate(
    fields : string [],
    fieldDispatchers : Function []
){
    return fields.length == fieldDispatchers.length;
}