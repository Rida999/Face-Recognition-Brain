import React from 'react'

export default function Navigation(props) {
    let {onRouteChange}=props;
    return (
        <nav style={{display:"flex",justifyContent:"flex-end"}}>
            <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('signin')}>Sign Out</p>
        </nav>
    )
}
