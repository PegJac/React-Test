import React, { Component } from 'react'

export default class ComponentA extends Component {
    render() {
        return (
            < div className={`component ${this.props.active ? "blue" : "pink"}`
            }>
                <span className={"component_title"}> Component A </span>
                <input className={"text_input"} onChange={this.props.renderText} />
                <button onClick={this.props.handleClick}> Click me </button>
            </div >
        )
    }
}