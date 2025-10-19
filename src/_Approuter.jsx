import React from 'react';
import AppUniversal from './app-universal';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const _Approuter = (props) => {

    // console.log('props', props.location);
    return(
        <>
        <Router>
             <Route render={(props)=> <AppUniversal {...props}/>} />
        </Router>
        
        
    </>
    );
    
}


