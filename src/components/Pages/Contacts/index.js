import React, {Component} from 'react';
import {connect} from "react-redux";
import {getContacts} from "../../../actions/contacts";
import Loader from "../../Loader";
import PersonCard from "../../PersonCard";

class Contacts extends Component {
    state = {
        current: 0,
        step: 5,
        page: 1
    };

    componentDidMount() {
        this.props.getContacts()
    }

    prevPage = () => {
        if (this.state.current - this.state.step >= 0)
            this.setState({
                current: this.state.current - this.state.step,
                page: this.state.page - 1
            })
    };

    nextPage = () => {
        this.setState({
            current: this.state.current + this.state.step,
            page: this.state.page + 1
        })
    };

    toStart = () => {
        this.setState({
            current: 0,
            page: 1
        })
    };

    changeStep = (e) => {
        this.setState({step: +e.target.value})
    };

    render() {
        const {contacts, isFetching} = this.props;
        const {current, step, page} = this.state;
        return (
            <Loader flag={isFetching}>
                {contacts ? <div>
                        <div style={{display: 'flex'}}>
                            <button onClick={this.prevPage}>Prev</button>
                            <p>{page}/{contacts.length / step > 1 ? Math.floor(contacts.length / step) : 1}</p>
                            {current + step >= contacts.length ?
                                <button onClick={this.toStart}>To Start</button> :
                                <button onClick={this.nextPage}>Next</button>
                            }
                            <select onChange={this.changeStep} defaultValue='Количество контактов'>
                                <option disabled>Количество контактов</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                        <div className='contacts'>
                            {contacts.slice(current, current + step).map(el =>
                                <PersonCard
                                    key={contacts.indexOf(el)}
                                    user={el}
                                />
                            )}
                        </div>
                    </div> :
                    null
                }
            </Loader>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.contacts,
        isFetching: state.contacts.isFetching
    }
};

const mapDispatchToProps = {
    getContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)