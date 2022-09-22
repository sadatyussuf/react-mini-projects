import React from 'react'

const Header = ({ hexCode, setHexCode, generateColors, error }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <section className="container">
            <h3>color generator</h3>
            <form onClick={handleSubmit}>
                <input type="text" placeholder='#f15025' className={`${error && 'error'}`}
                    value={hexCode} onChange={(e) => setHexCode(e.target.value)} />

                <button type="submit" className="btn" onClick={generateColors}>submit</button>
            </form>
        </section>
    )
}

export default Header