import React from "react";

export default ({children, flag,flag2}) => (
    flag ?
        <div>
            {flag2 ? children : null}
            <div className="box">
                <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        : children);