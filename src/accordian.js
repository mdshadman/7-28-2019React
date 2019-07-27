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
        this.setState({
            toggleAccord: !this.state.toggleAccord,
            toggleIndex: index
        });
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
                                        {this.state.toggleAccord &&
                                            <div onClick={() => this.activateAccordian(index)}> <FontAwesomeIcon icon={faPlus} color="blue" /></div>
                                        }
                                        {!this.state.toggleAccord &&
                                            <div onClick={() => this.activateAccordian(index)}> <FontAwesomeIcon icon={faMinus} color="blue" /></div>
                                        }
                                    </div>
                                    {this.state.toggleAccord && this.state.toggleIndex == index &&
                                        <div><p className='accordianDescrp'>{items.accorDescription}</p></div>
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