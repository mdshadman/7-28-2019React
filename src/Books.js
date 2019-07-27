import React, { Component } from 'react';
import Data from './Data'
class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='booksContainer'>
                <h1 className='titleHeader'>More Books</h1>
                <div className='BooksCardContainer'>
                    {
                        Data.card.map((cards, index) => {
                            return (
                                <div className='BooksCard' key={index}>
                                    <div className='titleSubtitle'>
                                        <p className='cardTitlePAra'>{cards.title}</p>
                                        <p className='cardTitlePAra1'>{cards.subtitle}</p>
                                    </div>
                                    <div className="cardButtons">
                                        <p className='priceBook'>120</p>
                                        <button className='priceBookButton'><u>View Details</u></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="buttonCart">
                        <button className='buttonPaddingCart1'> <span className='allBooksText'>View All Books</span> </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;