import React, { Component } from 'react'

export default class CharacterCard extends Component {
    render() {
        const {name, id, image} = this.props.info
        return (
            <div>
                <img src={image} alt="profile" width="128px" height="128px"/>
                {id}, {name}
            </div>
        )
    }
}
