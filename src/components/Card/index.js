import React from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import './Card.scss';

const Card = ({
    deleteMovie,
    id,
    category,
    likes,
    dislikes,
    statusLike,
    statusDislike,
    title,
    like,
    dislike
}) => {
    const handleClickDeleteButton = (id, category) => () => {
        deleteMovie(id, category);
    };

    const handleClickButtonLike = (id) => () => {
        like(id);
    };

    const handleClickButtonDislike = (id) => () => {
        dislike(id);
    };
      
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__title">{title}</div>
                <div className="card__category">{category}</div>
            </div>
            <div className="card__content">
            <div className="card__likeAndDislike">
                <div className="card__like">
                <FaRegThumbsUp className="card__icon" onClick={handleClickButtonLike(id)} size="1.2em" color={statusLike ? '#075307' : '#000'}/> 
                {likes}
                </div>
                <div className="card__dislike">
                <FaRegThumbsDown className="card__icon" onClick={handleClickButtonDislike(id)} size="1.2em" color={statusDislike ? 'ff0000' : '#000'}/>
                {dislikes}
                </div>
            </div>
            <div className="card__gauge">
                <div
                    className="card__gauge--like"
                    style={{
                        width: likes * 100 / (likes + dislikes) + '%',
                    }}
                    />
                    <div 
                    className="card__gauge--dislike"
                    style={{
                        width: dislikes * 100 / (likes + dislikes) + '%',
                    }}
                    />
                </div>
            </div>
            <div className="card__footer">
                <button onClick={handleClickDeleteButton(id, category)} className="card__button">Delete</button>
            </div>           
        </div>
    )
}

Card.propTypes = {
    deleteMovie: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    statusLike: PropTypes.bool.isRequired,
    statusDislike: PropTypes.bool.isRequired,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
}

export default Card;