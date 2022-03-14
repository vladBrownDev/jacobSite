import "./Carousel.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade"

import { useState } from "react"
import ReactDOM from "react-dom"
import CloseTemplate from "../Album/CloseTemplate";

import { useSwiper } from 'swiper/react';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';

import cross from  "../../imgs/cross.png"
import ph1 from "../../imgs/crop1/Photo 1.png"
import ph2 from "../../imgs/crop1/Photo 2.png"
import ph3 from "../../imgs/crop1/Photo 3.png"
import ph4 from "../../imgs/crop1/Photo 4.png"
import ph5 from "../../imgs/crop1/Photo 5.png"
import ph6 from "../../imgs/crop1/Photo 6.png"
import ph7 from "../../imgs/crop1/Photo 7.png"
import ph8 from "../../imgs/crop1/Photo 8.png"

export default function Carousel (props) {
    console.log(useSwiper())
    const [pageNum, setPageNum] = useState(1)
    function close () {
        const page = document.getElementById("mainPage")
        ReactDOM.render(<CloseTemplate/>, page)
    }
    return (
        <>
            <div id="carouselHeader">
                <div>
                    0{pageNum} of 08
                </div>
                <img className="cross" onClick={close} src={cross} alt="" />
            </div>
            <section id="carouselShell">
                <Swiper
                    modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y,EffectFade]}
                    navigation={true}
                    keyboard 
                    // onSwiper={}
                    onSlideChange={(swiper) => setPageNum(swiper.activeIndex + 1)}
                    initialSlide={props.slide}
                >
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph1} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph2} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph3} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph4} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph5} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph6} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph7} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imgShell">
                            <img className="carouselImg" src={ph8} alt="" srcSet="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}