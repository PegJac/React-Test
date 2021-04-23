import React, { Component } from 'react'

export default class ComponentA extends Component {
    render() {
        return (
            < div className={`component ${this.props.active ? "blue" : "pink"}`
            }>
                <span className={"component_title"}> Component A </span>
                <input className={"textInput"} onChange={this.props.renderText} placeholder="Skriv något kul!" />
                <button onClick={this.props.handleClick}> Click me </button>
            </div >
        )
    }
}