import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as UserIcon} from '../icon/user.svg';

const HeaderContent = () => {
    return (
        <>
          <Link to='/' className='topLogoLink'> <h1 className='topLogo'>LOGO</h1></Link>
            <div className='headerWrap'>
                <ul className='headerBtnList'>
                    <Link to='/about' className='headerBtn'>About</Link>
                    <Link to='/stores' className='headerBtn'>Stores</Link>
                    <Link to='/contact' className='headerBtn'>Contact</Link>
                    <Link to='/sale' className='headerBtn'>Sale</Link>

                </ul>
                <div className='headerOptionsWrap'>
                    <div className='navOptionBtn'>

                        <button>
                            <UserIcon className='userIcon' />
                        </button>
                    </div>                    
                </div>
                
            </div>
        </>
    )
}

export default HeaderContent
