import React from 'react'
import hikingThruLifeLogo from '../../assets/images/hiking-thru-life-logo.png'
import classes from './Logo.module.css'

const logo = () => (
    <div className={classes.Logo}>
        <img alt="/" src={hikingThruLifeLogo} />
        <span>Hiking Thru Life</span>
    </div>
);

export default logo
