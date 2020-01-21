import React, { Component } from 'react'
import './style.css'

class Result extends Component {

    render() {
        let { trueRadio } = this.props
        let { trueChek } = this.props
        let { trueSelect } = this.props
        let { trueBlock } = this.props
        let { trueText } = this.props

        return (
            <div className='result-wrapper'>
                <div className='result-conteiner'>
                    <h2>Результат</h2>
                    <p>{trueRadio}</p>
                    <p>{trueChek}</p>
                    <p>{trueSelect}</p>
                    <p>{trueBlock}</p>
                    <p>{trueText}</p>
                    <a href='http://localhost:3000'>
                        <button onClick={this.relod}>Закончить</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Result