import React, { Component } from 'react'

export default class CharacterCard extends Component {
    render() {
        const {name, id} = this.props.info
        return (
            <div>
                {id}, {name}
            </div>
        )
    }
}
