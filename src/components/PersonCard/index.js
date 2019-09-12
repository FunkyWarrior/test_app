import React from 'react';
import {ucFirst} from "../../utils/funcs/funcs";

const PersonCard = (props) => {
    const {user} = props;
    return (
        <div className='person-card'>
            <img
                className='person-card__img'
                src={user.photo ? user.photo : `https://picsum.photos/200/200?random=${Math.random() * 1000}`}
                alt='Oops'
            />
            <div className='person-card__info'>
                <h2>{user.title ? user.title + '.' : null} {ucFirst(user.name)} {ucFirst(user.surname)}</h2>
                {user.email ?
                    <p><b>Email</b>: {user.email}</p> :
                    null
                }
                {user.phone ?
                    <p><b>Phone</b>: {user.phone}</p> :
                    null
                }
                {user.region ?
                    <p><b>Region</b>: {user.region}</p> :
                    null
                }
                {user.gender ?
                    <p><b>Gender</b>: {user.gender}</p> :
                    null
                }
            </div>
        </div>
    );
};

export default PersonCard;