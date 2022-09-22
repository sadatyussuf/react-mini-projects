import React, { useState, useEffect } from 'react'

const Shades = ({ shades }) => {
    const [showText, setShowText] = useState('')

    const copyToClipBoard = (hex) => {
        console.log(hex)
        if (!navigator.clipboard) {
            console.error('Copy functionality not supported')
        } else {
            setShowText(hex)
            navigator.clipboard.writeText(`#${hex}`)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowText('')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [showText])

    return (
        <section className="colors">
            {
                shades.map((shade, index) => {
                    const { rgb, weight, hex, type } = shade
                    return (
                        <article key={index} className={`color ${type === 'shade' && 'color-light'}`}
                            style={{ backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }}

                            onClick={() => copyToClipBoard(hex)}
                        >
                            <p className="percent-value">
                                {weight}
                            </p>
                            <p className='color-value'>#{hex}</p>
                            {showText === hex && <p className="alert">copied to clipboard</p>}
                        </article>
                    )
                })
            }
        </section>
    )
}

export default Shades