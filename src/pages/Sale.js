import React from 'react'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'

import MobileBtn from '../components/MobileBtn'
import SalesOptions from '../components/SalesOptions'
import SalesSearchBar from '../components/SalesSearchBar'
import SideOptionsDesktop from '../components/SideOptionsDesktop'
import CategoriesTop from '../components/CategoriesTop'
import Products from '../components/Products'


const Sale = () => {
    return (
        <>
            <header>
            <HeaderContent />           
            </header>
        
        <main>
                <div className='salesWrap'>
                    <div className='salesContainer'>
                        <SalesSearchBar />
                        <SideOptionsDesktop />
                        <CategoriesTop clothes='Clothes' shoes='Shoes' accesories='Accesories' />
                        <Products />
                        
                        
                        
                                           
                        
                        
                        
                        
                    </div>
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
