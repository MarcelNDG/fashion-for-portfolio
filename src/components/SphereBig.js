import React from 'react'
import { useEffect } from 'react'


const SphereBig = () => {

    useEffect(() => {
        const sphereBig = document.getElementById('sphereBig')
        
        sphereBig.style.opacity = '1'
        sphereBig.style.transition = '1.8s'
        return () => {
            
        }
    }, [])
    return(
        <>
        <div className='sphereContainer'>
            <div className='sphereBig' id='sphereBig'></div>
        </div>  
        </>
    )
}


export default SphereBig