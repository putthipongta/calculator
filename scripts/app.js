const displayElement = document.getElementById('calculator-display')

const addText = (text) => {
    if (validator(text)) {
        const displayText = displayElement.value
        const newText = displayText + text
        setDisplay(newText)
    }
}

const validator = (input) => {
    const forbidden = ['+', '-', '*', '/', '.']
    const displayText = displayElement.value
    const symbolWithSymbol = 
        forbidden.includes(input)
        && forbidden.includes(displayText[displayText.length - 1])
    const symbolWithoutNumber =
        forbidden.includes(input)
        && displayText === ''
        && input !== '-'

    return (!symbolWithSymbol || symbolWithoutNumber)
}

function setDisplay(text) {
    displayElement.value = text
}

const clearDisplay = () => {
    setDisplay('')
}

const deleteLastCharacter = () => {
    const displayText = displayElement.value
    const newText = displayText.slice(0, displayText.length - 1)
    setDisplay(newText)
}

const calculateANumber = () => {
    const displayText = displayElement.value
    if (displayText) {
        const newText = eval(displayText)
        setDisplay(newText)
    }
}