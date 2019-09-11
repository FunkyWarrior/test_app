import React from 'react';
import {ucFirst} from "../utils/funcs/funcs";

const PersonCard = (props) => {
    const {name, picture, email, location, phone} = props.user;
    const neededProps = ['postcode','street','city'];
    const locationArray = Object.entries(location);
    return (
        <div className='person-card'>
                <img className='person-card__img' src={picture.large} alt='no img found'/>
            <div className='person-card__info'>
                <h2>{`${name.title}. ${ucFirst(name.first)} ${ucFirst(name.last)}`}</h2>
                <p><b>Email</b>: {email}</p>
                <p><b>Phone</b>: {phone}</p>
                {locationArray.map(el => neededProps.find(item => item === el[0]) ? <p key={el[0]}><b>{ucFirst(el[0])}</b>: {ucFirst(el[1])}</p> : null
                )}
            </div>
        </div>
    );
};

export default PersonCard;