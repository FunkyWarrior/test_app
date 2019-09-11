import React, {Component} from 'react';
import {getMainInfo} from "../../actions/main";
import {connect} from "react-redux";
import Loader from "../Loader";

class Main extends Component {

    componentDidMount() {
        if(!localStorage.getItem('mainInfo'))
        this.props.getMainInfo()
    }

    render() {
        const {mainInfo,isFetching} = this.props;
        console.log()
        return (
            <Loader flag={isFetching}>
                <div className='main'>
                    {mainInfo && Object.entries(mainInfo).map(el =>
                    <p key={el[0]}>{el[0]}: {el[1].length === 0 ? 'none' : `${el[1]}`}</p>)}
                </div>
            </Loader>
        );
    }
}

const mapStateToProps = state => {
    return {
        mainInfo:state.main.mainInfo,
        isFetching:state.main.isFetching
    }
};

const mapDispatchToProps = {
    getMainInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)