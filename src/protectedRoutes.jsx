import { Redirect, Route } from "react-router-dom";
import React from 'react';
import {AuthHandler} from "./AuthHandler" 

export const ProtectedRoute = props => {
    const authToken = AuthHandler.getAuthToken();

    if (authToken==="false") {
         return <Redirect to="/" />
    }
    return <Route {...props} />
}