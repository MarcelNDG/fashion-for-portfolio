import React from 'react'
import {ReactComponent as SearchIcon} from '../icon/searchicon.svg';

const SalesSearchBar = () => {
    return (
        <>
            <div className='searchContainer'>
                <SearchIcon className='searchIcon'/>
                <input className='salesSearchBar' type="text" placeholder="Search..">

                </input>
            </div>
        </>
    )
}

export default SalesSearchBar
