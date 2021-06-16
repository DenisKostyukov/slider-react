import React from 'react';
import cx from 'classnames';
import style from './ResponsiveWrapper.module.sass'
function ResponsiveWrapper ({children}) {
  const inlineStyle = {
    paddingTop:'calc(100% * 9 / 16)',
  };
  return (
    <>
      <div className={cx(style.outerWrapper)}>
        <div className={style.innerWrapper} style={inlineStyle}>
          {children}
        </div>
      </div>
    </>
  );
}

export default ResponsiveWrapper;
