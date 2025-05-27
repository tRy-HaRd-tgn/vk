import styles from "./styles.module.scss";
import { data, stack } from "./data";
import Slider, { CustomArrowProps } from "react-slick";
import { SliderItem } from "../sliderItem";

export const Footer = () => {
  function SampleNextArrow(props: CustomArrowProps) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          transform: "translateX(-40px)",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: CustomArrowProps) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          transform: "translateX(40px)",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <footer className={styles.footer}>
      <h1 className={styles.h1}>Информация обо мне</h1>
      <div className={styles.content}>
        <div className={styles.contentLeftSide}>
          <h2 className={styles.h2}>мои проекты</h2>
          <Slider className={styles.slider} {...settings}>
            {data?.map((item, index) => (
              <SliderItem name={item.name} key={index} url={item.url} />
            ))}
          </Slider>
        </div>
        <div className={styles.contentRightSide}>
          <h2 className={styles.h2}>Мой стек</h2>
          <div className={styles.stackWrapper}>
            {stack?.map((item, index) => (
              <div key={index} className={styles.item}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
