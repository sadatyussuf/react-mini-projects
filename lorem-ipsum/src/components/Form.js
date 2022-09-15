import React from 'react'

const Form = ({ value, setValue, generateText }) => {


    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        < form className="lorem-form" onClick={handleSubmit}>
            <label htmlFor="amount">paragraphs:</label>

            <input type="number" name='amount' id="amount" value={value} onChange={(e) => { setValue(e.target.value) }} />

            <button className="btn" onClick={generateText}>generate</button>
        </form>
    )
}

export default Form