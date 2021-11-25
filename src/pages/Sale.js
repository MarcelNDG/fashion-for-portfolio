import React from 'react'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'

import MobileBtn from '../components/MobileBtn'
import SalesOptions from '../components/SalesOptions'
import SalesSearchBar from '../components/SalesSearchBar'


const Sale = () => {
    return (
        <>
        <header>
           <HeaderContent />           
       </header>
       
       <main>
            <div className='salesWrap'>
                               
                <div className='salesContainer'>
                    <div className='saleCategory'></div>
                    <div className='saleCategory'></div>
                    <div className='saleCategory'></div>
                    <div className='saleCategory'></div>
                    
                    
                    
                </div>
            </div>            
       </main>

       <footer>
           <FooterContent />
       </footer>

       <MobileBtn />
       <SalesOptions />
       <SalesSearchBar />
       </>
    )
}

export default Sale
