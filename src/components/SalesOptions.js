import React from 'react'


import {ReactComponent as ArrowDownBtn} from '../icon/arrowdownbtn.svg';


const SalesOptions = () => {
    return (
        <div className='saleOptionsWrap'>
            <input type="text" placeholder="Search.."></input>
            <button>
                <ArrowDownBtn className='salesIcon'/>
            </button>            
        </div>
    )
}

export default SalesOptions
