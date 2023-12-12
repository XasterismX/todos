import React from 'react';
import cl from "./MyBtn.module.css"
const MyBtn = ({children, ...props}) => {
    return (
        <button {...props} className={cl.btn}>
            {children}
        </button>
    );
};

export default MyBtn;