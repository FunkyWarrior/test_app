import React, {Component} from 'react';
import {connect} from "react-redux";
import {getContacts} from "../../actions/contacts";
import Loader from "../Loader";
import PersonCard from "../PersonCard";

class Contacts extends Component {

    componentDidMount() {
        if(!localStorage.getItem('contacts'))
        this.props.getContacts()
    }

    render() {
        const  {contacts,isFetching} = this.props;
        console.log(contacts)
        return (
                <Loader flag={isFetching}>
                    <div className='contacts'>
                        {contacts && contacts.map(el => <PersonCard user={el}/>)}
                    </div>
                </Loader>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts:state.contacts.contacts,
        isFetching:state.contacts.isFetching
    }
};

const mapDispatchToProps = {
    getContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)