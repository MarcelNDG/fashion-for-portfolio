import React from 'react'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'

import MobileBtn from '../components/MobileBtn'
import SalesOptions from '../components/SalesOptions'


const Sale = () => {
    return (
        <>
        <header>
           <HeaderContent />
           
       </header>
       
       <main>
            <div className='salesWrap'>
                <h2>Title</h2>
                
            </div>            
       </main>

       <footer>
           <FooterContent />
       </footer>
       <MobileBtn />
       <SalesOptions />
       </>
    )
}

export default Sale
