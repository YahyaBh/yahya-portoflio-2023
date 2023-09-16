import React, { useEffect, useState } from 'react'
import './Header.scss'
import axios from 'axios'


const Header = () => {



    const [loading, setLoading] = useState();
    const [quote, setQuote] = useState();

    const quote_api = 'https://api.api-ninjas.com/v1/quotes?category=computers'

    useEffect(() => {

        axios.get(quote_api, { headers: { 'X-Api-Key': 'Mg6QkZI4ICJgHzvApvdb9g==eniGFf2QgtVZPxb6' }, contentType: 'application/json' })
            .then((res) => {
                setLoading(true);
                setQuote(res.data[0]);
            })
            .catch((err) => {
                alert(err.message)
            })


    }, [])


    return (
        <div className='header_container'>

            <div className='back_cont'>
                <div className="left_cont">
                    <h2 className='stroked'>OLOGY</h2>
                    <h2 className='bold_text'>OLOGY</h2>
                    <h2 className='stroked'>OLOGY</h2>
                </div>

                <div className="center_cont">
                    <h2 className='stroked'>PROGRAMMING</h2>
                    <h2 className='bold_text'>PROGRAMMING</h2>
                    <h2 className='stroked'>PROGRAMMING</h2>
                </div>

                <div className="right_cont">
                    <h2 className='stroked'>TECH</h2>
                    <h2 className='bold_text'>TECH</h2>
                    <h2 className='stroked'>TECH</h2>
                </div>
            </div>

            <div className='quote_cont'>
                <p>“{quote?.quote}”</p>
                <h5>-{quote?.author}</h5>
            </div>


        </div>
    )
}

export default Header