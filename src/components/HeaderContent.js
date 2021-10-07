import React from 'react'
import { Link } from 'react-router-dom'

const HeaderContent = () => {
    return (
        <>
            <h1 className='topLogo'>LOGO</h1>
            <div className='headerWrap'>
                <ul className='headerBtnList'>
                    <Link to='/about' className='headerBtn'>About</Link>
                    <Link to='/stores' className='headerBtn'>Stores</Link>
                    <Link to='/contact' className='headerBtn'>Contact</Link>
                    <Link to='/sale' className='headerBtn'>Sale</Link>

                </ul>
                <div className='headerOptionsWrap'>
                    <div className='navOptionBtn'>
                        <button>Button</button>
                    </div>                    
                </div>
                
            </div>
        </>
    )
}

export default HeaderContent
