import React from "react";
import styles from './LoginControlds.module.css'


export const ComponentArea = (Component) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <div className={hasError ? styles.error : ""}>
                <Component {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </>
    )
}

