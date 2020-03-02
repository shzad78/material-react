import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    },
    menu:{
      backgroundColor: theme.palette.primary.main,
      color:"white"
    },
    MenuItem:{
      ...theme.typography.tab
    }
})

)

export default function Header(props) {

    const classes = useStyles()
    const [value, setValue] = useState (1);
    const [anchorEl, setAnchorEl ] = useState(null);
    const handleChange = (e, value) => {
        setValue (value)
    }
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    return (
        <React.Fragment>
        <AppBar position="fixed">
        <Toolbar disableGutters>
        
         <img alt = "company logo" className= {classes.logo} src = {logo}/>
         <Tabs  value = {value} onChange = {handleChange}
         className = {classes.tabContainer} indicatorColor = "secondary">
         <Tab className = {classes.tab} label="Home" component = {Link} to = "/" />
         <Tab aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick}
         className = {classes.tab} label="Services" component = {Link} to = "/services" />
         <Tab className = {classes.tab} label="The Revolution" component = {Link} to = "/revolution" />
         <Tab className = {classes.tab} label="About us" component = {Link} to = "/about" />
         <Tab className = {classes.tab} label="Contact" component = {Link} to = "/contact" />
       </Tabs>
       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} 
       variant='contained' color = 'secondary' component = {Link} to = "/estimate"> Free Estimate 
       </Button>
       <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{onMouseLeave: handleClose}}
        classes= {{paper:classes.menu}}
        elevation={0}
      >
        
        <MenuItem onClick={()=>{handleClose(); setValue(1)}} component = {Link} to = "/services" classes= {{root:classes.MenuItem}}>Services </MenuItem>
        <MenuItem onClick={()=>{handleClose(); setValue(1)}} component = {Link} to = "/profile" classes= {{root:classes.MenuItem}}>Profile</MenuItem>
        <MenuItem onClick={()=>{handleClose(); setValue(1)}} component = {Link} to = "/account" classes= {{root:classes.MenuItem}}>My account</MenuItem>
        <MenuItem onClick={()=>{handleClose(); setValue(1)}} component = {Link} to = "/logout" classes= {{root:classes.MenuItem}}>Logout</MenuItem>
      </Menu>
        </Toolbar> 
        </AppBar>
        <div className ={classes.toolbarMargin}/>
        </React.Fragment>
    )
}
