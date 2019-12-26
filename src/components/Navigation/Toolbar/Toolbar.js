import React from 'react'
import classes from './Toolbar.module.css'
import Logo from "../../Logo/Logo";

const toolbar = () => (
    <header  className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
    </header>
);

export default toolbar
