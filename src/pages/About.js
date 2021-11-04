import React from 'react'
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'

import Model from '../img/model2.png'
import {ReactComponent as Signature} from '../svg/signature.svg';

const About = () => {
    return (
        <>
            <header>
                <HeaderContent />
            </header>

            <main>
                <div className='aboutWrap'>
                    <div className='aboutTextWrap'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat luctus. Duis et sem posuere, hendrerit justo id, ornare massa. Morbi laoreet mauris mauris, quis congue augue accumsan finibus. Maecenas consectetur urna ac mauris dictum, pharetra dictum erat tempor. Suspendisse potenti.</p>
                        <Signature className='signature'/>
                    </div>

                </div>


            </main>

            <footer>
                <FooterContent />
            </footer>

            <img className='modelPic' src={Model} alt="Model" />
        </>
    )
}

export default About
