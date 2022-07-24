import './App.css'
import QuoteBox from './components/QuoteBox'
import colors from "./utils/colors"
import quotesJson from "./json/quotes.json"
import { useState } from 'react'

function App() {

  //random numbers:
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
  }

  const [color, setColor] = useState(getRandomElement(colors));
  const [quote, setQuote] = useState(getRandomElement(quotesJson));

  //Style objets:
  let newBackColor = {
    backgroundColor: color
  }
  let newFontColor = {
    color: color
  }

  // onclick event:
  const changeQuote = () => {
    setColor(getRandomElement(colors))
    setQuote(getRandomElement(quotesJson))
  }

  return (
    <main className="App" style={newBackColor}>
        <QuoteBox newFontColor={newFontColor} newBackColor={newBackColor} quote={quote} changeQuote={changeQuote}/>
        
    </main>
  )
}

export default App
