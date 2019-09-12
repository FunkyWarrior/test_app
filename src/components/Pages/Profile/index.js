import React, {Component} from 'react';
import {connect} from "react-redux";
import PersonCard from "../../PersonCard";

class Profile extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className='profile'>
                {user ?
                    <PersonCard user={user}/> :
                    null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
