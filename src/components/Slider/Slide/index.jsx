import React, { useRef, useEffect } from 'react';
import style from './Slide.module.sass';
function Slide ({ currentImageSrc, nextImageIndex, prevImageIndex }) {
  const currentImage = useRef(null);
  const prevImage = useRef(null);
  const nextImage = useRef(null);
  const wrapper = useRef(null);
  const onLoadHandler = () => {
    wrapper.current.style.opacity = 1;
  };
  //Поменять на класс Active
  useEffect(() => {
    setTimeout(() => {
      currentImage.current.style.opacity = 1;
    }, 500);
    return () => {
      currentImage.current.style.opacity = 0;
    };
  }, [currentImageSrc]);
  return (
    <>
      <div ref={wrapper} className={style.wrapper} onLoad={onLoadHandler}>
        <img
          ref={currentImage}
          className={style.slide}
          src={currentImageSrc}
          alt=''
        />
        <img
          ref={prevImage}
          className={style.anotherSlide}
          src={prevImageIndex}
          alt=''
        />
        <img
          ref={nextImage}
          className={style.anotherSlide}
          src={nextImageIndex}
          alt=''
        />
      </div>
    </>
  );
}

export default Slide;
