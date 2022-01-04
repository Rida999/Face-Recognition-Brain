import React from 'react'

export default function Navigation(props) {
    let {onRouteChange,isSignedin}=props;

        if(isSignedin){
            return(
        <nav style={{display:"flex",justifyContent:"flex-end"}}>
            <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('signin')}>Sign Out</p>
        </nav>)}
        else{
            return(
            <nav style={{display:"flex",justifyContent:"flex-end"}}>
            <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('signin')}>Sign In</p>
            <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('register')}>Register</p>
            </nav>)
        }
}
