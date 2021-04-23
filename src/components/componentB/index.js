import React, { Component } from 'react'

export default class ComponentB extends Component {

    render() {
        return (
            <div className={`component ${this.props.active ? "pink" : "blue"}`}>
                <span className={"component_title"}> Component B </span>
                <button onClick={this.props.handleClick}> Click me </button>
            </div>
        )
    }
}