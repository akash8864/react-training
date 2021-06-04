import React, { Component } from 'react'

 class RegComp extends Component {
    render() {
        console.log("**********RegComp***************");
        return (
            <div>
               regular component {this.props.name}
            </div>
        )
    }
}

export default RegComp
