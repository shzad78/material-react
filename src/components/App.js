import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header'


function App() {
  return (
    <ThemeProvider theme = {theme}>
    <BrowserRouter>
    <Header />
    <Switch> 
    <Route exact path= "/" component = {()=> <div>Home</div>}/>
    <Route exact path= "/Services" component = {()=> <div>Servies</div>}/>
    <Route exact path= "/revolution" component = {()=> <div>Revolution</div>}/> 
    <Route exact path= "/about" component = {()=> <div>About</div>}/>
    <Route exact path= "/contact" component = {()=> <div>Contact</div>}/>
    <Route exact path= "/estimate" component = {()=> <div>Estimate</div>}/>
    <Route exact path= "/software" component = {()=> <div>Custom Software</div>}/>
    <Route exact path= "/webdevelopment" component = {()=> <div>Web Development</div>}/>
    <Route exact path= "/mobileapp" component = {()=> <div>Mobile App Development</div>}/>
    <Route exact path= "/profile" component = {()=> <div>Profile </div>}/>
    <Route exact path= "/customsoftware" component = {()=> <div> Custom Software</div>}/>
    <Route exact path= "/account" component = {()=> <div> My Account</div>}/>

    </Switch >
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
