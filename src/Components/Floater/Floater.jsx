import React from 'react'
import './Floater.scss'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { GrDocumentUser } from 'react-icons/gr'

const Floater = () => {



    const handleDownloaded = () => {



    }


    return (
        <div className='floater_cont'>

            <div className="container-left">

                <h3>AVAILABLE FOR WORK <HiOutlineStatusOnline /></h3>


                <button onClick={handleDownloaded}>
                    DOWNLOAD CV <GrDocumentUser />
                </button>
            </div>

            <div className="container-right">
                <GrDocumentUser />
            </div>

        </div>
    )
}

export default Floater