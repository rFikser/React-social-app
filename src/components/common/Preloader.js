import React from "react";
import s from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={s.ldsCircle}>
            <div></div>
        </div>
    )
}

export default Preloader;