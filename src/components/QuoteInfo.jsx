import React from 'react'


const QuoteInfo = ({newFontColor, quote}) => {

    return (
        <div className="container__info">
            <span className="quote-text" style={newFontColor}>{quote.quote}</span>
            <div className="container__author">
                <h3 className="author-text" style={newFontColor}>{quote.author}</h3>
            </div>
        </div>
    )
}

export default QuoteInfo