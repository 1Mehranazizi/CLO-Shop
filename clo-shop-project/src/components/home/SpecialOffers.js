import React, { useContext } from "react";

//Swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Context
import { ProductsContext } from "../../context/ProductsContextProvider";

//Components
import ProductCard from "../shared/ProductCard";

const SpecialOffers = () => {
  const data = useContext(ProductsContext);
  const specialPro = data.filter((item) => item.discount > 0);
  return (
    <div className="carousel-slider">
      <div className="title-homepage">
        <h2>پیشنهادات ویژه</h2>
        <small>Special offers</small>
      </div>
      <Swiper
        breakpoints={{
          990: {
            width: 990,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          360: {
            width: 350,
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        autoplay={true}
        loop={true}
        rtl={"true"}
      >
        {specialPro.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
