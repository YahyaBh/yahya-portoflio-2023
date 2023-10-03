import React from 'react'
import './Clients.scss'
import IMAGE from '../../Assets/yahya-logo.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Clients = () => {
    return (
        <div className='clients_container'>

            <div className="head_text">
                <h2 className='main_text'>CLIENTS</h2>
                <h2 className='main_text_under'>CLIENTS</h2>
            </div>



            <div className="cards_container">





                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className="card">
                            <div className="top_head">
                                <div className="image_container">
                                    <img src={IMAGE} alt="client" />
                                </div>
                                <div className="text">
                                    <h3>CLIENT NAME</h3>
                                    <span>2023 July 10</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text   of the printing and typesetting industry. Lorem Ipsum has been the industry </p>
                        </div>

                    </SwiperSlide>


                    <SwiperSlide>

                        <div className="card">
                            <div className="top_head">
                                <div className="image_container">
                                    <img src={IMAGE} alt="client" />
                                </div>
                                <div className="text">
                                    <h3>CLIENT NAME</h3>
                                    <span>2023 July 10</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text   of the printing and typesetting industry. Lorem Ipsum has been the industry </p>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="card">
                            <div className="top_head">
                                <div className="image_container">
                                    <img src={IMAGE} alt="client" />
                                </div>
                                <div className="text">
                                    <h3>CLIENT NAME</h3>
                                    <span>2023 July 10</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text   of the printing and typesetting industry. Lorem Ipsum has been the industry </p>
                        </div>

                    </SwiperSlide>
                </Swiper>

            </div>


        </div>
    )
}

export default Clients