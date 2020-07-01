import React from 'react';

import '../../assets/styles/components/Utils.scss';


const ButtonArrowRight = ({margin, icon, text, background, width}) => {
  return (
    <button class={"btn__secundary btn__secundary--buy discovery__box__position"+ " "+ background + " " + margin + " " + width}>
        <div class="flex btn__arrow__buy">
        <span className={icon ? icon : "icon btn__arrow__buy__img"} alt="Ícono de flecha a la derecha"></span>
            <p>{text  ? text : 'Comprarlo ahora'}</p>
        </div>
    </button>
)}
export default ButtonArrowRight;