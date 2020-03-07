import React, { Component } from 'react'
import mainBg from '../main.gif'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="main-bg">                
                    <img src={mainBg} alt="rick-and-morty-gif"></img>
                </div>
            </header>
        )
    }
}
