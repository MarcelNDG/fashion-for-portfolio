import React from 'react'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'


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
       </>
    )
}

export default Sale
