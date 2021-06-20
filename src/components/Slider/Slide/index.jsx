import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import style from './Slide.module.sass';
function Slide ({ currentImageSrc, nextImageIndex, prevImageIndex }) {
  const currentImage = useRef(null);
  const wrapper = useRef(null);
  const [active, setActive] = useState(true)
  const onLoadHandler = () => {
    wrapper.current.style.opacity = 1;
  };
  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 500);
    return () => {
      setActive(false);
    };
  }, [currentImageSrc]);
  return (
    <>
      <div ref={wrapper} className={style.wrapper} onLoad={onLoadHandler}>
        <img
          ref={currentImage}
          className={cx(style.slide,{[style.active]:active})} 
          src={currentImageSrc}
          alt=''
        />
        <img
          className={style.anotherSlide}
          src={prevImageIndex}
          alt=''
        />
        <img
          className={style.anotherSlide}
          src={nextImageIndex}
          alt=''
        />
      </div>
    </>
  );
}

export default Slide;
