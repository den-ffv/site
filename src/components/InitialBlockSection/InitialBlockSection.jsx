import React from 'react';

import "./InitialBlockSection.scss"

import InitialBlockIcon from '/InitialBlockIcon.svg';

function InitialBlockSection({translations}) {
  return (
    <div className="initial-block">
      <div className="initial-block__text-content">
        <h1 className="initial-block__title">Майбутнє країни в наших руках!</h1>
        <p className="initial-block__text">
          Ми - молодіжна організація партії "УДАР". Наша команда об'єднує
          енергійних, креативних молодих людей, які хочуть зробити свій внесок у
          побудову кращого майбутнього для України.
        </p>
        <button className="initial-block__button">Дізнатися більше</button>
      </div>
      <div className='initial-block__image-contaiter' >
        <img className="initial-block__image" src={InitialBlockIcon} alt="initial-block-icon" />
      </div>
    </div>
  );
}

export default InitialBlockSection;
