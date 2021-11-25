import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as UserIcon} from '../icon/user.svg';
import {ReactComponent as ShopCart} from '../icon/shopping-cart.svg';

import CartNumber from '../components/CartNumber'

const HeaderContent = () => {
    return (
        <>
            <div className='headerWrap'>
          <Link to='/' className='topLogoLink'> <h1 className='topLogo'>LOGO</h1></Link>

                <div className='headerBtnWrap'>
                    <ul className='headerBtnList'>
                        <Link to='/sale' className='headerBtn'>Products</Link>
                        <Link to='/stores' className='headerBtn'>Stores</Link>
                        <Link to='/about' className='headerBtn'>About</Link>
                        <Link to='/contact' className='headerBtn'>Contact</Link>
                    </ul>
                    <div className='headerOptionsWrap'>
                        <div className='navOptionBtn'>

                            <button className='cartBtn'>
                                <ShopCart className='userIcon' />
                                <CartNumber />                            
                            </button>
                            <button>
                                <UserIcon className='userIcon' />                            
                            </button>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderContent
