import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import styled from "styled-components";
import { ProjectContainer } from "../styled/homeStyled";
import coolpic from '../assets/coolpic.jpg';
import oxygen from '../assets/oxygen.jpg';
import dashboard from '../assets/dashboard.jpg';
import hotel from '../assets/hotel.jpg';


export const SwiperProjects = () => {


    return (
        <>
            <StyledSwiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    1200: {
                        slidesPerView: 2
                    }
                  }}
            >

                
                <SwiperSlide>
                    <ProjectContainer>
                        <h2>Hotel Miranda WebSite</h2>
                        <img src={hotel} />

                    </ProjectContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectContainer>
                        <h2>App de Fotos</h2>
                        <img src={coolpic} />

                    </ProjectContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectContainer>
                        <h2>Hotel Miranda Dashboard</h2>
                        <img src={dashboard} />

                    </ProjectContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <ProjectContainer>
                        <h2>Oxygen Shop</h2>
                        <img src={oxygen} />

                    </ProjectContainer>
                </SwiperSlide>
                




            </StyledSwiper>



        </>

    )
}

const StyledSwiper = styled(Swiper)`
    max-width: 1200px;
    margin: 0 auto;
    text-align: -webkit-center;
    height: 450px;
    cursor: grab;

    & .swiper-pagination {
        height: 3em;
        border-radius: 0.3em;
    }
    h2{
        font-family: "Bebas Neue", sans-serif;
        color: ${({ theme }) => theme.titleColor};
    }
`
