import React, { Component } from 'react'
import './style.css'

class Warning extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clouse: true
        }
    }

    render() {
        return (
            <div>
                {this.state.clouse &&
                    <div className='warning-wrapper'>
                        <div className='warning-conteiner'>
                            <p>Вы не ответили на все вопросы!!!</p>
                            <div>
                                <button onClick={this.clouse}>Вернуться</button>
                            </div>
                        </div>
                    </div>}
            </div>

        )
    }
    
    clouse=()=>{
        this.setState({
            clouse: false
        })
    }
}

export default Warning