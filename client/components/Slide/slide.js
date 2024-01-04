import React from 'react';
import styles from './Slide.module.css';
import CatCard from './catCard';
import { cards } from '@/pages/api/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slide = ({slidesToShow, slidesToScroll}) => {

  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slide}>
      <div className={styles.container}>
        <Slider {...settings} >
            {cards.map(card => (
              <CatCard item={card} key={card.id} />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default slide