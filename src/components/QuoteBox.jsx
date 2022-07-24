import React from 'react'
import { FaQuoteLeft } from "react-icons/fa"
import QuoteInfo from './QuoteInfo'

const QuoteBox = ({ newFontColor, newBackColor, quote, changeQuote }) => {
    return (
        <article className='container__quote' style={newFontColor}>
            <div className='icon-quote'>
                <FaQuoteLeft />
            </div>
            <div className="container-text-btn">
                <QuoteInfo newFontColor={newFontColor} quote={quote} />
                <button className="btn" onClick={changeQuote} style={newBackColor}>&#62;</button>
            </div>
        </article>
    )
}

export default QuoteBox