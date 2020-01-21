import React, { Component } from 'react'
import './style.css'

class TextInput extends Component {

    
    render() {

        let { question } = this.props
        let { index } = this.props
        let { name } = this.props
        let { value } = this.props
        let { handleChange } = this.props
        
        return (
            <div className="input">
                <label>
                    <h3>Вопрос № {index}</h3>
                    <p className="question">{question}</p>
                    <input placeholder="Введите ответ" name={name} type='text' value={value} onChange={ handleChange } />
                </label>
            </div>
        )
    }
}
export default TextInput