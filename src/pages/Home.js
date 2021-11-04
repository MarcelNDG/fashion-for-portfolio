import React from 'react'


import Model from '../img/model.png'

import MobileBtn from '../components/MobileBtn'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'
import SphereBig from '../components/SphereBig'


const Home = () => {
    return (
        <>
        <header>
            <HeaderContent />
        </header>

        <main>
            <div className='mainWrap'>
                <div className='mainTextWrap'>
                <h2 className='title'>FASHION</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat luctus. Duis et sem posuere, hendrerit justo id, ornare massa. Morbi laoreet mauris mauris, quis congue augue accumsan finibus. Maecenas consectetur urna ac mauris dictum, pharetra dictum erat tempor. Suspendisse potenti.</p>
                </div>
                
            </div>

        </main>

        <footer>
            <FooterContent />
        </footer>

            <SphereBig />            
            <img className='modelPic' src={Model} alt="Model" />
            <MobileBtn />
        </>
    )
}

export default Home
