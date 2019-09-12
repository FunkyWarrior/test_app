import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {links} from '../../utils/formFields/header-links'

class Header extends Component {

    clearUser = () => {
        localStorage.removeItem('userKey');
        this.props.clearUser();
    };

    render() {
        const {user} = this.props;
        return (
            <header className='header'>
                <div className='header__inner'>
                    <div className='header__left'>
                        {links.map(el =>
                            <NavLink className='header__link' activeStyle={{color:'red'}} exact to={el.path} key={el.id}> {el.name}</NavLink>
                        )}
                    </div>
                    {user ?
                        <img
                            className='header__img'
                            src={user.photo} alt='Logout' title='Log Out'
                            onClick={this.clearUser}
                        /> :
                        null
                    }
                </div>
            </header>
        );
    }
}

export default Header;