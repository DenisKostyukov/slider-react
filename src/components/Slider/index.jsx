import React, { useState, useEffect } from 'react';
import { useData } from '../../hooks/index';
import cx from 'classnames';
import style from './Slider.module.sass';
import Slide from './Slide';
function Slider () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [nextImageIndex, setNextImageIndex] = useState(null);
  let length = null;
  const load = async () => {
    return await fetch('/images.json').then(response => response.json());
  };
  const { data, error, isFetching } = useData(load);
  if (data && !isFetching) {
    length = data.length;
  }
  const nextSlideHandler = () => {
    setCurrentImageIndex((currentImageIndex + 1) % length);
  };
  const prevSlideHandler = () =>
    setCurrentImageIndex((currentImageIndex - 1 + length) % length);

  useEffect(() => {
    setNextImageIndex((currentImageIndex + 1) % length);
    setPrevImageIndex((currentImageIndex - 1 + length) % length);
  }, [currentImageIndex]);

  if (!isFetching && data) {
    return (
      <>
        <div className={style.container}>
            <Slide
              currentImageSrc={data[currentImageIndex]}
              nextImageIndex={data[nextImageIndex]}
              prevImageIndex={data[prevImageIndex]}
            />
            <button
          className={cx(style.button, style.prevButton)}
          onClick={prevSlideHandler}
        >
          prev
        </button>
        <button
          className={cx(style.button, style.nextButton)}
          onClick={nextSlideHandler}
        >
          next
        </button>
        </div>
      </>
    );
  }
  return <div>{error}</div>;
}

export default Slider;
