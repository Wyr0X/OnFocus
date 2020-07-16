import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Utils.scss';

import ArrowLeft from '../../assets/static/images/svg/arrow-visualization-black.svg'

const Beadcrumbs = ({ onlyMobile, margin , onlyDesktop, icon, iconHover}) => {
    
    const [isHover, setIsHover] = useState(false);

    console.log(isHover)

    return(
        <div 
        className={"beadcrumbs" + " " + onlyMobile + " " + margin + " "+ onlyDesktop}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
            <Link to={"/cursos"} className="flex text-decoration">
                <img src={icon ? 
                isHover ? iconHover : icon
                : 
                ArrowLeft} 
                alt="Fecha a la izquierda"/>
                <h5 className="beadcrumbs__text">Volver a los cursos</h5>
            </Link>
            </div>
)}
export default Beadcrumbs;