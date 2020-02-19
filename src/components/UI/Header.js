import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
    
    return (
        <React.Fragment>
        <AppBar position="fixed">
        <Toolbar disableGutters>
        
         <img alt = "company logo" className= {classes.logo} src = {logo}/>
         <Tabs  className = {classes.tabContainer}>
         <Tab className = {classes.tab} label="Home"  />
         <Tab className = {classes.tab} label="Services"  />
         <Tab className = {classes.tab} label="The Revolution"  />
         <Tab className = {classes.tab} label="About us"  />
         <Tab className = {classes.tab} label="Contact"  />
       </Tabs>
        </Toolbar> 
        </AppBar>
        <div className ={classes.toolbarMargin}/>
        </React.Fragment>
    )
}
