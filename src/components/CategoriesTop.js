import React from 'react'



const CategoriesTop = ({clothes, shoes, accesories}) => {
    return (
        <>
            <div className='categoriesTop'>
                <div className='categoryContainer'>
                    <div className='categoryPic'></div>
                    <h3>{clothes}</h3>
                </div>
                <div className='categoryContainer'>
                    <div className='categoryPic'></div>
                    <h3>{shoes}</h3>
                </div>
                <div className='categoryContainer'>
                    <div className='categoryPic'></div>
                    <h3>{accesories}</h3>
                </div>
                
            </div>
        </>
    )
}

export default CategoriesTop
