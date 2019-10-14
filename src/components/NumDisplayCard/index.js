import React from 'react';
import PropTypes from 'prop-types';
import './NumDisplayCard.scss';

const NumDisplayCard = ({ numberCardByPage }) => {

    const handleClick = (number) => (e) => {
        const currentButton = e.currentTarget;
        const allButtons = e.currentTarget.parentNode.childNodes;

        allButtons.forEach(button => {
            button.classList.remove('numCard__number--active');
            
        });
        currentButton.classList.add('numCard__number--active');
        
        numberCardByPage(number);
    }

    return (
        <div className="numCard">
            <div onClick={handleClick(4)} className="numCard__number numCard__number--active">4</div>
            <div onClick={handleClick(8)} className="numCard__number">8</div>
            <div onClick={handleClick(12)} className="numCard__number">12</div>
        </div>
    );
}

NumDisplayCard.propTypes = {
    numberCardByPage: PropTypes.func.isRequired,  
};

export default NumDisplayCard;