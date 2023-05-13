import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function NotFound(){
    // Navigate back to home page
    return <Navigate to="/" />
}


export default NotFound;