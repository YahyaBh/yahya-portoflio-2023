import React from 'react'
import './Floater.scss'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { GrDocumentUser } from 'react-icons/gr'

const Floater = () => {



    const handleDownloaded = () => {



    }


    return (
        <div className='floater_cont'>

            <h3>AVAILABLE FOR WORK <HiOutlineStatusOnline /></h3>


            <button onClick={handleDownloaded}>
                DOWNLOAD CV <GrDocumentUser/>
            </button>

        </div>
    )
}

export default Floater