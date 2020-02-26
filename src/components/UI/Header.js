import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.svg';

const useStyles = makeStyles (theme  => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '4em'
    },
    logo: {
        height: '7em'
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    }
})

)

export default function Header(props) {

    const classes = useStyles()
    const [value, setValue] = useState (1);
    const handleChange = (e, value) => {
        setValue (value)
    }
    
    return (
        <React.Fragment>
        <AppBar position="fixed">
        <Toolbar disableGutters>
        
         <img alt = "company logo" className= {classes.logo} src = {logo}/>
         <Tabs  value = {value} onChange = {handleChange}
         className = {classes.tabContainer} indicatorColor = "secondary">
         <Tab className = {classes.tab} label="Home" component = {Link} to = "/" />
         <Tab className = {classes.tab} label="Services" component = {Link} to = "/services" />
         <Tab className = {classes.tab} label="The Revolution" component = {Link} to = "/revolution" />
         <Tab className = {classes.tab} label="About us" component = {Link} to = "/about" />
         <Tab className = {classes.tab} label="Contact" component = {Link} to = "/contact" />
       </Tabs>
       <Button variant='contained' color = 'secondary' component = {Link} to = "/estimate"> Free Estimate </Button>
        </Toolbar> 
        </AppBar>
        <div className ={classes.toolbarMargin}/>
        </React.Fragment>
    )
}
