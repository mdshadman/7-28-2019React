import React, { Component } from 'react'
import logo from './logo.svg';
import './style.css';
import data from './Data';
import AddtoBasket from './AddtoBasket';
import Accordian from './accordian';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <div className="App-logo">
                        <img src={logo} alt='logo'></img>
                    </div>

                    <div className="butonsSection" >
                        {
                            data.HEADER_BUTTONS.map((buttons, i) => {
                                return (
                                    <button key={i} type='button' className={buttons.class}>{buttons.name}</button>
                                )
                            })
                        }
                    </div>


                </header>
                <AddtoBasket />
                <Accordian />
            </div>


        );
    }
}

export default Main;