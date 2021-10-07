import React from 'react'

import MobileBtn from '../components/MobileBtn'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'


const Home = () => {
    return (
        <>
        <header>
            <HeaderContent />
        </header>

        <main>
            <h2 className='title'>PAGE TITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat luctus. Duis et sem posuere, hendrerit justo id, ornare massa. Morbi laoreet mauris mauris, quis congue augue accumsan finibus. Maecenas consectetur urna ac mauris dictum, pharetra dictum erat tempor. Suspendisse potenti.</p>
        </main>

        <footer>
            <FooterContent />
        </footer>
            
        <MobileBtn />
        </>
    )
}

export default Home
