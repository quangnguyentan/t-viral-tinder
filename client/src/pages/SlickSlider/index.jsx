import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "@/assets/images_1.jpg";
import image2 from "@/assets/images_2.jpg";
import image3 from "@/assets/image_3.jpg";
import image4 from "@/assets/image_4.jpg";
import image5 from "@/assets/image_5.jpg";
import image6 from "@/assets/image_6.png";
import image7 from "@/assets/image_7.jpg";

export default function SlickSlider() {
  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container relative">
      <Slider {...settings} className="absolute top-[-40px]">
        <div className="w-[90%] h-full object-cover">
          <img
            src={image1}
            alt="image_1"
            className="w-[90%] mx-auto object-cover "
          />
        </div>
        <div className="w-[90%] h-full object-cover">
          <img
            src={image2}
            alt="image_1"
            className="w-[90%] mx-auto object-cover "
          />
        </div>
        <div className="w-[90%] h-full object-cover">
          <img
            src={image3}
            alt="image_1"
            className="w-[90%] mx-auto object-cover "
          />
        </div>
        <div className="w-[90%] h-full object-cover">
          <img
            src={image4}
            alt="image_1"
            className="w-[90%] mx-auto object-cover "
          />
        </div>
        <div className="w-[90%] h-full object-cover">
          <img
            src={image5}
            alt="image_1"
            className="w-[90%] mx-auto object-cover "
          />
        </div>
        <div className="w-[90%] h-full object-cover">
          <img
            src={image6}
            alt="image_1"
            className="w-[90%] mx-auto object-cover "
          />
        </div>
        <div className="w-[90%] h-full object-cover">
          <img
            src={image7}
            alt="image_1"
            className="w-[90%] mx-auto object-cover "
          />
        </div>
      </Slider>
    </div>
  );
}
