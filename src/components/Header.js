import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {links} from '../utils/formFields/header-links'

class Header extends Component {

    clearUser = () => {
        const keysToClear = ['userKey','contacts','mainInfo'];
        keysToClear.forEach(el =>localStorage.removeItem(el));
        this.props.clearUser();
        this.props.clearContacts();
        this.props.clearMainInfo();
    };

    render() {
        const {user} = this.props;
        return (
            <header className='header'>
                <div className='header__inner'>
                    <div className='header__left'>
                        {links.map(el =>
                            <Link className='header__link' to={el.path} key={el.id}> {el.name}</Link>
                        )}
                    </div>
                    {user && <img className='header__img' src={user.picture.medium} alt='Logout' title='Log Out' onClick={this.clearUser} />}
                </div>
            </header>
        );
    }
}

export default Header;