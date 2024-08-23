import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function CustomSlide({ collection }) {
  var settings = {
    className: "center",
    centerMode: true,
    // dots: false,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {collection &&
          collection?.map((col) => (
            <Link
              key={col?._id}
              to={`/video/${col?.title.replace(/ /g, "_")}/${col?._id}`}
            >
              <div className="w-[80%] h-[232px] object-cover">
                <img
                  src={`http://localhost:8080/images/${col?.image}`}
                  className="w-full h-full rounded-xl object-fill"
                  alt=""
                />
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
}
