import React from "react";
import {createPortal} from "react-dom";

const PortalModalCategories = ({children}) => {
    return createPortal(
        <div className="container-portal-categories">
            {children}
        </div>,
        document.getElementById("category")
    );
}
 
export default PortalModalCategories;