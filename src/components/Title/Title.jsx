import React from 'react';
import './Title.scss';
function Title({ titleText }) {
  return (
    <h2 className="section-title" data-aos="fade-in" data-aos-duration="2000">
      {titleText}
    </h2>
  );
}

export default Title;
