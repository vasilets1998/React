import React, { Component } from 'react';
import FormConteiner from '../Form/Form';
import './style.css'


class Title extends Component {
    render() {

        return (
            <div className='title-conteiner'>
                <div className="title">
                    <h1>Тест  по <span>Математике</span></h1>
                    <p>Lorem ipsum dolor</p>
                </div>
                <FormConteiner/>
            </div>
        )
    }
}



export default Title;