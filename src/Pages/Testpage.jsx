import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import TechGrid from '../Components/TechGrid';

export default function Testpage() {
    return (
        <div className="bg-[#ffe14e] w-full h-[100vh] p-4">
            <div className='w-full h-full rounded-lg overflow-hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide><TechGrid /></SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
