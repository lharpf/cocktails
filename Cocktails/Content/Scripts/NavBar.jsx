﻿import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.showDrinkList = this.showDrinkList.bind(this);
    }

    showDrinkList() {
        $("#drinkList").show("fast");
    }

    render() {
        return (
            <nav className="navbar sticky-top bg-faded" role="navigation">
                <div>
                    <a className="navbar-brand" href="#">
                        Cocktails World
                    </a>

                    <a href="#" type="button" className="btn btn-secondary navbar-btn pull-right" onClick={this.showDrinkList}>
                        <span className="badge">{this.props.drinkListCount}</span><i className="fa fa-shopping-cart"></i> Selected drinks
                    </a>
                </div>
            </nav>
        );
    }
}