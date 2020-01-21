import React, { Component } from 'react'
import questions from '../../qustion'
import TextInput from '../Input/inputText'
import ChekedInput from '../Input/inputCheked'
import InputRadio from '../Input/inputRadio'
import Select from '../Input/select'
import InputBlock from '../Input/inputBlock'
import Warning from '../Warning/Warning'
import Result from '../Result/Result'
import './style.css'


class FormConteiner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputRadio: '',
            inputChek: '',
            inputSelect: '',
            inputBlock: '',
            inputText: '',
            open: false,
            warning: false,
            quantity: false,
            trueRadio: '',
            trueChek: '',
            trueSelect: '',
            trueBlock: '',
            trueText: ''
        }
    }

    render() {
        return (
            <div>
                {this.state.quantity && 
                <Result count={this.state.сount} 
                        trueRadio={this.state.trueRadio}
                        trueChek={this.state.trueChek}
                        trueSelect={this.state.trueSelect}
                        trueBlock={this.state.trueBlock}
                        trueText={this.state.trueText} />}
                {this.state.warning && <Warning />}
                <div className="form">
                    <button onClick={this.clickFoo}>{this.state.open ? 'Закрыть' : 'Готовы начать?'}</button>
                    <div className="test" />
                    {this.state.open &&
                        <form onSubmit={this.handleSubmit}>
                            <InputRadio handleChange={this.handleRadioAnswer}
                                index={1}
                                question={questions[1].qustion} />
                            <ChekedInput handleChange={this.handleChekAnswer}
                                index={2}
                                question={questions[0].qustion} />
                            <Select handleChange={this.handleSelectAnswer}
                                index={3}
                                question={questions[5].qustion} />
                            <InputBlock handleChange={this.handleBlockAnswer}
                                value={this.state.inputBlock}
                                index={4}
                                question={questions[4].qustion} />
                            <TextInput name={'name'}
                                handleChange={this.handleTextAnswer}
                                index={5}
                                question={questions[3].qustion} />
                            <input className='submite' type="submit" value="Отправить" onClick={this.handleSubmit} />
                            <button className='clearForm' onClick={this.handleClearForm}>Очистить</button>
                        </form>}
                </div>
            </div>
        )
    }

    clickFoo = () => {

        this.setState({
            open: !this.state.open
        })
    }

    handleRadioAnswer = (e) => {
        let value = e.target.value;

        this.setState(prevState => ({
            ...prevState.answear, inputRadio: value
        }))
    }

    handleChekAnswer = (e) => {
        let value = e.target.value;

        this.setState(prevState => ({
            ...prevState.answear, inputChek: value
        }))
    }

    handleSelectAnswer = (e) => {
        let value = e.target.value;

        this.setState(prevState => ({
            ...prevState.answear, inputSelect: value
        }))
    }

    handleBlockAnswer = (e) => {
        let value = e.target.value;

        this.setState(prevState => ({
            ...prevState.answear, inputBlock: value
        }))
    }

    handleTextAnswer = (e) => {
        let value = e.target.value;

        this.setState(prevState => ({
            ...prevState.answear, inputText: value
        }))
    }

    handleClearForm = (e) => {
        e.preventDefault()

        this.setState({
            inputRadio: '',
            inputChek: '',
            inputSelect: '',
            inputBlock: '',
            inputText: '',
            open: !this.state.open
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.inputSelect === '') {
            this.setState({ warning: !this.state.warning })
        } else if (this.state.inputBlock === '') {
            this.setState({ warning: !this.state.warning })
        } else if (this.state.inputText === '') {
            this.setState({ warning: !this.state.warning })
        } else if (this.state.inputRadio === '') {
            this.setState({ warning: !this.state.warning })
        } else if (this.state.inputChek === '') {
            this.setState({ warning: !this.state.warning })
        } else {

            if (this.state.inputRadio === questions[1].CorrectAnswer) {
                this.setState({
                    trueRadio: 'Правильно, овте ' + questions[1].CorrectAnswer,    
                })
            } else {
                this.setState({
                    trueRadio: 'Не верно, правильный ответ -8, вариант' + questions[1].CorrectAnswer
                })
            }

            if (this.state.inputChek === questions[0].CorrectAnswer) {
                this.setState({
                    trueChek: 'Правильно, ответ ' + questions[0].CorrectAnswer,  
                })
            } else {
                this.setState({
                    trueChek: 'Не верно, правильный ответ -1;1.5, варианты ' + questions[0].CorrectAnswer
                })
            }

            if (this.state.inputSelect === questions[5].CorrectAnswer) {
                this.setState({
                    trueSelect: 'Правильно, овет ' + questions[5].CorrectAnswer,  
                })
            } else {
                this.setState({
                    trueSelect: 'Не верно, правильный ответ ' + questions[5].CorrectAnswer
                })
            }

            if (this.state.inputBlock === questions[4].CorrectAnswer) {
                this.setState({
                    trueBlock: 'Правильно, ответ 1.Б, 2.А, 3.В, 4.Г',   
                })
            } else {
                this.setState({
                    trueBlock: 'Не верно, правильные ответы 1.Б, 2.А, 3.В, 4.Г'
                })
            }

            if (Number(this.state.inputText) === questions[3].CorrectAnswer) {
                this.setState({
                    trueText: 'Правильно, ответ ' + questions[3].CorrectAnswer,  
                })
            } else {
                this.setState({
                    trueText: 'Не верно, правильный ответ ' + questions[3].CorrectAnswer
                })
            }

            this.setState({
                quantity: !this.state.quantity
            })
        }
    }
}
export default FormConteiner