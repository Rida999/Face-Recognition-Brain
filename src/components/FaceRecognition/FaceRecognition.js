import React from 'react'

export default function FaceRecognition(props) {
    const imgURL=props.imgURL;
    return (
        <div className='center ma'>
            <div className='mt2'>
            <img src={imgURL} alt='' style={{width:"500px",height:"auto"}}/>
            </div>
        </div>
    )
}
