import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Data from './Data';
class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleAccord: true
        };
    }
    activateAccordian = (index) => {
        const { selectedIndex } = this.state;
        if (index === selectedIndex) {
            this.setState({
                toggleIndex: null
            })
        } else {
            this.setState({
                toggleAccord: !this.state.toggleAccord,
                toggleIndex: index
            })
        }
    }
    render() {

        return (
            <div className="row">
                <div className="column">
                    {
                        Data.accordianData.map((items, index) => {
                            return (
                                <div className='accordianContainer' key={index}>
                                    <div className='headerList'>
                                        <p className='headerListText'>{items.listHeader}</p>
                                        <div >
                                            {this.state.toggleIndex === index && this.state.toggleAccord ?
                                                <FontAwesomeIcon icon={faMinus} color="blue" onClick={() => this.activateAccordian(index)} />
                                                : <FontAwesomeIcon icon={faPlus} color="blue" onClick={() => this.activateAccordian(index)} />
                                            }
                                        </div>
                                    </div>
                                    {this.state.toggleIndex === index && this.state.toggleAccord &&
                                        < div > <p className='accordianDescrp'>{items.accorDescription}</p></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="column1">
                    <div className='imageContainer'>
                        <p>570 * 370</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordian;