import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { apiUrl } from 'utils/constants';
import './Reviews.css';

import Loading from 'Shared/Loading/Loading';
import Review from '../Review/Review';

function Reviews() {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  // load reviews
  const [reviews, setReviews] = useState([]);

  const [reviewLoaded, setReviewLoaded] = useState(false);

  console.log(apiUrl);

  useEffect(() => {
    fetch(`${apiUrl}/reviews`)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setReviewLoaded(true);
      });
  }, []);

  if (!reviewLoaded) return <Loading />;

  return (
    <div className='review-bg mt-4'>
      <h1 className='pt-4 pb-2 text-light'>{"What they're saying"}</h1>
      <div className='container'>
        <Slider {...slickSettings} className='pt-4 mt-3'>
          {reviews.map(review => (
            <Review key={review._id} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
