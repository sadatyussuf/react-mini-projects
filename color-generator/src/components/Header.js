import React from 'react'

const Header = ({ hexCode, setHexCode, generateColors }) => {
    return (
        <section className="container">
            <h3>color generator</h3>
            <form action="">
                <input type="text" placeholder='#f15025' className="null" value={hexCode} onChange={(e) => setHexCode(e.target.value)} />

                <button type="submit" className="btn" onClick={generateColors}>submit</button>
            </form>
        </section>
    )
}

export default Header