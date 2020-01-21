import React, { Component } from 'react'
import './style.css'

class InputBlock extends Component {
   
   
    render() {
        let { handleChange } = this.props
        let { index } = this.props
        let { question } = this.props
        let { value} =this.props

        return (
            <div className="input">
                <h3>Вопрос №{index}</h3>
                <p className="question">{question}</p>
                <div className='option-row'>
                    <div>
                        <p><span>1.</span>Длина стороны АВ</p>
                        <p><span>2.</span>Длина проекции стороны CD на прямую AD</p>
                        <p><span>3.</span>Длина основания AD</p>
                        <p><span>4.</span>Длина средней линии трапеции ABCD</p>
                    </div>
                    <div>
                        <p><span>A.</span>6</p>
                        <p><span>Б.</span>8</p>
                        <p><span>B.</span>12</p>
                        <p><span>Г.</span>9</p>
                    </div>
                </div>
                <div className='input-block'>
                    <div className='input-row option'>
                        <p>A</p>
                        <p>Б</p>
                        <p>В</p>
                        <p>Г</p>
                    </div>
                    <div className='input-row'>
                        <p>1.<input value={this.setState='a'} name='row1' onChange={ handleChange } type="radio" /></p>
                        <p><input value={this.setState='b'} name='row1'  onChange={ handleChange } type="radio" /></p>
                        <p><input value={this.setState='c'} name='row1'  onChange={ handleChange } type="radio" /></p>
                        <p><input value={this.setState='d'} name='row1'  onChange={ handleChange } type="radio" /></p>
                    </div>
                    <div className='input-row'>
                        <p>2.<input value={value +'a'} name='row2' onChange={ handleChange } type="radio" /></p>
                        <p><input name='row2' onChange={ handleChange } type="radio" /></p>
                        <p><input name='row2' onChange={ handleChange } type="radio" /></p>
                        <p><input name='row2' onChange={ handleChange } type="radio" /></p>
                    </div>
                    <div className='input-row'>
                        <p>3.<input name='row3' onChange={ handleChange } type="radio" /></p>
                        <p><input name='row3' onChange={ handleChange } type="radio" /></p>
                        <p><input value={value +'c'} name='row3' onChange={ handleChange } type="radio" /></p>
                        <p><input name='row3' onChange={ handleChange } type="radio" /></p>
                    </div>
                    <div className='input-row'>
                        <p>4.<input  name='row4' onChange={ handleChange } type="radio" /></p>
                        <p><input  name='row4' onChange={ handleChange } type="radio" /></p>
                        <p><input name='row4' onChange={ handleChange } type="radio" /></p>
                        <p><input value={value +'d'} name='row4' onChange={ handleChange } type="radio" /></p>
                    </div>
                </div>
            </div >
        )
    }
}

export default InputBlock