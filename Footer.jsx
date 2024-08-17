import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col'>
        <div className='md:flex flex-row md:justify-between ' >
            <ul  className='md:flex flex-row gap-12'>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
            <div className='md:flex flex-row' >
                <img src='./assets/Help-Avatar.svg' alt='check' />
                <p>Do you have any question feel free to ask?</p>
            </div>
        </div>

        </div>
    )
}
export default Footer