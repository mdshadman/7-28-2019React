import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faMinus, faPlus, faShoppingBag, faLuggageCart } from '@fortawesome/free-solid-svg-icons'
import data from './Data'
class AddtoBasket extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const title = 'Zero to One';
        const description = 'The next Bill Gates will not build an operating sytem. The next Larry Page and Sergey Brin won\'t make a search engine. If you are copying these guys, you aren\'t learning from them. It\'s easier to copy a model than to make something new. '
        return (
            <div className="basketContainer">
                <div className='cardParaContainer'>
                    <div className='paraTexts'>
                        <span className='headTitle'>{title}</span>
                        <p className='paraText'>{description}</p>
                    </div>
                    <div className='hangingCard'>
                        {
                            data.ListItem.map((items, index) => {
                                return (
                                    <div className='cardBasket' key={index}>
                                        <div className="iconLeft">
                                            <FontAwesomeIcon icon={faCheck} color='green' />
                                        </div>
                                        <div className="itemLabel">
                                            <p className='listParaDetails'><span className='bolldTitlePara'>{items.boldTitle}</span>{items.detail}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='footerButtons'>
                            <div className="totalNumber">
                                <h3>120</h3>
                            </div>
                            <div>
                                <button className='minus'><FontAwesomeIcon icon={faMinus} color='blue' className='iconPadding' /></button>
                                <button className='number'>1</button>
                                <button className='add'><FontAwesomeIcon icon={faPlus} color='blue' className='iconPadding' /></button>
                            </div>
                        </div>
                        <div className='buttonCart'>
                            <button className='buttonPaddingCart'><FontAwesomeIcon icon={faShoppingBag} color='white' className='iconPadding' />Add to Basket</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddtoBasket;