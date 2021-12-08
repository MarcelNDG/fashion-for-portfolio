import React from 'react'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'

import MobileBtn from '../components/MobileBtn'
import SalesOptions from '../components/SalesOptions'
import SalesSearchBar from '../components/SalesSearchBar'
import CategoriesTop from '../components/CategoriesTop'


const Sale = () => {
    return (
        <>
            <header>
            <HeaderContent />           
            </header>
        
        <main>
                <div className='salesWrap'>
                    <div className='salesContainer'>
                        <CategoriesTop clothes='Clothes' shoes='Shoes' accesories='Accesories' />
                        
                                           
                        
                        
                        
                        
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
