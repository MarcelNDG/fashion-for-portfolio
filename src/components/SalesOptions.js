import React from 'react'


import {ReactComponent as ArrowDownBtn} from '../icon/arrowdownbtn.svg';


const SalesOptions = () => {
    return (
        <div className='saleOptionsWrap'>
            <button>
                <ArrowDownBtn className='salesIcon'/>
            </button>            
        </div>
    )
}

export default SalesOptions
