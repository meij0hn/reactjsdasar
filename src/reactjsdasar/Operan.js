import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const {} = this.props
        return (
            <div>
                <h2>Operan State yang menjadi Props : {this.props.makanan}</h2>
                <button onClick={() => this.props.gantiMakanan("Soto")}>Ganti Makanan Props</button>
            </div>
        )
    }
}
