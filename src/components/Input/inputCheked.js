import React, { Component } from 'react'
import './style.css'

class ChekedInput extends Component {
    render() {
        let { handleChange } = this.props
        let { index } = this.props
        let { question } = this.props
        
        return (
            <div className="input">
                <h3>Вопрос №{index}</h3>
                <p className="question">{question}</p>
                <div className="radio-conteiner">
                    <p><input className="check" name="cheked" value={this.setState='a'} onChange={ handleChange } type="checkbox" />-1</p>
                    <p><input className="check" name="cheked" onChange={ handleChange } type="checkbox" />-3</p>
                    <p><input className="check" name="cheked" onChange={ handleChange } type="checkbox" />1</p>
                    <p><input className="check" name="cheked" value={this.setState +'d'} onChange={ handleChange } type="checkbox" />1.5</p>
                </div>
            </div>
        )
    }
}

export default ChekedInput