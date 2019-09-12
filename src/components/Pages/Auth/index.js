import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserByFb, changeShowHeaderFlag} from '../../../actions/auth'
import {Redirect} from "react-router-dom";
import Loader from "../../Loader";
import Input from "../../Input";
import {logInForm} from "../../../utils/formFields/logIn"

class Auth extends Component {

    componentDidMount() {
        this.props.changeShowHeaderFlag(false)
    }

    componentWillUnmount() {
        this.props.changeShowHeaderFlag(true)
    }

    logWithFb = (e) => {
        e.preventDefault();
        if (!this.props.user) {
            this.props.getUserByFb()
        }
    };

    submit = (e) => {
        e.preventDefault()
    };

    render() {
        const {user, isFetching} = this.props;
        if (user) return <Redirect to='/'/>;
        return (
            <Loader flag={isFetching} flag2={true}>
                <div className='auth'>
                    <form className='auth__form' onSubmit={this.submit}>
                        {logInForm.map(el =>
                            <Input
                                className={'auth__form-input'}
                                key={el.id}
                                el={el}
                                changeInputValue={null}
                            />
                        )}
                        <div className='auth__form-btns'>
                            <input className='auth__form-submit' type='submit' value='Login'/>
                            <button className='fb-connect' disabled={isFetching} onClick={this.logWithFb}>Sign in with Facebook</button>
                        </div>
                    </form>

                </div>
            </Loader>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isFetching: state.auth.isFetching
    }
};

const mapDispatchToProps = {
    getUserByFb,
    changeShowHeaderFlag
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)