import React, { Component } from 'react'
import './style.css'

class InputRadio extends Component {

    render() {
        let { handleChange } = this.props
        let { index } = this.props
        let { question } = this.props

        return (
            <div className="input">
                <h3>Вопрос №{index}</h3>
                <p className="question">{question}</p>
                <div className="radio-conteiner">
                    <p><input className="check" name="optyion" value='a' onChange={ handleChange } type="radio" />-8</p>
                    <p><input className="check" name="optyion" value='b' onChange={ handleChange } type="radio" />3</p>
                    <p><input className="check" name="optyion" value='c' onChange={ handleChange } type="radio" />1</p>
                    <p><input className="check" name="optyion" value='d' onChange={ handleChange } type="radio" />0</p>
                </div>
            </div>
        )
    }


}

export default InputRadio