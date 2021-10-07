import React from 'react'

import {ReactComponent as HmbgIcon} from '../icon/hmbg-round.svg';

const MobileBtn = () => {
    return (
        <>
            <div className='mobileBtnWrap'>
                    <button>
                        <HmbgIcon className='hmbgIcon'/>
                    </button>
                </div>
        </>
    )
}

export default MobileBtn
