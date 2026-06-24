import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const excelImages = [
  "Gemini_Generated_Image_70syfc70syfc70sy.png",
  "blob:https://gemini.google.com/fe7696cf-060b-421d-a67c-06802342feb8",
  "https://gemini.google.com/fe7696cf-060b-421d-a67c-06802342feb8",
  "blob:https://gemini.google.com/fe7696cf-060b-421d-a67c-06802342feb8",
];

export default function ExcelSlider() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="rounded-3xl overflow-hidden border border-green-200 bg-white shadow-2xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {excelImages.map((image, index) => (
            <SwiperSlide key={index}>
              {/* <img
                src={image}
                alt="Excel Trainings"
                className="w-full h-[420px] object-cover"
              /> */}
              <video
                src='https://gemini.google.com/share/2146e5644b8d'
                autoPlay
                loop
                muted
                className="w-full h-[420px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </div>
  );
}