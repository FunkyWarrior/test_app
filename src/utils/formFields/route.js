import React from 'react'
import Main from '../../components/Pages/Main'
import Profile from '../../components/Pages/Profile'
import Contacts from '../../components/Pages/Contacts'
import Auth from '../../components/Pages/Auth'

const PAGENOTFOUND = () => (
    <div className="main">
        <div className="info-wrap">
            <div className="page-not-found">
                <h1>PAGE 404 NOT FOUND</h1>
                <img src="./images/logo.png" alt="" />
            </div>
        </div>
    </div>
);

export const route = [
    {
        id: 1,
        exact: true,
        path: "/",
        protected: true,
        component: Main
    },
    {
        id: 2,
        exact: true,
        path: "/profile",
        protected: true,
        component: Profile
    },
    {
        id: 3,
        exact: true,
        path: "/contacts",
        protected: true,
        component: Contacts
    },
    {
        id: 4,
        exact: true,
        path: "/auth",
        protected: false,
        component: Auth
    },
    {
        id: 5,
        component: PAGENOTFOUND
    }
];