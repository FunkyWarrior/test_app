import React from 'react';
import {connect} from 'react-redux';
import {Switch} from "react-router-dom";
import {route} from './utils/formFields/route'

import {clearUser} from './actions/auth'
import {clearContacts} from './actions/contacts'
import {clearMainInfo} from './actions/main'

import {checkHash} from './utils/funcs/funcs'

import Header from "./components/Header";
import {PrivateRoute} from "./components/PrivateRouter";



export class App extends React.Component {

    componentDidMount() {
        window.addEventListener = ("hashchange", checkHash)
    }

    componentWillUnmount() {
        window.removeEventListener = ("hashchange", checkHash)
    }


    render() {
        const {user, clearUser, showHeader,clearContacts,clearMainInfo} = this.props;
        return (
            <>
                {showHeader && <Header user={user} clearUser={clearUser} clearContacts={clearContacts} clearMainInfo={clearMainInfo}/>}
                <main>
                    <div className='container'>
                        <Switch>
                            {route.map(el => (
                                <PrivateRoute
                                    protectedRoute={el.protected}
                                    key={el.id}
                                    exact={el.exact}
                                    path={el.path}
                                    component={el.component}
                                />
                            ))}
                        </Switch>
                    </div>
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        showHeader: state.auth.showHeader
    }
};

const mapDispatchToProps = {
    clearUser,
    clearContacts,
    clearMainInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
