import React, { Component } from 'react'
import './style.css'

class Select extends Component {
    render() {
        let { handleChange } = this.props
        let { index } = this.props
        let { question } = this.props
        let { value } = this.props
        
        return (
            <div className="input">
                <h3>Вопрос №{index}</h3>
                <p className="question">{question}</p>
                <select onChange={handleChange}>
                    <option name='select'>Ответ</option>
                    <option value={value} name='select'>3/5</option>
                    <option value={value} name='select'>5/3</option>
                </select>
            </div>
        )
    }
}

export default Select





